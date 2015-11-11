var categories = require('../src/categories.js');
var db = require('./data/mockCategory.js');

describe('Category', function ()
{
	it ('Should get 1 category for name plaza', function ()
	{
		categories.setDB(db);
		expect(categories.getCategoriesByName('Plaza')).toBeDefined();
	});
	it ('Should filter by application Id', function ()
	{
		categories.setDB(db);
		expect(categories.getCategoriesByName('Plaza',30)).toBeUndefined();
	});
    it ('Should return number of Pois according to category', function ()
	{
		categories.setDB(db);
		expect(categories.getCategoriesByName('Plaza',1).pois.length).toBe(1);
	});
});