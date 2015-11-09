var dbPOIS = require('../src/pois.js');


describe('POIS behavior', function ()
{
	it('Should return all available POIS', function ()
	{
		expect(dbPOIS.get().length).toBe(0);
	});
});