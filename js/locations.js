$(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.google.com/maps/api/js?key=AIzaSyBsJ1zFGXY4DVMLeY_5srACRnGkXCW02y8&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
  
    // Multiple Markers
    var locations = [
        ['Invertice Corporate Office & Warehouse, Philadelphia PA', 40.2474552 ,-75.1995507],
        ['Invertice Sattellite Operations, Pitsburg',40.431478,-80.0505406]
    ];
   /* 
     var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];
    */
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 7,
      center: new google.maps.LatLng(40.431478,-80.0505406),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    
}