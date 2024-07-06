export type Strings_Locale = "EN" | "KO" | "DE" | "FR" | "JA" | "ZH-Hans" | "ZH-Hant" | "IT" | "PL" | "PT" | "RU" | "ES";
export type Strings_Item = { Name: string, Comment?: string } & { [loc in Strings_Locale]?: Strings_Item_Value };
export type Strings_Item_Value = { Text?: string, Desc?: string, Narrative?: string, NarrativeLong?: string };

//import { parse as cvsparse } from 'csv-parse/sync';
//import { promises as fs } from 'node:fs';
//const content = await fs.readFile("data/Strings_Item.txt");
//const records = cvsparse(content, { bom: true });
//const strings = JSON.parse(records[1][3]) as Strings_Item[];

import ItemStrings from "../data/Item.json" assert { type: "json" };
import SkillStrings from "../data/Skill.json" assert { type: "json" };

export { ItemStrings, SkillStrings };

export function getStrings(strings: Strings_Item[], key: string, lang: Strings_Locale = "EN")
{
	for (const entry of strings)
	{
		if (entry.Name === key)
		{
			return entry[lang];
		}
	}

	return undefined;
}


export function getItemStrings(key: string, lang: Strings_Locale = "EN")
{
	return getStrings(ItemStrings as Strings_Item[], key, lang);
}


export function getSkillStrings(key: string, lang: Strings_Locale = "EN")
{
	return getStrings(SkillStrings as Strings_Item[], key, lang);
}
