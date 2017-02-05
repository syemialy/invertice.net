$(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.google.com/maps/api/js?key=AIzaSyBsJ1zFGXY4DVMLeY_5srACRnGkXCW02y8&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
  
    // Multiple Markers
    var locations = [
        ['Invertice Corporate Office & Warehouse, Philadelphia PA', 40.2474552 ,-75.1995507,'green-dot.png'],
        ['Invertice Sattellite Operations, Pitsburg',40.431478,-80.0505406,'green-dot.png'],
        ['Virginia',37.769337,-78.169968,'blue-dot.png'],
        ['Connecticut',41.597782,-72.755371,'blue-dot.png'],
        ['Il/WI',40.349457,-88.986137,'blue-dot.png'],
        ['Kentucky',37.668140,-84.670067,'blue-dot.png'],
        ['Massachusetts',42.230171,-71.530106,'blue-dot.png'],
        ['New Jersey',40.298904,-74.521011,'blue-dot.png'],
        ['NY, Long Island',40.8466823,-74.0702078,'blue-dot.png'],
        ['New York',42.165726,-74.948051,'blue-dot.png'],
        ['NY, Upstate',41.9550335,-76.421282,'blue-dot.png'],
        ['North Carolina',35.630066,-79.806419,'blue-dot.png'],
        ['South Carolina',33.856892,-80.945007,'blue-dot.png'],
        ['OHPA, Ohio',40.388783,-82.764915,'blue-dot.png'],
        ['OHPA, Pittsburgh',40.4799411,-80.0335037,'blue-dot.png'],
        ['OHPA, West Virginia',38.491226,-80.954453,'blue-dot.png'],
        ['PA, Harrisburg',40.2822047,-76.915445,'blue-dot.png'],
        ['PA, ALL',40.590752,-77.209755,'blue-dot.png'],
        ['Tennessee, All',35.747845,-86.692345,'blue-dot.png']
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
      zoom: 6,
      center: new google.maps.LatLng(40.431478,-80.0505406),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/' + locations[i][3]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    
}