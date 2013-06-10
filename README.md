node-geo-utils
==============

Node.js Geo utilities (calculate distance between two latitude/longitude points)

### Example

``` js
var GeoPoint = require('GeoUtils').GeoPoint,
    GeoUtils = (new (require('GeoUtils').GeoUtils)());
	
var p1 = new GeoPoint(41.908, 12.479), // Rome
    p2 = new GeoPoint(45.4719, 9.186); // Milan
	
console.log(GeoUtils.distanceBetween(p1, p2));
```

Output of the above example will be:

``` js
{
    miles: 296.08390700884814,
    km: 476.5008592412477,
    m: 476500.8592412477
}
```
