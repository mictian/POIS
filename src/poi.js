
module.exports = function (name, lat, lon)
{
	if (!name || !lat || !lon)
	{
		throw new Error ('Invalid initialization parameters');
	}

	return {
		name: name,
		lat: lat,
		lon: lon
	};
}