import dedent from "dedent";
import fs from "node:fs";
import { getDescendantData } from "./ApiData.js";

export async function dumpDescendantBaseStats(filename = "descendant_base_stats.txt")
{
	let result = "";

	for (const i of await getDescendantData())
	{
		const statValue = (stat: string) => i.descendant_stat[0]?.stat_detail.find((j) => j.stat_type === stat)?.stat_value;

		result += dedent`
			${i.descendant_name}
			Max HP: ${statValue("Max HP")}
			Max Shield: ${statValue("Max Shield")}
			Max MP: ${statValue("Max MP")}
			DEF: ${statValue("DEF")}
			Shield Recovery Out of Combat: ${statValue("Shield Recovery Out of Combat")}
			Shield Recovery In Combat: ${statValue("Shield Recovery In Combat")}
			` + "\n\n";
	}

	fs.writeFileSync(filename, result);
}


import { ItemStrings, type Strings_Item } from "./GameData.js";

export function dumpBlueprints()
{
	for (const entry of ItemStrings as Strings_Item[])
	{
		if (entry.EN?.Text?.includes("Blueprint"))
		{
			console.log(entry.Name, entry.EN.Text);
		}
	}
}
