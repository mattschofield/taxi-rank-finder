// Raw data 
var keys = {
  STREET: 0,
  OPERATIONAL_HOURS: 1,
  OPERATIONAL_DATES: 2,
  SPACES: 3,
  MARSHALLED: 4,
  LATLON: 5,
  DIRECTORY_IDS: 6,
  DISTANCE: 7
};
var data = [
  ["Albert Square, In front of town hall","24hrs","","11","Yes - Friday and Saturday nights 10:30 - 04:30","53.479516248514216,-2.2453951835632324","542,534,353"],
  ["Blackfriars Road, Outside Renaissance Hotel","24hrs","","3","","53.48355127492295,-2.2465109825134277","542,533,536,531,541"],
  ["Byrom Street, Opposite the Opera House","24hrs","","3","","53.47863513157319,-2.252047061920166","542,534,532,541"],
  ["Chorlton Street, outside Churchills Pub","Nights 6pm - 8am","","2","","53.47751136167834,-2.2358036041259766","542,532,539"],
  ["Chorlton Street, Outside Coach Station","24hrs","","7","","53.478162641039056,-2.2371983528137207","542,539,540"],
  ["Corporation Street, Outside Co-Op","11pm - 5am","","6","","53.48533882217717,-2.241683006286621","542,534,536,531"],
  ["Corporation Street, Outside Printworks","24hrs","","5","Yes - Friday and Saturday nights 10:30 - 04:30","53.48517283881888,-2.24196195602417","542,534,536,531"],
  ["Cross Street, Bottom of Chapel Walks","24hrs","","3","","53.481763652343375,-2.2444725036621094","542,531,532"],
  ["Cross Street, outside Timpson's","Nightime 6pm - 8am","","6","","53.48144442609903,-2.244805097579956","542,531,532"],
  ["Deansgate, Gt Northern","24hrs","","4","","53.47752413195797,-2.2499334812164307","542,540,535,541"],
  ["Deansgate, opposite Barton Arcade","Nightime 6pm - 8am","","4","","53.48283623493022,-2.2468113899230957","542,534,541"],
  ["Deansgate, Top Kapi near Peter Street","Nightime 6pm - 8am","","4","","53.47881391040321,-2.2490644454956055","542,532,541"],
  ["Garden Street/Well Street/Dantzic Street opposite The Birdcage","Night time 6pm to 8am","","15","Yes - Friday and Saturday nights 10:30 - 04:30","53.48457912379784,-2.2409212589263916","542,534,536"],
  ["George Street, China Town at Nicholas Street Junction","Nightime 6pm - 8am","","2","","53.478852220054506,-2.240631580352783","542,532"],
  ["Hardman Street, outside Waggamamas near Deansgate ","24hrs","","4","","53.47955455753136,-2.249300479888916","542,534,541"],
  ["High Street, Outside Arndale","24hrs","","17","","53.48265747304891,-2.239537239074707","542,531,538"],
  ["King Street West, outside House of Fraser","24 hrs","","4","","53.48148273337516,-2.2478842735290527","542,531,541"],
  ["Lever Street, opposite the old Lever St bus station","24hrs","","3","","53.483091607739745,-2.2328639030456543","542,537,540"],
  ["Liverpool Road, outside Science and Industry Museum","24hrs","","5","","53.47636202077314,-2.253270149230957","542,534,540,541"],
  ["Mount Street, outside town hall extension","24hrs","","6","","53.47857128180847,-2.2451376914978027","542,534,535"],
  ["Oldham Street, nr. jct. with Hilton St","24hrs","","6","","53.48325759924155,-2.234516143798828","542,537"],
  ["Oldham Street, Outside Dry Bar","Night time 6pm - 8am","","6","","53.48279792887623,-2.2352027893066406","542,537,532"],
  ["Oxford Street, outside Gilly's night club","Night time 6pm - 8am","","10","","53.4757362554138,-2.241940498352051","542,532,540"],
  ["Peter Street, outside Bar 38","Night time 6pm - 8am","","6","Yes - Saturday nights 10:30 - 04:30","53.47822649141869,-2.248249053955078","542,532,540"],
  ["Peter Street, outside Circular Library - Shared rank","night time 6pm - 8am","","3","","53.477753996334044,-2.244386672973633","542,534,540,533"],
  ["Peter Street, outside Circular Library - Taxi only","24hrs","","4","","53.47780507713738,-2.244687080383301","542,534,540,533"],
  ["Peter Street, outside Midland Hotel","24hrs","","4","","53.47752413195797,-2.244601249694824","542,534,540,533"],
  ["Peter Street, outside Raddison Hotel","Night time 6pm - 8am","","2","","53.477881698227115,-2.2469615936279297","542,534,540,533"],
  ["Piccadilly Train Station, Store Street","","","","","","542,532,534,540,533"],
  ["Piccadilly, outside Malmaison Hotel","24hrs","","1","","53.47950347883416,-2.233400344848633","542,534,540,533,538"],
  ["Piccadilly, outside Rodgers Florist near Lena Street","Night time 6pm to 8am","","2","","53.47945240007544,-2.232949733734131","542,534,540,533,538"],
  ["Piccadilly, outside Rodgers Florist near Lena Street","24hrs","","5 (2 bays available between 6 pm and 8 am)","","53.479535403027114,-2.233067750930786","542,534,540,533,538"],
  ["Piccadilly, outside Weatherspoons Piccadilly ","Night time 6pm to 8am","","8","","53.48129119664853,-2.2350096702575684","542,534,540,533,538"],
  ["Portland Street, outside Dawsons music shop","24hrs","","3","","53.47961840581641,-2.2371554374694824","542,534,540,533,538"],
  ["Portland Street, outside IBIS Hotel","24hrs","","5","","53.47714102189725,-2.241060733795166","542,534,540,533,538"],
  ["Portland Street, outside No1 Piccadilly","Night Time 11pm - 5am","","5","","53.480397347157336,-2.2358036041259766","542,534,540,533,538"],
  ["Portland Street, outside Portland Hotel","24hrs","","10","Yes - Friday and Saturday nights 10:30 - 04:30","53.48019303605803,-2.2356748580932617","542,534,540,533,538"],
  ["Princess Street, opposite 5th Avenue night club","Night Time 6pm - 8am","","6","","53.47530204545563,-2.2380566596984863","542,532,539"],
  ["Princess Street, outside New Union","24hrs","","3","","53.47641310325223,-2.2387218475341797","542,532,539"],
  ["Sackville Street, outside Thompson Arms","Night Time 6pm to 8am","","2","","53.47765821966201,-2.238239049911499","542,532,539,540"],
  ["Southmill Street, outside Raddison Hotel","24hrs","","3","","53.477824232422805,-2.2468113899230957","542,534,540,533"],
  ["St Mary's Gate, north side outside Harvey Nichols","24hrs","","7","","53.483423590093885,-2.24545955657959","542,534,540,536,541"],
  ["St Mary's Gate, south side outside travel agents","24hrs","","6","","53.483283136338024,-2.2457170486450195","542,534,540,536,541"],
  ["Victoria Ave at its junction with Middleton Road","10pm - midnight","Friday 29 June, Saturday 30 June, Sunday 1 July","","Yes","53.53296196255539,-2.243528366088867","582"],
  ["Victoria Station Approach, outside station","24hrs","","9","","53.48704968971251,-2.24245548248291","542,534,540,536"],
  ["Victoria Street, opposite Cathedral","24hrs","","5","","53.484904710483534,-2.2455668449401855","542,534,540,536,541"],
  ["Whitworth Street West, outside Deansgate Locks","24hrs","","6","Yes","53.47441445539409,-2.2503840923309326","542,534,532,540,541"],
  ["Whitworth Street West, outside Ritz","24hrs","","4","","53.47440806978682,-2.242562770843506","542,532,540"],
  ["Whitworth Street West, outside Sainsburys","24hrs","","5","","53.47461240874293,-2.2418975830078125","542,532,540"],
  ["Whitworth Street West, outside Sainsburys","Nightime 6pm - 8am","","2","","53.47456770968034,-2.241865396499634","542,532,540"],
  ["Windmill Street, outside Manchester Central (GMEX)","24hrs","","7","","53.47692392466076,-2.2463178634643555","542,532,540,535"]
];


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
  
  getEuclideanDistance(pos, map, function(map, nearestRankIndex, newlat, newlon){
    var newLatLong = new google.maps.LatLng(newlat, newlon);
    var newMarker = new google.maps.Marker({
      position: newLatLong,
      map: map,
      title:"This is the nearest!"
    });
    console.log('New coords are '+newlat+', '+newlon+'!');
    
    var infowindow = new google.maps.InfoWindow();
    var thisRank = data[nearestRankIndex];
    infowindow.setContent(
      '<b>'+thisRank[keys['STREET']]+'</b><br/><p>This rank is open <b>'
      +thisRank[keys['OPERATIONAL_HOURS']]+'</b><br/>'
      +(thisRank[keys['MARSHALLED']] == '' ? 'This rank is <b>not</b> marshalled.' : 'Marshalled? <b>'+thisRank[keys['MARSHALLED']]+'')+'</b></p>');
    google.maps.event.addListener(newMarker, 'click', function() {
      infowindow.open(map, newMarker);
    });
    
    // set the origin and destination
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
  });
}
function getEuclideanDistance(pos, map, callback) {  
  var userLat = pos.coords.latitude;
  var userLon = pos.coords.longitude;
  var minDistance = 100;
  var minLat = null;
  var minLon = null;
  var nearestIndex = null;
  
  for (var i=0; i < 1/*data.length*/; i++) {
    // data[i] is a definition of a taxi rank
    var thisLatLon = data[i][keys['LATLON']];
    var splitted = thisLatLon.split(",");
    var thisLat = splitted[0];
    var thisLon = splitted[1];
    
    // Euclidean Distance
    var sqDistanceInLat = Math.pow(thisLat - userLat, 2);
    var sqDistanceInLon = Math.pow(thisLon - userLon, 2);
    var distance = Math.sqrt(sqDistanceInLat +  sqDistanceInLon);
    
    if (distance < minDistance) {
      nearestIndex = i;
      minLat = thisLat;
      minLon = thisLon;
      minDistance = distance;
    };
  };
  
  callback(map, nearestIndex, minLat, minLon);
}
// Error callback function
function errorFunction(pos) {
  alert('Error!');
}