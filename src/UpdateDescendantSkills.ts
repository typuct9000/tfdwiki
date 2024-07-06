import { getSkillStrings, type Strings_Locale } from "./GameData.js";
import { Descendants, DescendantSkillData, formatDataTable, type Descendant } from "./ManualData.js";
import { initWiki, keysOf, replaceTags, editPageTemplateParams } from "./Utility.js";


const SkillTypeMap =
{
	0: "Passive",
	1: "Active1",
	2: "Active2",
	3: "Active3",
	4: "Active4",

} as const;


export type SkillType = typeof SkillTypeMap[keyof typeof SkillTypeMap];


function getAbilityStrings(character: Descendant, type: SkillType, lang: Strings_Locale = "EN")
{
	// Key_Skill_BlairPassive
	// Key_Skill_Rune01_KyleActive1
	let ability = getSkillStrings(`Key_Skill_${character}${type}`, lang);
	if (!ability)
	{
		throw `Can't find ability data for ${character}/${type}`;
	}

	if (!ability.Text || !ability.Desc)
	{
		throw `Incomplete ability data for ${character}/${type}`;
	}

	return { Text: ability.Text, Desc: ability.Desc, ...ability };
}


export async function main()
{
	const wiki = await initWiki();

	for (const charId of keysOf(Descendants))
	{
		for (const type of Object.values(SkillTypeMap))
		{
			const strings = getAbilityStrings(charId, type);
			const skill = strings.Text;
			const description = replaceTags(strings.Desc).replaceAll("\n", "\n<p>");

			const skillData = DescendantSkillData[skill];
			if (skillData === undefined)
			{
				throw `No skill data for ${skill}`;
			}
			
			const info_table = formatDataTable(skillData);

			try
			{
				const page = new wiki.Page(skill);
				console.log(`Updating skill page ${Descendants[charId]}/${skill} (${type})...`);
				await editPageTemplateParams(page, "SkillCard", { description, info_table });
			}
			catch (e)
			{
				console.error(e);
			}
		}
	}

	console.log("Done");
}


import { parse as mwparse } from 'mwparser';

export async function dumpSkills()
{
	let out = "";

	const wiki = await initWiki();

	for (const charId of keysOf(Descendants))
	{
		for (const type of Object.values(SkillTypeMap))
		{
			const strings = getAbilityStrings(charId, type);
			const skill = strings.Text;

			const page = new wiki.Page(skill);

			const parsed = mwparse(await page.text());
			const template = parsed.templates.find((template) => template.name === "SkillCard");
			const info_table = template?.getParameter("info_table")?.value ?? "";

			let data = "";
			info_table.split('\n').forEach((line) =>
			{
				if (line.includes("infoheader"))
				{
					data += line.replace(/{{SkillCard\/infoheader\s*\|([^}]*)}}/, "$1").trim() + '\n';
				}

				if (line.includes("inforow "))
				{
					data += line.replace(/{{SkillCard\/inforow\s*\|([^|]*)\|([^}]*)}}/, "$1 = $2").trim() + '\n';
				}
			});

			out += `${Descendants[charId]}/${skill}\n${data}\n`;
		}
	}

	console.log(out);
}