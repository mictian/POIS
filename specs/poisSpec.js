var dbPOIS = require('../src/pois.js');
var poi = require('../src/poi.js');
var db = require('./data/mockPOIs');


describe('POIS behavior', function ()
{
	it('Should return all available POIS', function ()
	{
		expect(dbPOIS.get().length).toBe(0);
	});

	it('Should return an error code of Invalid distance', function ()
	{
		expect(function () {dbPOIS.searchPoiByDistance(null,0)}).toThrow();
	});

	it('Should return 1 POI in the given radio r', function ()
	{
		dbPOIS.setDB(db);

		expect(dbPOIS.searchPoiByDistance(poi('GE',-34.609518, -58.396253,1),500)).toEqual([poi('Alsina', -34.611510, -58.393490, 1)]);
	});


	it('Should return 3 POIs in the given radio r', function ()
	{
		dbPOIS.setDB(db);

		expect(dbPOIS.searchPoiByDistance(poi('GE',-34.609518, -58.396253,1),5000)).toEqual([poi('Alsina', -34.611510, -58.393490, 1),poi('Obelisco', -34.604092, -58.381431, 1),poi('Antares', -34.613823, -58.373513, 1)]);
	});

});