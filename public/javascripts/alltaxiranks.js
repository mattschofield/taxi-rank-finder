

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
  
  // update hidden fields
  var thelatlongfield = document.getElementById('latlon');
  thelatlongfield.setAttribute('data-lat',mylat);
  thelatlongfield.setAttribute('data-lon',mylong);
  
  //Load Google Map
  var latlng = new google.maps.LatLng(mylat, mylong);
  var myOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  //Add marker
  var marker = new google.maps.Marker({
    icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    position: latlng,
    map: map,
    title:"You are here"
  });
}
// Error callback function
function errorFunction(pos) {
  alert('Error!');
}