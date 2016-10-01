(function(window, $) {

 var $mapster = $("#map-canvas").mapster(Mapster.MAP_OPTIONS);

 $mapster.mapster('addMarker', {
   lat: 38.235055,
   lng: -122.64086179955504,
   content: 'one'
 });

 $mapster.mapster('addMarker', {
   lat: 38.265055,
   lng: -122.65086179955504,
   draggable: true,
   id: 2,
   content: 'Two'
 });

 $mapster.mapster('removeMarkers', function(marker) {
   return marker.id === 2;
 })

}(window, jQuery));
