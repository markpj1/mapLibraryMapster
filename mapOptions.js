(function(window, google, mapster) {

    mapster.MAP_OPTIONS = {
        center: {
            lat: 38.23494390397751,
            lng: -122.64086179955504
        },
        zoom: 8,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP, //remember to add back comma.
        // mazZoom: 15,
        // minZoom: 9,
        zoomControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_LEFT,
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        cluster: {
            options: {
                styles: [
                  {
                    url: '../images/m1.png',
                    height: 56,
                    width: 55,
                    textColor: 'purple',
                    textSize: 18
                },
                 {
                    url: '../images/m2.png',
                    height: 56,
                    width: 55,
                }
              ]
            }
        }
    };

}(window, google, window.Mapster || (window.Mapster = {})));
