var _ = require('underscore');

var _itineraries = [];

module.exports = {
	get: function (appId)
	{
		if (!appId)
			return _itineraries;

		return _.where(_itineraries, {appId: Number(appId)});
	},
	setDB: function (itinerariesDB)
	{
		_itineraries = itinerariesDB;
	},
	getItineraryByName: function (name, appId)
	{
		var itinerarySelected;

		_.each(this.get(appId), function (itinerary)
		{
			if (name == itinerary.name)
			{
				itinerarySelected = itinerary;
			}
		});

		return itinerarySelected;
	}
};