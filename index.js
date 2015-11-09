var db = require('./specs/data/mockPOIs'),
	poi = require('./src/poi'),
	express = require('express')
	pois = require('./src/pois')

pois.setDB(db);

var app = express();


app.get('/v1/:appId/pois/searchNearest/:lat/:lon', function (req, res)
{
	var targetPoi = poi('any', req.params.lat, req.params.lon, req.params.appId);
	var result = pois.searchNearest(targetPoi);

	res.send(result);
});

app.listen(7777);


//WE:
//-34.609518, -58.396253