// Enable the visual refresh
google.maps.visualRefresh = true;
var mapProp = {
    center: new google.maps.LatLng(52.0500, -2.7167),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    panControl: false,
  zoomControl: false,
  mapTypeControl: true,
  scaleControl: false,
  streetViewControl: true,
  overviewMapControl: false
    };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  //Need to work on this
