// Database connectors. Database is 'taxi', Mongo collection is 'ranks'
var db = require('mongojs').connect('taxi', ['ranks']);
var ObjectId = db.ObjectId;

/** Helper method to calculate nearest Taxi Rank
 * 
 * @param lat1 - the Latitude of the user
 * @param lon1 -  "  Longitude "  "   "
 * @param ranks - the collection of Taxi Ranks
 * @param callback - a callback function
 */
var getDistance = function(lat1, lon1, ranks, callback) {
  
  var minDistance = 100;
  var minLat = null;
  var minLon = null;
  var nearestIndex = null;

  for (var i=0; i < ranks.length; i++) {
    // each item is a taxi rank
    var thisLatLon = ranks[i]['Location'];
    var splitted = thisLatLon.split(",");
    var thisLat = splitted[0];
    var thisLon = splitted[1];

    // Euclidean Distance
    var sqDistanceInLat = Math.pow(thisLat - lat1, 2);
    var sqDistanceInLon = Math.pow(thisLon - lon1, 2);
    var distance = Math.sqrt(sqDistanceInLat +  sqDistanceInLon);

    if (distance < minDistance) {
      nearestIndex = i;
      minLat = thisLat;
      minLon = thisLon;
      minDistance = distance;
    };
  };
  
  callback(ranks, nearestIndex, minLat, minLon);
} 

// Find all taxi ranks
exports.findAll = function(req, res) {
  db.ranks.find().toArray(function(err, items) {
    if (err) {
      res.send(err);
    } else {
      res.send(items);
    };
  })
}

// Find your nearest taxi rank
exports.findNearest = function(req, res) { 
  // User lat/lon should be passed in the request.
  var lat = req.query.lat;
  var lon = req.query.lon;
  
  // First, find all the Taxi ranks
  db.ranks.find().toArray(function(err, items) {
    // Then work out the closest one to the user
    getDistance(lat, lon, items, function(taxiranks, closestIndex, closestLat, closestLon) {
      var response = {};
      response.rank = taxiranks[closestIndex];
      response.closestRankLocation = {};
      response.closestRankLocation.latitude = closestLat; 
      response.closestRankLocation.longitude = closestLon;
      
      res.send(response);
    })
  })
}