/**
 * @author Francesco Casula <fra.casula@gmail.com>
 *
 * This is a test for the caolan nodeunit suite (https://github.com/caolan/nodeunit)
 */

var GeoPoint = require('geo-utils').GeoPoint,
	GeoUtils = require('geo-utils').GeoUtils;

module.exports = {

	setUp: function (callback) {
		callback();
	},

	tearDown: function (callback) {
		callback();
	},

	point: function (test) {

		var p = new GeoPoint('41.8735', '12.4607');

		test.strictEqual(p.lat.valueOf(), 41.8735, 'Latitude is not as expected');
		test.strictEqual(p.lon.valueOf(), 12.4607, 'Longitude is not as expected');
		test.done();

	},

	distanceBetween: function (test) {

		var utils = new GeoUtils(),
			p1 = new GeoPoint('41.8735', '12.4607'),
			p2 = new GeoPoint('41.8735', '12.4805');

		var distance = utils.distanceBetween(p1, p2);

		test.ok(parseInt(distance.miles, 10) === 1, 'Miles distance is not as expected');
		test.ok(distance.m > 1600 && distance.m < 1700, 'Meters distance is not as expected');
		test.ok(distance.km > 1.6 && distance.km < 1.7, 'Km distance is not as expected');
		test.done();

	}

};
