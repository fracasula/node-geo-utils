/**
 * @author Francesco Casula <fra.casula@gmail.com>
 */
var GeoPoint = function (lat, lon) {
	this.lat = new Number(lat);
	this.lon = new Number(lon);
};

var GeoUtils = function () {

};

GeoUtils.prototype.toRad = function (value) {

	return value * Math.PI / 180;

};

GeoUtils.prototype.distanceBetween = function (p1, p2) {

	var R = 3958.7558657440545; // Radius of earth in Miles
	var dLat = this.toRad(p2.lat - p1.lat);
	var dLon = this.toRad(p2.lon - p1.lon);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(this.toRad(p1.lat)) * Math.cos(this.toRad(p2.lat)) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;

	return {
		miles: d,
		km: d * 1.609344,
		m: d * 1.609344 * 1000
	};

};

module.exports = {

	GeoPoint: GeoPoint,
	GeoUtils: GeoUtils

};
