
module.exports = function (name, lat, lon, appId)
{
	if (!name || !lat || !lon || !appId)
	{
		throw new Error ('Invalid initialization parameters');
	}

	return {
		name: name,
		lat: lat,
		lon: lon,
		appId: appId
	};
}