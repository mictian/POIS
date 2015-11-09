var _ = require('underscore');

var _pois = [];

// Converts from degrees to radians.
function toRadians  (degrees)
{
  return degrees * Math.PI / 180;
};

function getDistance (poi1, poi2)
{
	var R = 6371000; // metres
	var φ1 = toRadians(poi1.lat);
	var φ2 = toRadians(poi2.lat);
	var Δφ = toRadians((poi2.lat-poi1.lat));
	var Δλ = toRadians((poi2.lon-poi1.lon));

	var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
	        Math.cos(φ1) * Math.cos(φ2) *
	        Math.sin(Δλ/2) * Math.sin(Δλ/2);

	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

	return R * c;
}

module.exports = {
	get: function (appId)
	{
		if (!appId)
			return _pois;

		return _.where(_pois, {appId: Number(appId)});
	},
	setDB: function (poisDB)
	{
		_pois = poisDB;
	},
	searchNearest: function (targetPOI)
	{
		var minPOI
		,	distance = Number.MAX_VALUE;

		_.each(this.get(targetPOI.appId), function (poi)
			{
				var aux = getDistance(targetPOI, poi);
				if (aux < distance)
				{
					minPOI = poi;
					distance = aux;
				}
			});

		return minPOI;
	}
}