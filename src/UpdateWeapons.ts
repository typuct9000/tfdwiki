import dedent from 'dedent';
import { getItemStrings, type Strings_Locale } from "./GameData.js";
import { formatDataTable, WeaponSkillData, Weapons, type Weapon } from "./ManualData.js";
import { cleanUpString, initWiki, keysOf, replaceTags, editPageTemplateParams } from "./Utility.js";


const wiki = await initWiki();


// Fix for misnamed/typos
const WeaponAltNameMapping: Record<string, string> =
{
	"Fallen Hope": "Fallinghope",
	"Kingsguard's Lance": "KingsGuardlance",
	"Clairvoyance": "Clairvoyant",
	"Piercing Light": "Penetratinglight",
	"Enduring Legacy": "Greatlegacy",
	"Albion Cavalry Gun": "AlbionGunlance",
	"Nazeistra's Devotion": "NazestrasDevotion",
	"Secret Garden": "Secretgarden",
	"The Last Dagger": "LastDagger",
	"The Final Masterpiece": "LastMasterpiece",
	"Perforator": "Penetrator"
};

function getAbilityStrings(weapon: Weapon, lang: Strings_Locale = "EN")
{
	let ability = getItemStrings(`key_PerkAbility_${weapon.replaceAll(" ", "").replaceAll("'", "")}_Lv1`, lang);
	if (!ability && weapon in WeaponAltNameMapping)
	{
		ability = getItemStrings(`key_PerkAbility_${WeaponAltNameMapping[weapon]}_Lv1`, lang);
	}

	if (!ability)
	{
		throw `Can't find ability data for ${weapon}`;
	}

	if (!ability.Text || !ability.Desc)
	{
		throw `Incomplete ability data for ${weapon}`;
	}

	return { Text: ability.Text, Desc: ability.Desc, ...ability };
}


type WeaponTemplateParams =
{
	image: string,
	type: string,
	rarity: string,
	introduced: string,
	description: string,
	abilities: string,
	acquisition_overview: string,
	acquisition_details: string,
	notes: string,
	trivia: string,
	media: string
};


async function updateWeaponPage(weapon: Weapon, params: Partial<WeaponTemplateParams>)
{
	const page = new wiki.Page(weapon);
	return editPageTemplateParams(page, "WeaponPrimary", params);
}


export async function main()
{
	for (const id of keysOf(Weapons))
	{
		const weapon = Weapons[id];
		const ability = getAbilityStrings(weapon);
		const skill = ability.Text;
		const skillDescription = replaceTags(ability.Desc).replaceAll("\n", "\n<p>");
		const data = formatDataTable(WeaponSkillData[weapon]);

		const skillPage = new wiki.Page(skill);
		if (!(await skillPage.exists()))
		{
			const content = dedent`
				<noinclude>{{PreReleaseData}}</noinclude>
				{{SkillCard
				| skill_name = ${skill}
				| icon = File:Icon_Perk_${id}_A001.png

				| description =
				<p>${skillDescription}

				| info_table =
				${data}
				}}

				<noinclude>
				=== See Also ===
				* [[${weapon}]]

				[[Category:Weapon_Perks]]

				</noinclude>`;

			console.log(`Creating skill page ${skill} for weapon ${weapon}...`);
			//console.log(content);
			const res = await skillPage.save(cleanUpString(content), "BOT EDIT: Create skill description");
			//console.log(res);
		}
		else
		{
			console.log(`Updating skill page ${skill} for weapon ${weapon}...`);
			const res = await editPageTemplateParams(skillPage, "SkillCard",
				{
					icon: `File:Icon_Perk_${id}_A001.png`,
					description: skillDescription,
					info_table: data
				});

			//console.log(res);
		}
		
		console.log(`Updating weapon page ${weapon}...`);
		const res = await updateWeaponPage(weapon,
			{
				abilities: `{{:${skill}}}`,
				image: `Icon_RW_${id}_A001.png`
			});

		//console.log(res);
	}

	console.log("Done");
}

