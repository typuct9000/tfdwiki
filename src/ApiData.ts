
export type ApiDescendant =
{
	descendant_id: string,
	descendant_name: string,
	descendant_image_url: string,
	descendant_stat: ApiDescendantStat[]
};

export type ApiDescendantStat =
{
	level: number,
	stat_detail: { stat_type: string, stat_value: number }[]
};


export async function getDescendantData()
{
	const { default: data } = await import("../data/api/descendant.json", { assert: { type: "json" } });
	return data;
}


export async function getModuleData()
{
	const { default: data } = await import("../data/api/module.json", { assert: { type: "json" } });
	return data;
}


export async function getWeaponData()
{
	const { default: data } = await import("../data/api/weapon.json", { assert: { type: "json" } });
	return data;
}


export async function getStatStrings()
{
	const { default: data } = await import("../data/api/stat.json", { assert: { type: "json" } });
	return data;
}
