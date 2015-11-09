var db = require('./specs/data/mockPOIs'),
	poi = require('./src/poi'),
	express = require('express')
	pois = require('./src/pois')

pois.setDB(db);

var app = express();


app.get('/pois/searchNearest/:lat/:lon', function (req, res)
{
	console.log();
	var result = pois.searchNearest(poi('any', req.params.lat, req.params.lon));
	res.send(result);
})

app.listen(7777);


//WE:
//-34.609518, -58.396253