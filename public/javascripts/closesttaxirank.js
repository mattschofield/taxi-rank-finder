
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
  
  $.ajax("http://localhost:3000/closesttaxirank",
    { 
      type: 'GET',
      data: { lat: mylat, lon: mylong }
    }
  ).done(function(response){
    // Response will contain the LatLon of the closest rank, as well as the rank itself
    var newlat = response.closestRankLocation.latitude;
    var newlon = response.closestRankLocation.longitude;
    
    // Now make a new Marker for this new LatLon
    var newLatLong = new google.maps.LatLng(newlat, newlon);
    var newMarker = new google.maps.Marker({
      position: newLatLong,
      map: map,
      title:"This is the nearest!"
    });
    console.log('New coords are '+newlat+', '+newlon+'!');
    
    var infowindow = new google.maps.InfoWindow();
    var thisRank = response.rank;
    infowindow.setContent(
      '<b>'+thisRank['Street']+'</b><br/><p>This rank is open <b>'
      +thisRank['Operational hours']+'</b><br/>'
      +(thisRank['Marshalled'] == '' ? 'This rank is <b>not</b> marshalled.' : 'Marshalled? <b>'+thisRank['Marshalled']+'')+'</b></p>');
    
    google.maps.event.addListener(newMarker, 'click', function() {
      infowindow.open(map, newMarker);
    });
    
    // set the origin and destination for the route to the nearest Taxi Rank
    var org = latlng;
    var dest = newLatLong;
    var request = {
      origin: org,
      destination: dest,
      travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    
    var rendererOptions = { map: map, suppressMarkers: true };
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      var duration = response.routes[0].legs[0].duration.text;
     
      $('#duration').append('It should take around '+duration+' to get there.');
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        alert ('failed to get directions');
      }
    })
  })
}
// Error callback function
function errorFunction(pos) {
  alert('Error!');
}