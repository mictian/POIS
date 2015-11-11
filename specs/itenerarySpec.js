var itinerary = require('../src/itinerary.js');
var itineraries = require('../src/itineraries.js');
var db = require('./data/mockItenerary.js');
var dbPOIs = require('./data/mockPOIs');

describe('itinerary behavior', function ()
{
	it('Should return itinerary', function ()
	{
		expect(itinerary('Test Name', [{}]).name).toEqual('Test Name');
	});

	it('Should throw an error Invalid name Error', function ()
	{
		expect(function(){itinerary('')}).toThrow();
	});

	it('Should throw an error Invalid Itinerary', function ()
	{
		expect(function(){itinerary('Itinerary name')}).toThrow();
	});

	it('Should return itinerary by Name with one Poi', function ()
	{
		itineraries.setDB(db);
		expect(itineraries.getItineraryByName('Buenos Aires').pois.length).toEqual(1);
	});

	it('Should return itinerary by Name with 6 POIs', function ()
	{
		itineraries.setDB(db);
		expect(itineraries.getItineraryByName('Restaurant Turistico',1).pois.length).toEqual(5);
	});

	it('Should throw an error when not all pois are of the same appid', function ()
	{
		expect(function(){itinerary('Itinerary name',dbPOIs,1)}).toThrow();
	});

});