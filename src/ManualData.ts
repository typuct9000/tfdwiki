
export const Weapons =
{
	AR_1005: "Fallen Hope",
	AR_1006: "Divine Punishment",

	BR_1005: "Kingsguard's Lance",
	BR_1006: "Clairvoyance",

	SR_1005: "Afterglow Sword",
	SR_1006: "Piercing Light",

	MG_1005: "Enduring Legacy",
	MG_1006: "Albion Cavalry Gun",

	HC_1007: "Nazeistra's Devotion",
	HC_1008: "Perforator",

	SG_1005: "Smithereens",
	SG_1006: "Executor",

	TR_1005: "Secret Garden",
	TR_1006: "Greg's Reversed Fate",

	HG_1005: "The Last Dagger",
	HG_1006: "The Final Masterpiece",

	SMG_1005: "Thunder Cage",
	SMG_1006: "Python",

	SCR_1005: "Wave of Light",
	SCR_1006: "Blue Beetle",

	LNC_1005: "Sigvore's Proof",
	LNC_1006: "Restored Relic",

} as const;


export type Weapon = typeof Weapons[keyof typeof Weapons];


export const WeaponSkillData: Record<Weapon, string> = {
	"Fallen Hope": `
		Basic Information
		Hip Fire Accuracy = -40%
		Aimed Shot Accuracy = -40%
		On hitting a Poisoned enemy
		Firearm ATK = 10%
		Explosion
		Trigger Rate = 30.0%
		Damage Range = Radius 4.0m
		Additional Damage = 55%
		Poison
		Duration = 5s
		Damage Interval = 2.5s
		Additional Damage = 15%`,

	"Divine Punishment": `
		Basic Information
		Hip Fire Accuracy = -40%
		Aimed Shot Accuracy = -40%
		Meditation
		Duration = 15s
		Max Stacks = 3
		DEF = 5%
		DEF per Stack = 5%
		Praise
		Duration = 15s
		Max Stacks = 4
		Skill Cooldown Modifier = -1%
		Skill Cooldown Modifier per Stack = -1%
		Glory
		Duration = 30s
		Max Stacks = 5
		Firearm ATK = 0.4%
		Firearm ATK per Stack = 0.4%`,

	"Kingsguard's Lance": `
		Basic Information
		Rounds per Magazine = -10
		Guardian Lance
		Ammo Cost upon installation = -6
		Duration = 3s
		Duration Increase upon hit = 0.1s
		Max Duration = 6.0s
		Additional Damage = Firearm Damage x 6.0%
		Damage Interval = 0.11s
		Damage Range = Radius 3.0m
		Damage Range Increase per hit = Radius 0.1m`,

	"Clairvoyance": `
		Basic Information
		Beam Rifle Charge Increase Speed = -20%
		Void Gaze
		Duration = 2s
		Chill Resistance = -20%
		Appalled Calling
		Duration = 2.0s
		Chill Resistance = -20%
		Action Speed = -70%`,

	"Afterglow Sword": `
		Basic Information
		Fire Rate = -30%
		Effective Range (Drop-off-start) = 10%
		Death Propagation
		Duration = 5s
		Max Stacks = 6
		Reload Speed = 2%
		Weak Point Damage = 9%
		Reload Time Modifier per Stack = 3%
		Weak Point Damage per Stack = 3%
		On hitting an enemy Commander
		Firearm Critical Hit Rate = 12.5%
		On hitting a Colossus
		Firearm Critical Hit Rate = 12.5%`,

	"Piercing Light": `
		Basic Information
		Recoil = 40%
		Penetration = 180%
		Dispel
		Trigger Rate = 50%
		Duration = 1s
		Remove Buff = 100%
		Upon piercing two or more targets
		Firearm Critical Hit Rate = 100%
		Firearm Critical Hit Damage = 6%`,

	"Enduring Legacy": `
		Basic Information
		Effective Range (Drop-off-start) = -12.5%
		Effective Range (Drop-off-end) = -7.0%
		On hit
		Attribute Status Effect Trigger Rate = 6%
		Quenching
		Duration = 0.4s
		Max Stacks = 30
		Fire Resistance = -5%
		Fire Resistance per Stack = -0.8%
		On hitting an enemy inflicted with Burn
		Firearm ATK = 7%`,

	"Albion Cavalry Gun": `
		Basic Information
		Recoil = 20%
		On hitting a Stunned enemy
		Firearm ATK = 25%
		Stun
		Trigger Rate = 100%
		Duration = 2.0s`,

	"Nazeistra's Devotion": `
		Basic Information
		Aim Recovery Speed = -10%
		Devotion Mark
		Duration = 3s
		DEF = -10%
		On hitting an ally
		MP Cost = -85
		Shield recovery = 10%`,

	"Perforator": `
		Basic Information
		Hip Fire Accuracy = -20%
		Aimed Shot Accuracy = -20%
		On Weak Point hit
		Shield Damage Trigger Rate (Standard) = 50%
		Max Damage (Standard) = 60%
		Shield Damage Trigger Rate (Elite) = 35%
		Max Damage (Elite) = 10%
		Shield Damage Trigger Rate (Commander) = 20%
		Max Damage (Commander) = 1%
		Shield Damage Trigger Rate (Colossus) = 1.5%
		Max Damage (Colossus) = 0.5%
		Stun
		Trigger Rate = 60%
		Duration = 1.0s`,

	"Smithereens": `
		Basic Information
		Fire Rate = -40%
		Aim Recovery Speed = -70%
		On landing all bullets
		Firearm Critical Hit Rate = 100%
		Firearm Critical Hit Damage = 5%
		Amplification
		Duration = 1.0s
		Shell Capacity = 2`,

	"Executor": `
		Basic Information
		Hip Fire Accuracy = -20%
		Aimed Shot Accuracy = -20%
		Executor's Exaltation
		Duration = 5s
		Max Stacks = 5
		Accuracy = 10%
		Firearm Critical Hit Rate = 6%
		Accuracy per Stack = 5%
		Firearm Critical Hit Rate per Stack = 8%
		Firearm ATK at Max Stacks = 30%
		Electrocution
		Duration = 2.0s
		Damage Interval = 0.5s
		Additional Damage = Firearm Damage x 60.0%
		DEF = 3%
		On hitting an Electrocured enemy
		Firearm ATK = 5%`,

	"Secret Garden": `
		Basic Information
		Skill Cost = 20%
		Upon using a Dimension skill
		Trigger Rate = 23.4%
		Custom Resource Recovery = 10%
		Pest Control
		Trigger Rate = 30%
		Duration = 5s
		Max Stacks = 3
		Firearm ATK = 5%
		Skill Power = 5%
		Firearm ATK per Stack = 12%
		Skill Power per Stack = 12%`,

	"Greg's Reversed Fate": `
		Basic Information
		Hip Fire Accuracy = -20%
		Aimed Shot Accuracy = -20%
		Bombardment
		Trigger Rate = 30%
		Damage Range = Radius 3.0m
		Bombardment Count = 3
		Additional Damage = Firearm Damage x 100%
		Burn
		Duration = 3s
		Damage Interval = 1s
		Additional Damage = Firearm Damage x 10%`,

	"The Last Dagger": `
		Basic Information
		Recoil = 20%
		Patience
		Duration = 10s
		Max Stacks = 5
		Firearm Critical Hit Rate = 4%
		Firearm Critical Hit Rate per Stack = 4%
		Firearm Critical Hit Rate at Max Stacks = 12%
		Firearm ATK at Max Stacks = 30%
		Stun
		Duration = 3s`,

	"The Final Masterpiece": `
		Basic Information
		Reload Time Modifier = -20%
		Superb Performance
		Duration = 5s
		Stage 1 Weak Point Damage = 9%
		Stage 2 Weak Point Damage = 13%
		Stage 3 Weak Point Damage = 18%
		Beautiful Appearance
		Duration = 5s
		Stage 1 Firearm Critical Hit Rate = 17%
		Stage 2 Firearm Critical Hit Rate = 24%
		Stage 3 Firearm Critical Hit Rate = 34%
		Awesome Feature
		Duration = 5s
		Stage 1 Fire Rate = 3%
		Stage 2 Fire Rate = 4%
		Stage 3 Fire Rate = 6%`,

	"Thunder Cage": `
		Basic Information
		Reload Time Modifier = -20%
		Electric Shockwave
		Trigger Rate = 60%
		Damage Range = Radius 3.0m
		Additional Damage = Firearm Damage x 133%`,

	"Python": `
		Basic Information
		Recoil = 30.0%
		Prey
		Duration = 1.0s
		Max Stacks = 20
		Non-Attribute Resistance = -2%
		Toxin Resistance = -1%
		Non-Attribute Resistance per Stack = -3.6%
		Toxin Resistance per Stack = -1.3%`,

	"Wave of Light": `
		Basic Information
		Reload Time Modifier = -12%
		Solar Halo
		Duration = 1.0s
		Recoil = -50%
		Firearm Critical Hit Rate = 45%
		Lunar Halo
		Trigger Rate = 100%
		Duration = 6s
		Weaken Regeneration = -50%`,

	"Blue Beetle": `
		Basic Information
		Skill Cost = 20%
		Arcane Energy
		Trigger Rage = 50%
		Duration = 10s
		Skill Critical Hit Rate = 10%
		Purification
		Trigger Rate = 50%
		Duration = 1s
		Remove Debuff = 100%`,

	"Sigvore's Proof": `
		Basic Information
		Rounds per Magazine = -6
		Sticky Bomb
		Detonation Time = 3s
		Burn
		Duration = 3s
		Damage Interval = 1s
		Max Stacks = 4
		Additional Damage = Firearm Damage x 10.0%
		Additional Damage per Stack = Firearm Damage x 13%`,

	"Restored Relic": `
		Basic Information
		Fire Rate = -20%
		Guided Round
		Trigger Rate = 60%
		Ancient Fire
		Trigger Rate = 25%
		Duration = 3s
		Damage Interval = 1s
		Additional Damage = Firearm Damage x 20%`,

} as const;


import dedent from 'dedent';

export function formatDataTable(data: string)
{
	let result = "";
	const lines = dedent(data).split("\n");
	for (const line of lines)
	{
		const [key, value] = line.trim().split("=");
		if (key)
		{
			if (value === undefined)
			{
				result += `\n{{SkillCard/infoheader | ${key.trim()} }}\n`;
			}
			else
			{
				result += `{{SkillCard/inforow | ${key.trim()} | ${value.trim()} }}\n`;
			}
		}
	}

	return result.trim();
}


export const Descendants =
{
	AJax: "Ajax",
	Blair: "Blair",
	Bunny: "Bunny",
	Enzo: "Enzo",
	Esiemo: "Esiemo",
	Freyna: "Freyna",
	Gley: "Gley",
	Jayber: "Jayber",
	Kyle: "Kyle",
	Lepic: "Lepic",
	Sharen: "Sharen",
	Valby: "Valby",
	Viessa: "Viessa",
	Yujin: "Yujin",
	
} as const;


export type Descendant = keyof typeof Descendants;


export const DescendantSkillData : Record<string, string> = 
{

"Event Horizon": `
Singularity Level
Lv.1 = When Void Energy is 30%
Lv.2 = When Void Energy is 60%
Lv.3 = When Void Energy is 100%
Singularity Effect
Lv.1 = Cooldown 5% Decrease
Lv.2 = Cooldown 10% Decrease
Lv.3 = Cooldown 20% Decrease
Void Energy
Void Energy Depleted = Out of Combat for 10.0s`,

"Orbit Barrier": `
Basic Info
Cooldown = 15.0s
MP Cost = 30.0
Barrier
Effect Range = 1.7m x 2.9m
Max Expandable Range = 200%
HP = Caster's HP 80%
DEF = Caster's DEF 100%
Duration = 15.0s
Max Reflection DMG Rate = DEF x 100%
Enhanced Max Reflection DMG Rate = DEF x 117%
Void Energy
Obtained Amount = Max Void Energy x 35%`,

"Void Walk": `
Basic Info
Cooldown = 20.0s
MP Cost = 35.0
Skill Effect
Damage = Skill Power x ? / 554.7% / 567.7% / 578.1%
Damage Range = Radius 6.0m
Max Expandable Range = 300%
Stun
Duration = 3.0s
Enhanced Leap
Duration = 10.0s / 12.0s / 14.0s / 16.0s
Shield Increase Amount = Max Shield x 53%
Void Energy
Obtained Amount = Max Void Energy x 35%`,

"Expulsion": `
Basic Info
Cooldown = 15.0s
MP Cost = 30.0
Skill Effect
Damage = Skill Power x 1212.9% / 1240.2% / 1270.6% / 1294.4%
Damage Range = Radius 4.0m
Enhanced Damage = Skill Power x 1322.5% / 1352.3% / 1385.4% / 1407.0%
Enhanced Range = Radius 6.0m
Max Expandable Range = 300%
Void Energy
Obtained Amount = Max Void Energy x 35%`,

"Hyper Cube": `
Basic Info
Cooldown = 35.0s
MP Cost = 50.0
Barrier
HP = Caster's HP 50%
DEF = Caster's DEF 100%
Duration = 10.0s / 15.0s / 20.0s / 25.0s
Effect Range = Radius 4.0m
Max Expandable Range = 200%
Enhanced Barrier
Firearm ATK Increase Amount = 10%
Explosive ATK Increase = 20%
Void Energy
Obtained Amount = Max Void Energy x 35%`,

"Pitmaster": `
Critical Hit Damage Increase
Default = 10.0%
Critical Hit Rate Increase - Flame Zone Count
x1 = 5.0%
x2 = 9.0%
x3 or more = 14.0%`,

"Blaze Up": `
Basic Info
Max Stacks = 3
Stack Cooldown = 12.0s
MP Cost = 25.0
Flame Zone
Continuous Damage = Skill Power x 26.3%
Damage Interval = 1.0s
Duration = 12.0s
Effect Range = Radius 3.5m
Max Expandable Range = 200%
Burn
Continuous Damage = Skill Power x 6.8%
Damage Interval = 1.0s
Duration = 5.0s`,

"Extinguish": `
Basic Info
Cooldown = 28.0s
Aggressive Flavor
MP Recovery Amount per Flame Zone = 19.0
Skill Power Modifier Increase = 23.0%
Duration = 10.0s`,

"Burn Taste": `
Basic Info
Cooldown = 30.0s
MP Cost = 35.0
Skill Effect
Continuous Damage = Skill Power x 129.1%
Damage Interval = 0.3s
Duration = 4.5s
Effect Range = Radius 3.0m
Max Expandable Range = 200%
Burn
Continuous Damage = Skill Power x 6.8%
Damage Interval = 1.0s
Duration = 5.0s`,

"Deadly Cuisine": `
Basic Info
Cooldown = 120.0s
MP Cost = 60.0
Giant Fireball
AoE Damage = Skill Power x 386.0%
AoE Damage Range = Radius 6.0m
Max Expandable Range = 200%
Small Fireball
Amount = x3
AoE Damage = Skill Power x 584.9%
AoE Damage Range = Radius 3.5m
Max Expandable Range = 200%
Flame Zone
Continuous Damage = Skill Power x 26.8%
Damage Interval = 1.0s
Duration = 12.0s
Effect Range = Radius 3.5m
Max Expandable Range = 200%
Burn
Continuous Damage = Skill Power x 6.8%
Damage Interval = 1.0s
Duration = 5.0s`,

"Rabbit Foot": `
Electricity During Movement
Acquisition Cycle = per 1m
Acquire = Max Electricity x 0.2%
Electricity While Stopped
Cost Interval = Every Cycle
Cost Amount = Max Electricity in 1 sec x 15.0%
On Double Jump
Damage = Skill Power x 128.8%
Damage Range = Radius 4.0m
Max Expandable Range = 300%`,

"Thrill Bomb": `
Basic Info
Cooldown = 10.0s
Electricity Cost = 100.0
Skill Effect
Damage = Skill Power x 130.3% / 150.2% / ? / ?
Per 10% of Electricity Retained = Skill Power x +15%
Damage Range = Radius 7.0m
Max Expandable Range = 300%
Max Hits = x6 monsters
Electrocution
Continuous Damage = Skill Power x 46.6% / 53.6% / ? / ?
Continuous Damage Interval = 1.0s
Duration = 3.0s`,

"Speed of Light": `
Basic Info
Cooldown = 2.0s
MP Cost = 12.0
Continuous MP Cost Interval = Every cycle
Continuous MP Cost = Max 16.0 / 19.0 / 22.0 / 25.0 in 1s
Skill Effect
Sprint Speed Increase = 50.0%
Electricity
Acquisition Cycle = per 1m
Acquire = Max Electricity x 0.6%`,

"Lightning Emission": `
Basic Info
Cooldown = 30.0s
Electricity Cost = 266.0
Lightning Emission
Move Distance = Emits every 7.0m moved
Damage = Skill Power x 139.7% / 171.2% / ? / 178.1%
Per 10% of Electricity Retained = Skill Power x +15%
Effect Range = Radius 7.0m
Max Expandable Range = 300%
Duration = 20.0s
Electrocution
Continuous Damage = Skill Power x 49.9% / 61.1% / ? / 63.6%
Continuous Damage Interval = 1.0s
Duration = 3.0s`,

"Maximum Power": `
Basic Info
Cooldown = 30.0s / 41.0s / ? / ?
Cost Interval = Every cycle
Continuous Electricity Cost = Max 240.0 in 1s
Skill Effect
Lv.2 Damage Increase Time = Maintain for 1.1s
Lv.3 Damage Increase Time = Maintain for 1.1s
Lv.1 Damage = Skill Power x 471.9% / 520.7% / ? / ?
Lv.2 Damage = Lv.1 Damage x 20.0% Amplification
Lv.3 Damage = Lv.1 Damage x 50.0% Amplification`,

"Fire Supporter": `
Fire Support
General Rounds Increase = 10.0%
Special Rounds Increase = 10.0%
Impact Rounds Increase = 20.0%
High-Powered Rounds Increase = 20.0%
Additional Increase per Ally and Squad Member = 4.0%
Encrypted Storage Box
Time Limit Increase = 120.0%
Speed Reduction = 150.0%
Count Deduction (Minimum 1) = 3
Angle Reduction = 15
Time Penalty on Failure = 50.0%`,

"Start Supply": `
Basic Info
Cooldown = 35.0s
MP Cost = 35.0
Ammo Supply Device
Duration = 12.0s
Supply in Field = 8%
Supply during Interception = 12%`,

"Explosive Drone": `
Basic Info
Maximum Stacks = 2
Stack Cooldown = 22.0s
MP Cost = 20.0
Explosive Drone
AoE Damage = Skill Power x 811.8% / ? / ? / 837.5%
AoE Damage Range = Radius 3.0m
Max Expandable Range = 300%
Projectile Speed Increase = 0.0%`,

"Enhance Combat Suit": `
Basic Info
Cooldown = 30.0s
MP Cost = 40.0
Enhance Combat Suit
Duration = 6.0s
Initial Shield Recovery = 20.0%
Continuous Shield Recovery = 3.0%`,

"Perfect Support": `
Basic Info
Cooldown = 90.0s
MP Cost = 60.0
Small Supply Drone
Duration = 7.5s
Damage = Skill Power x 14.9% / ? / ? / 15.9%
AoE Damage = Skill Power x 129.7% / ? / ? / 138.2%
AoE Damage Range = Radius 6.0m
Max Expandable Range = 300%
Projectile Speed Increase = 0.0%
Ammunition Supply
Supply Interval = 1.5s
Supply in Field = 7.0%
Supply during Intercept = 7.0%
Perfect Support
Firearm ATK Increase = 20%
Firearm Critical Hit Rate Increase = 20%
Cooldown Modifier = +10%`,

"Adventitious Habit": `
Basic Info
Cooldown = 30.0s
Skill Effect
Explosion Damage = Skill Power x 1617.3%
Explosion Damage Range = Radius 4.0m
Max Expandable Range = 200%`,

"Time Bomb": `
Basic Info
Maximum Stacks = 5
Cooldown per Stack = 12.0s
MP Cost = 12.0
Skill Effect
AoE Damage = Skill Power x 339.1% / ? / ? / 407.3%
AoE Damage Range = Radius 3.0m
Max Expandable Range = 200%
Projectile Speed Increase = 0.0%`,

"Blast": `
Basic Info
Cooldown = 10.0s
MP Cost = 15.0
Detonation
Skill Power Modifier Increase per Bomb = 25%
Skill Power Modifier Increase = 5 times max`,

"Guided Landmine": `
Basic Info
Maximum Stacks = 3
Stack Cooldown = 14.0s
MP Cost = 18.0
Guided Landmine
Detection Range = Radius 10.0m
Detection Time = 40.0s
AoE Damage = Skill Power x 998.1% / ? / ? / 1061.9%
AoE Damage Range = Radius 3.0m
Max Expandable Range = 200%
Projectile Speed Increase = 0.0%`,

"Arche Explosion": `
Basic Info
Cooldown = 80.0s
MP Cost = 65.0
Skill Effect
Movement Speed Increase = 120%
Damage = Skill Power x 80.5% / ? / ? / 85.8%
AoE Damage = Skill Power x 6958.5% / ? / ? / 7414.4%
AoE Damage Range = Radius 6.0m
Max Expandable Range = 200%
Madness
Duration = 10.0s
Firearm ATK Increase = 25.0%
Movement Speed Increase = 30%
DEF Reduction = 30.0%`,

"Contagion Links": `
Basic Info
Max Stacks = 15
Toxic Skill Power Increase = 1.2%`,

"Venom Trauma": `
Basic Info
Cooldown = 11.0s
MP Cost = 30.0
Projectile
Damage = Skill Power x 174.6%
Projectile Speed Increase = 0.0%
Toxic Puddle
Duration = 5.0s
Effect Range = Radius 3.0m
Room 0 Trauma
Continuous Damage = Skill Power x 9.9%
Damage Interval = 1.0s
Duration = 6.0s
Effect Range = Radius 4.0m
Max Expandable Range = 300%
Poison
Continuous Damage = Skill Power x 58.4%
Damage Interval = 1.0s
Duration = 10.0s`,

"Defense Mechanism": `
Basic Info
Cooldown = 20.0s
MP Cost = 40.0
Plague Bodyarmor
Duration = 10.0s
DEF Increase Amount = 5.0%
Imbue Rate = 20.0%
Room 0 Trauma
Continuous Damage = Skill Power x 9.9%
Damage Interval = 1.0s
Duration = 6.0s
Effect Range = Radius 4.0m
Max Expandable Range = 300%
Poison
Continuous Damage = Skill Power x 58.4%
Damage Interval = 1.0s
Duration = 10.0s`,

"Putrid Venom": `
Basic Info
Cooldown = 25.0s
MP Cost = 35.0
Projectile
Projectile Speed Increase = 0.0%
Toxic Swamp
Continuous Damage = Skill Power x 38.7%
Damage Interval = 1.0s
Duration = 12.0s
Effect Range = Radius 4.0m
Max Expandable Range = 300%
Toxic Footprint
Duration = 8.0s
Venom-Soaked
Duration = 10.0s
Poison
Continuous Damage = Skill Power x 58.4%
Damage Interval = 1.0s
Duration = 10.0s`,

"Venom Baptism": `
Basic Info
Cooldown = 110.0s
MP Cost = 55.0
Exclusive Weapon
Damage = Skill Power x 253.7%
Max Bullets = x30 Shots
Duration = 10.0s
Room 0 Trauma
Continuous Damage = Skill Power x 75.9%
Damage Interval = 1.0s
Duration = 6.0s
Effect Range = Radius 4.0m
Max Expandable Range = 300%
Poison
Continuous Damage = Skill Power x 439.0%
Damage Interval = 1.0s
Duration = 10.0s`,

"Thirst": `
Non-Frenzied
Damage Reduction = Total DMG x 4.0%
Life Sphere
Drop Rate = 30%
Health Recovery Amount = Max HP x 4.0%
Duration = 8.0s
Power of Life Obtain Amount = x1`,

"Frenzied": `
Basic Info
Cooldown = 1.0s
HP Cost = Max HP x 10.0%
Frenzied
Firearm ATK Increase Amount = 15.0%
Firearm Explosive ATK Increase Amount = 15.0%
Firearm Penetration Increase Amount = 51
Incoming Recovery Decrease = 50.0%
Received DMG Increase = 10.0%`,

"Life Siphon": `
Basic Info
Cooldown = 20.0s
Power of Life Cost = x3.0
Skill Effect
Damage = Skill Power x 317.5%
Damage Range = Radius 6.0m
Max Expandable Range = 300%
Health Recovery Amount = Max HP x 5.0% per Enemy hit
Frenzied
Damage = Skill Power x 453.3%
Per 10% of HP missing = Skill Power +10%
Non-Frenzied
Damage Decrease = 2.0%
Duration = 8.0s
Max Stacks = x10`,

"Increased Sensory": `
Basic Info
Cooldown = 40.0s
HP Cost = Max HP x 5.0%
Maximize Lethality
Duration = 5.0s
Running Speed = 50% Decrease
Sprint Speed = 50% Decrease
Movement Speed When Aiming = 50% Decrease
Maximize Recovery
Running Speed = +30%
Sprint Speed = +30%
Movement Speed When Aiming = +30%
Life Sphere Drop Rate = 60%
Health Recovery Amount = Max HP x 8.0%
Duration = 10.0s`,

"Massacre": `
Basic Info
Cooldown = 1.0s
HP Cost = Max HP x 15.0%
Minimum Use Condition = Power of Life x3 or more
Exclusive Weapon
Damage = Same as Equipped Weapon
Frenzied
Additional Damage = Skill Power x 64.7%
Per 10% of HP missing = Skill Power +10%
Non-Frenzied
Stun Duration = 2.7s`,

"Turret Sync": `
Turret Sync
Firearm ATK Increase Amount = 20.0%
Skill Power Increase = 20.0%`,

"Assault Turret": `
Basic Info
Cooldown = 20.0s
MP Cost = 30.0
Assault Turret
Damage = Skill Power x 100.0%
Duration = 12.0s
HP = Summoner's 72.0%
Shield = Summoner's 72.0%
Skill Power Modifier = Summoner's 62.9%
DEF = Summoner's 80.0%
Enhanced
Duration = 10.0s
Continuous Damage = Skill Power x 104.9%
Damage Interval = 0.3s
Damage Range = Radius 4.5m
Max Expandable Range = 200%`,

"Medical Turret": `
Basic Info
Cooldown = 45.0s
MP Cost = 40.0
Medical Turret
Health Recovery Amount = Max HP x 2.1%
Recovery Interval = 3.0s
Recovery Range = Radius 6.0m
Max Expandable Range = 200%
Duration = 12.0s
HP = Summoner's 140.0%
Shield = Summoner's 140.0%
Skill Power Modifier = Summoner's 62.9%
DEF = Summoner's 90.0%
Enhanced
Duration = 10.0s
Taunt Range = Radius 5.5m
Max Expandable Range = 200%`,

"Multi-purpose Gun": `
Basic Info
Cooldown = 15.0s
MP Cost = 30.0
Exclusive Weapon
Max Bullets = x3 Shots
On Hitting Turret
Health Recovery Amount = 60.0%
Duration Increase Amount = 15.0s
On Hitting Enemy
Damage = Skill Power x 520.9%`,

"Reactivate": `
Basic Info
Cooldown = 80.0s
MP Cost = 30.0
Projectile
Fire Amount = x3 Shots
Burst Damage = Skill Power x 492.5%
Explosion Damage Range = Radius 6.0m
Max Expandable Range = 200%
Overhaul
Duration = 30.0s`,

"Experienced Technician": `
Basic Info
Cooldown = 300.0s
Magnetic Force
Max Amount = Max Shield x 200%
Cost Interval = 1.0s
Cost Amount = Max Magnetic Force x 1.0%
Magnetic Care
Duration = 10.0s
Recovery Interval = 1.0s
Shield Recovery = Max Shield x 8.0%
Magnetic Force Recovery = Max Magnetic Force x 8.0%`,

"Repulsion Dash": `
Basic Info
Max Stacks = 3
Stack Cooldown = 12.0s
Skill Effect
Max Move Distance = 10m
Damage = Skill Power x 360.2%
Damage Range = 1.5m x 1.5m
Max Expandable Range = 200%
Magnetic Force Recovery = Max Shield x 30.0%
DEF +
DEF Increase Amount = 150%
Duration = 5.0s`,

"Magnetic Bulwark": `
Basic Info
Cooldown = 2.0s
Shield Cost = Max Shield x 5.0%
Shield Cost Interval = 1s
Barrier
Effect Range = 2m x 3m
HP = 50% of Caster's Max Shield
DEF = Caster's DEF 100%
Duration = 8.0s
Magnetic Force Recovery = Enemy Damage x 100.0%`,

"Magnetism Spurt": `
Basic Info
Cooldown = 15.0s
Magnetic Force Cost Interval = 1s
Magnetic Force Cost = Max Magnetic Force x 2.0%
Duration = 15.0s
Skill Effect
Damage = Skill Power x 660.6%
Additional Damage = Consumed Magnetic Force x 286.1%
Damage Range = Radius 5.0m
Max Expandable Range = 200%
Ally Shield Recovery Amount = Max Shield x 100.0%
Damage Reduction = 25%`,

"Superconductivity Thrusters": `
Basic Info
Cooldown = 60.0s
Minimum Use Condition = Max Magnetic Force x 30% owned
Skill Effect
Damage = Skill Power x 10436.7%
Additional Damage = Consumed Magnetic Force x 4719.8%
Damage Range = Radius 5.0m
Max Expandable Range = 200%
Duration = 6s`,

"Close Call": `
Basic Info
Cooldown = 600.0s
Close Call
Duration = 5.0s
Health Recovery Amount = Max HP x 50.0%`,

"Grenade Throw": `
Basic Info
Cooldown = 6.0s
MP Cost = 35.0
Grenade
AoE Damage = Skill Power x 487.3%
Effect Range = Radius 5.0m
Max Expandable Range = 200%`,

"Overclock": `
Basic Info
Cooldown = 20.0s
MP Cost = 24.0
Overclock
Duration = 17.0s
Skill Power Modifier Increase = 20%
Burn
Duration = 3.0s
Damage Interval = 1.0s
Continuous Damage = Skill Power x 115.2%`,

"Traction Grenade": `
Basic Info
Cooldown = 25.0s
MP Cost = 45.0
Traction Grenade
Effect Range = Radius 9.0m
Duration = 2.0s`,

"Overkill": `
Basic Info
Cooldown = 65.0s
MP Cost = 40.0
Continuous MP Cost = 20.0
Exclusive Weapon
Burst DMG = Skill Power x 2590.6%
Continuous Damage = Skill Power x 41.1%
Duration = 8.0s
Continuous Damage Duration = 4.0s
Continuous Damage Interval = 0.5s
Continuous Damage Range = Radius 5.0m
Max Expandable Range = 200%`,

"Assassinator": `
Basic Info
Cooldown = 45.0s
Skill Effect
Outgoing DMG Increase when attacking non-targeted enemies = 15.0%`,

"Cutoff Beam": `
Basic Info
Cooldown = 7.0s
MP Cost = 27.0
Skill Effect
Damage = Skill Power x 668.2%
Damage Range = 4.4m x 6.0m
Max Expandable Range = 150%
Electrocution
Continuous Damage = Skill Power x 95.5%
Continuous Damage Interval = 1.0s
Duration = 3.0s`,

"Active Camouflage": `
Basic Info
Cooldown = 20.0s
MP Cost = 15.0
Active Camouflage
Duration = 4.0s
Ambush
Outgoing DMG Increase = 70.0%`,

"Shock Nuts": `
Basic Info
Cooldown = 15.0s
MP Cost = 20.0
Skill Effect
Effect Range = Radius 3.0m
Max Expandable Range = 200%
Stun
Duration = 4.5s`,

"Flash Shortsword": `
Basic Info
Cooldown = 60.0s
MP Cost = 40.0
Skill Effect
Enemies with Max Lock-On = x10 monsters
Max Daggers flying towards 1 enemy = x3
Damage = Skill Power x 209.5%
Damage Range = Radius 2.5m
Max Expandable Range = 200%
Electrocution
Continuous Damage = Skill Power x 29.9%
Continuous Damage Interval = 1.0s
Duration = 3.0s`,

"Water Intake": `
Decrease Amount = 30.0%`,

"Bubble Bullet": `
Basic Info
Cooldown = 10.0s
MP Cost = 36.0
Bubble Bullet
Burst Damage = Skill Power x 365.7%
Explosion Damage Range = Radius 1.5m
Projectile Speed Increase = 0.0%
Damage Increase per count = 25%
Small Puddle
Continuous Damage = Skill Power x 25.8%
Damage Interval = 1.0s
Duration = 10.0s
Effect Range = Radius 3.0m
Max Expandable Range = 200%
Laundry
Duration = 20.0s
Electric Resist Decrease Amount = 20.0%
Non-Attribute Resistance Decrease = 20.0%`,

"Plop Plop": `
Basic Info
Cooldown = 25.0s
MP Cost = 48.0
On Hitting Enemy
Cooldown = 2.0s
Max Cooldown Reduction = 10.0s
Big Puddle
Continuous Damage = Skill Power x 27.2%
Damage Interval = 1.0s
Duration = 15.0s
Range = Radius 6.0m
Max Expandable Range = 200%
Laundry
Duration = 20.0s
Electric Resist Decrease Amount = 20.0%
Non-Attribute Resistance Decrease = 20.0%`,

"Clean Up": `
Basic Info
Max Stacks = 2
Stack Cooldown = 22.0s
MP Cost = 50.0
Liquified
Duration = 5.0s
Movement Speed = 1000
Damage Reduction = 50%
Waterway
Continuous Damage = Skill Power x 130.2%
Damage Interval = 1.0s
Duration = 15.0s
Effect Range = 2.0m x 2.0m
Max Expandable Range = 200%
Laundry
Duration = 20.0s
Electric Resist Decrease Amount = 20.0%
Non-Attribute Resistance Decrease = 20.0%`,

"Laundry Bomb": `
Basic Info
Cooldown = 30.0s
MP Cost = 40.0
Exclusive Weapon
Max Bullets = x3 Shots
Duration = 20.0s
Laundry Bomb
Continuous Damage = Skill Power x 33.5%
Damage Interval = 0.5s
Duration = 3.1s
Continuous Damage Range = Radius 2.0m
Traction Range = Radius 8.0m
Max Expandable Range = 200%
Damage Increase per entity = 25%
Max Damage Increase = 200%
Laundry
Duration = 20.0s
Electric Resist Decrease Amount = 20.0%
Non-Attribute Resistance Decrease = 20.0%`,

"Ice Sphere": `
Basic Info
Cooldown = 20.0s
Trigger Condition = Lv.2
Projectile
Damage = Skill Power x 259.3%
Burst DMG = Skill Power x 259.3%
Explosion Damage Range = Radius 1.5m
Max Expandable Range = 250%
Ice Shackle Increase Amount
On Damage = Lv.1
On Burst Damage = Lv.1
Ice Shackle (Normal) - Duration / Effect
Lv.1 = 5.0s / -20.0%
Lv.2 = 5.0s / -40.0%
Lv.3 = 5.0s / -60.0%
Lv.4 = 8.0s / -90.0%
Ice Shackle (Epic Boss) - Duration / Effect
Lv.1 = 5.0s / -2.0%
Lv.2 = 5.0s / -4.0%
Lv.3 = 5.0s / -7.0%
Lv.4 = 8.0s / -10.0%`,

"Frost Shards": `
Basic Info
Cooldown = 7.0s
MP Cost = 22.0
Projectile
Damage = Skill Power x 669.0%
Burst Damage = Skill Power x 669.0%
Explosion Damage Range = Radius 3.5m
Max Expandable Range = 250%
Projectile Speed Increase = 0.0%
Ice Shackle
On Damage = Lv.2
On Burst Damage = Lv.1`,

"Frost Road": `
Basic Info
Cooldown = 25.0s
MP Cost = 24.0
Frost Road
Duration = 16.0s
Effect Range = 1.6m x 2.0m
Max Expandable Range = 200%
Movement Speed Increase Amount = 30%
Shield Recovery = 10%
Ice Shackle Increase Amount
On Contact = Lv.2`,

"Cold Snap": `
Basic Info
Cooldown = 20.0s
MP Cost = 30.0
Chill
Damage = Skill Power x 1079.9%
Effect Range = 10.0m x 3.0m
Max Expandable Range = 250%
Ice Shackle Increase Amount
On Damage = Lv.2`,

"Blizzard": `
Basic Info
Cooldown = 60.0s
MP Cost = 38.0
Blizzard
Duration = 6.0s
Continuous Damage = Skill Power x 1347.0%
Damage Interval = 2.0s
Continuous Damage Range = Radius 4.0m
Burst Damage = Skill Power x 1731.8%
Explosion Damage Range = Radius 6.0m
Max Expandable Range = 250%
Ice Shackle Increase Amount
On Continuous Damage = Lv.3
On Burst Damage = Lv.4`,

"Stop Overreacting": `
Additional Prescription
Additional HP Amount = 120.0%
Duration = 10.0s`,

"Solidarity Healing": `
Basic Info
Cooldown = 40.0s
MP Cost = 40.0
Sustained Recovery
Drone Duration = 7.0s / / / 10.0s
Drone Range = Radius 15.0m
Max Expandable Range = 200%
Recovery = Skill Power x 100.0%
Max Recovery = Target Max HP x 5.6% / / / 8.5%
Recovery Interval = 1.0s
Accelerant
Duration = 5.0s
Recovery = Skill Power x 100.0%
Max Recovery = Target Max HP x 24.9% / / / 34.9%
Firearm ATK Increase Amount = 34.5%
Skill Power Increase = 23.0%`,

"Restructure Serum": `
Basic Info
Maximum Stacks = 2
Stack Cooldown = 30.0s
MP Cost = 32.0
Allergy
Duration = 5.0s
Received DMG Increase = 10.0%
Recovery range when hitting an enemy = Radius 8.0m
Max Expandable Range = 250%
Projectile Speed Increase = 0.0%
Recovery interval when hitting an enemy = 1.0s / ? / ? / 0.2s
Recovery per enemy hit = Skill Power x 100.0%
Max Recovery = Target Max HP x 5.1% / ? / ? / 8.0%
Recovery per enemy defeated = Skill Power x 100.0%
Max Recovery = Target Max HP x 15.4% / ? / ? / 24.9%`,

"Stimulant Spray": `
Basic Info
Cooldown = 60.0s
MP Cost = 55.0
Range = Radius 6.0m
Max Expandable Range = 250%
Stimulation
Duration = 10.0s
Damage Reduction = 10.0% / 25.0%
Recovery = Skill Power x 100.0% / ? / ? / 100.0%
Max Recovery = Target Max HP x 45.9% / ? / ? / 59.8%
Max Received Hits = 15`,

"Hyperreactive Healing Ground": `
Basic Info
Cooldown = 120.0s
MP Cost = 70.0
Skill Effect
Range = Radius 8.0m
Max Expandable Range = 250%
Percentage Increase per Ally = 50%
Percentage Increase per Enemy = 10%
Max Percentage Increase = 100%
Recovery = Skill Power x 100.0%
Max Recovery = Target Max HP x 85.0%
Purification
Duration = 10.0s
Hyper Activity
Duration = 10.0s
Firearm ATK Increase = 23.0%
Skill Power Increase = 34.5%`,

} as const;