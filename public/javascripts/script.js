// Determine support for Geolocation
if (navigator.geolocation) {
  // Locate position
  navigator.geolocation.getCurrentPosition(displayPosition, errorFunction);
} else {
  alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}
// Success callback function
function displayPosition(pos) {
  var mylat = pos.coords.latitude;
  var mylong = pos.coords.longitude;
  var thediv = document.getElementById('locationinfo');
  thediv.innerHTML = '<p>Your latitude is :' +
  mylat + ' and your longitude is ' + mylong + '</p>';
  //Load Google Map
  var latlng = new google.maps.LatLng(mylat, mylong);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  //Add marker
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title:"You are here"
  });
  getEuclideanDistance(pos, map, function(map, newlat, newlon){
    var newLatLong = new google.maps.LatLng(newlat, newlon);
    var newMarker = new google.maps.Marker({
      position: newLatLong,
      map: map,
      title:"This is the nearest!"
    });
    console.log('New coords are '+newlat+', '+newlon+'!');
  })
}
function getEuclideanDistance(pos, map, callback) {
  callback(map, 53.487368873778884, -2.243163585662842);
}
// Error callback function
function errorFunction(pos) {
  alert('Error!');
}