import { Mwn, type MwnPage } from 'mwn';
import { parse as mwparse, type Template } from 'mwparser';


// Typed Object.keys
export const keysOf = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

// Make some fields of type non-optional
export type RequiredKeys<T, K extends keyof T> = Exclude<T, K> & Required<Pick<T, K>>


// Login to wiki
export async function initWiki()
{
	return Mwn.init(
		{
			apiUrl: 'https://tfd.wiki/api.php',

			username: process.env.WIKI_USERNAME,
			password: process.env.WIKI_PASSWORD,

			// Set default parameters to be sent to be included in every API request
			defaultParams: {
				assert: 'user' // ensure we're logged in
			}
		});
}


const TemplateEscapes =
{
	'|': '&#124;',
	'=': '&#61;',
	'[': '&#91;',
	']': '&#93;',
	'{': '&#123;',
	'}': '&#125;',
	'<': '&lt;',
	'>': '&gt;'
	
} as const;

// Replace unsafe characters for wiki template parameters.
export function escapeTemplateParam(str: string)
{
	for (const i of keysOf(TemplateEscapes))
	{
		str = str.replaceAll(i, TemplateEscapes[i]);
	}

	return str;
}


// Replace <img> and <SkillElement> tags with wiki templates
export function replaceTags(str: string): string
{
	// <img id="ArcheType_Fusion"></><SkillElement>Fusion</>
	str = str.replace(/(<img id="(\w+)"><\/>)?<SkillElement>(.+?)<\/>/g, 
		(_0, _1, img, text) =>
		{
			if (typeof img === "string" && img.startsWith("ArcheType_"))
			{
				// Use shorthand {{Type}} template
				return `{{${img.replace("ArcheType_", "")}}}`;
			}

			if (typeof img === "string" && img.startsWith("Common_"))
			{
				// Known common icon file
				return `{{SkillCard/E|${escapeTemplateParam(text)}|img=Icon_StatusEffect_${img}.png}}`;
			}

			// Ignore image
			return `{{SkillCard/E|${escapeTemplateParam(text)}}}`;
		});

	// <SkillValue>-1</>
	str = str.replace(/<SkillValue>(.+?)<\/>/g, (_, text) => `{{SkillCard/E|${escapeTemplateParam(text)}}}`);

	// Fix some strings missing space between preceeding text and tag
	str = str.replace(/(\w){{/g, "$1 {{");

	// Check there are no unparsed tags left
	const matches = str.match(/<(\w+)>.+?<\/>/)
	if (matches)
	{
		console.warn(`Unknown tags in item string: ${matches.join(", ")}`);
	}

	return str;
}


// Remove invalid characters from string
export function cleanUpString(str: string)
{
	str = str.replaceAll('\r', '')/*.toWellFormed()*/.normalize();

	// Work around some paranoid servers guarding against HTTP Request Smuggling Attacks, 
	// where requests containing "get sometext\n" cause a server error.
	//str = str.replace(/(get [^ ]+)\n/gi, "$1 \n");

	return str;
}


// Edit and set params for first instance of template on page
export async function editPageTemplateParams(page: MwnPage, templateName: string, params: Record<string, string>)
{
	if (!(await page.exists()))
	{
		throw `Page ${page.title} doesn't exist`;
	}

	// Warn if we could be potentially overwriting manual user changes
	const history = await page.history("comment", 1);
	const lastChangeSummary = history[0]?.comment;
	if (lastChangeSummary && !lastChangeSummary.match(/^BOT EDIT/i))
	{
		//throw `Not allowed to overwrite last non-bot edit ${lastChangeSummary}`;
		console.warn(`Updating a non-bot edit '${lastChangeSummary}'`);
	}

	return page.edit((rev) =>
		{
			const parsed = mwparse(rev.content);
			const template = parsed.templates.find((template) => template.name === templateName);
			if (!template) 
			{
				throw `Page ${page.title} does not have the expected ${templateName} template`;
			}

			// Unmodified text will not cause a changeset
			const changedParams = updateTemplateParams(template, params);
			const text = (changedParams.length > 0) ? parsed.toString() : rev.content;
			const summary = `BOT EDIT: Update ${changedParams.join(", ")}`;
			return { text, summary, minor: true };
		});
}


export function updateTemplateParams(template: Template, params: Record<string, string>) : string[]
{
	// Only update values that actually changed
	const changedParams = [] as string[];
	for (const name of keysOf(params))
	{
		let value = params[name];
		if (value !== undefined)
		{
			value = cleanUpString(value.trim());
			
			const param = template.getParameter(name);
			if (param)
			{
				if (param.value !== value)
				{
					if (param.value === "") 
					{
						// Work around a bug in mwparser
						param.rawValue.rawValue = ` ${value}\n`;
					}
					else
					{
						param.value = value;
					}

					changedParams.push(name);
				}
			}
			else
			{
				const isMultiline = value.includes('\n');
				template.setParameter(` ${name} `, isMultiline ? `\n${value}\n\n` : ` ${value}\n`);
				changedParams.push(name);
			}
		}
	}

	return changedParams;
}