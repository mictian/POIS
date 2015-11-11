var poisDB = require('./specs/data/mockPOIs'),
	poi = require('./src/poi'),
	express = require('express'),
	pois = require('./src/pois'),
	itinerariesDB = require('./specs/data/mockItenerary'),
	itineraries = require('./src/itineraries')
	categoriesDB = require('./specs/data/mockCategory'),
	categories = require('./src/categories')

pois.setDB(poisDB);
itineraries.setDB(itinerariesDB);
categories.setDB(categoriesDB);

var app = express();


app.get('/v1/:appId/pois/searchNearest/:lat/:lon', function (req, res)
{
	var targetPoi = poi('any', req.params.lat, req.params.lon, req.params.appId);
	var result = pois.searchNearest(targetPoi);

	res.send(result);
});

app.get('/v1/:appId/itineraries/getByName/:name', function (req, res)
{
	var result = itineraries.getItineraryByName(req.params.name, req.params.appId);

	res.send(result);
});

app.get('/v1/:appId/category/getByName/:name', function (req, res)
{
	var result = categories.getCategoriesByName(req.params.name, req.params.appId);

	res.send(result);
})

app.get('/v1/:appId/pois/searchByDistance/:lat/:lon/:radius', function (req, res)
{
	var targetPoi = poi('any', req.params.lat, req.params.lon, req.params.appId);
	var result = pois.searchPoiByDistance(targetPoi,req.params.radius);

	res.send(result);
});

app.listen(7777);
//WE:
//-34.609518, -58.396253