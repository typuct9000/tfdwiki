import { parse as mwparse, type Template } from 'mwparser';
import { getModuleData } from "./ApiData.js";
import { initWiki, updateTemplateParams } from "./Utility.js";


export async function updateModuleDescriptions()
{
	const data = await getModuleData();

	const modules = new Map<string, typeof data>();
	for (const module of data)
	{
		//const key = `${module.module_name}//${module.module_class}//${module.module_type}//${module.module_tier}`;
		modules.set(module.module_name, [...modules.get(module.module_name) ?? [], module]);
	}

	const wiki = await initWiki();

	for (const [name, variants] of modules)
	{
		console.log(`Updating ${name}...`);

		const page = new wiki.Page(name);
		if (!await page.exists())
		{
			console.warn(`Page for ${name} doesn't exist`);
			continue;
		}

		const checkTemplateName = (template: Template, check: string) => template.name === check || template.name === `Template:${check}`;

		const pageText = await page.text();
		const parsed = mwparse(pageText);
		const definitionsTemplate = parsed.templates.find((template) => checkTemplateName(template, "ModuleDefinitions"));
		if (!definitionsTemplate)
		{
			console.warn(`Page for ${name} doesn't have template ModuleDefinitions`);
			continue;
		}

		const definitionsParam = definitionsTemplate.getParameter(1);
		if (!definitionsParam || !definitionsParam.value || definitionsParam.value === "")
		{
			console.warn(`Page for ${name} has empty ModuleDefinitions`);
			continue;
		}

		const parsedInner = mwparse(definitionsParam.value);
		const moduleTemplates = parsedInner.templates.filter((template) => checkTemplateName(template, "ModuleUnique"));
		if (moduleTemplates.length === 0)
		{
			console.warn(`Page for ${name} doesn't have template ModuleUnique`);
			continue;
		}

		let needHumanReview = false;
		let reviewReason = "";

		if (variants.length !== moduleTemplates.length)
		{
			needHumanReview = true;
			reviewReason += "API has a different number of variants for this module. ";
			console.warn(`Page for ${name} has mismatched number of module variants: API has ${variants.length}, page has ${moduleTemplates.length}`);
		}

		function checkClass(module: typeof variants[0], template: Template)
		{
			return module.module_class === template.getParameter("class")?.value;
		}

		function checkRarity(module: typeof variants[0], template: Template)
		{
			const wikiValue = template.getParameter("rarity")?.value;
			return module.module_tier === wikiValue || (wikiValue === "Normal" && module.module_tier === "Standard");
		}

		function checkCategory(module: typeof variants[0], template: Template)
		{
			const wikiValue = template.getParameter("exclusive_category")?.value;
			return module.module_type === wikiValue || (module.module_type === null && (wikiValue === "" || wikiValue === undefined));
		}

		function findModuleVariantTemplate(module: typeof variants[0]) : Template | undefined
		{
			let result: Template | undefined = undefined;
			for (const template of moduleTemplates)
			{
				if (checkClass(module, template) && checkRarity(module, template) /*&& checkCategory(module, template)*/)
				{
					if (result)
					{
						return undefined; // Non-unique module variant, figure out what to do later
					}

					result = template;
				}
			}

			return result;
		}

		const changedParams = new Set<string>();

		for (let i = 0; i < variants.length; i++)
		{
			const module = variants[i]!;

			// Multiple module templates per page - find which one to modify
			const template = findModuleVariantTemplate(module);
			if (template)
			{
				const params = {} as Record<string, string>;

				for (const stat of module.module_stat)
				{
					if (stat.value.includes('\n'))
					{
						console.warn(`${name} has newline in description`);
					}

					params[`effect_${stat.level}`] = stat.value.replaceAll('\n', "<br/>");
				}

				//params["rarity"] = module.module_tier;
				params["exclusive_category"] = module.module_type ?? "";

				params["api_id"] = module.module_id;
				params["api_image"] = module.image_url.slice(module.image_url.lastIndexOf('/') + 1);

				updateTemplateParams(template, params).forEach((i) => changedParams.add(i));
			}
			else
			{
				needHumanReview = true;
				reviewReason += `Ambiguous module variants ${module.module_class}/${module.module_tier} not handled. `;
				console.warn(`Ambiguous module variant ${module.module_name}/${module.module_class}/${module.module_tier}/${module.module_type}`);
			}
		}

		definitionsParam.value = parsedInner.toString();
		let result = parsed.toString();

		// Remove pre-release tag
		result = result.replaceAll("{{PreReleaseData}}", "");

		if (needHumanReview)
		{
			const template = parsed.templates.find((template) => checkTemplateName(template, "NeedsReview"));
			if (!template)
			{
				console.warn(`Marking page ${name} for manual review`);
				result += `\n{{NeedsReview|${reviewReason}}}`;
			}
		}

		if (result !== pageText)
		{
			await page.save(result, `BOT EDIT: Update ${[...changedParams.values()].join(', ')}}`, { minor: false, bot: true, watch: false });
		}
		else
		{
			console.log("No changes");
		}
	}
}
