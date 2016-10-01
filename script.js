(function(window, mapster) {

    //build map options
    var options = mapster.MAP_OPTIONS,
        element = document.getElementById('map-canvas'),
        //map constructor.
        map = mapster.create(element, options);
    //map.zoom(9);

    var marker = map.addMarker({
        lat: 38.235055,
        lng: -122.64086179955504,
        icon: 'pyramid.png',
        content: 'one'

    });
    //
    // var marker2 = map.addMarker({
    //     lat: 38.23494390397751,
    //     lng: -122.638553,
    //     icon: 'pyramid.png',
    //     content: 'two'
    // });


  for (var i = 0; i < 40; i++) {
    var markerOne = map.addMarker({
        id: 1,
        lat: 38.235055 + Math.random(),
        lng: -122.64086179955504 + Math.random(),
        content: 'three',
        icon: 'pics/pyramid.png'
    });
    var markerTwo = map.addMarker({
        id: 2,
        lat: 38.23494390397751 + Math.random(),
        lng: -122.638553 + Math.random(),
        draggable: true,
        content: 'Marker Two',
        events: [{
          name: 'click',
          callback: function(e, marker) {
            console.log(e, marker);
          }
        }, {
          name: 'dragend',
          callback: function() {
            alert('Hello I was dragged');
        }
        }],
        icon: 'pics/oil-and-gas-well.png'
    });
  }
    // var marker5 = map.addMarker({
    //     lat: 38. + Math.random(),
    //     lng: -122. + Math.random(),
    //     content: 'five',
    //     icon: 'pyramid.png'
    // });
    // var marker6 = map.addMarker({
    //     lat: 38. + Math.random(),
    //     lng: -122. + Math.random(),
    //     content: 'six',
    //     icon: 'pyramid.png',
    //     event: [{
            //  name: click,
            //  callback: function() {
            //    alert(clicked);
            //  }
            // }]
    // });

    //console.log(marker.lng);
    map.removeBy(function(marker) {
      if(marker.id === 1) {
        //console.log(marker);
      }
      return marker.id === 1;
    })



}(window, window.Mapster || (window.Mapster = {})));
