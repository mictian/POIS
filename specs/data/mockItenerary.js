var itinerary = require('../../src/itinerary')
var poi = require('../../src/poi')

module.exports = [
 itinerary('Buenos Aires',	[poi('Alsina', -34.611510, -58.393490, 1)], 1),
 itinerary('Restaurant Turistico', [
 	poi('Alsina', -34.611510, -58.393490, 1),
	poi('Obelisco', -34.604092, -58.381431, 1),
	poi('Plaza Once', -34.609991, -58.407952, 1),
	poi('Puerto Madero', -34.609532, -58.366539, 1),
	poi('Plaza San Martin', -34.594784, -58.375316, 1)],1
	),
 itinerary('Restaurant Turistico', [
 	poi('Obelisco', -34.604092, -58.381431, 2),
 	poi('Alsina', -34.611510, -58.393490, 2),
	poi('Plaza San Martin', -34.594784, -58.375316, 2)],2
	)
]
