var _ = require('underscore');

module.exports = function (name, pois, appId)
{
	if(!name || !pois)
		throw new Error('Invalid Parameters');

	_.each(pois, function(poi) {
		if(!(poi.appId == appId)) {
			throw new Error('Invalid AppId');
		}
	});
	return {
		name: name
	,	pois: pois
	,	appId: appId
	};
}