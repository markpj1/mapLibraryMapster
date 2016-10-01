(function(window, google, List) {

    var Mapster = (function() {
        function Mapster(element, options) {
            this.gMap = new google.maps.Map(element, options);
            this.markers = List.create();
            if(options.cluster) {
              this.markerClusterer = new MarkerClusterer(this.gMap, [], options.cluster.options);
            }
        }

        Mapster.prototype = {
            zoom: function(level) {
                if (level) {
                    this.gMap.setZoom(level);
                } else {
                    return this.getZoom();
                }
            },
            _on: function(options) {
                var self = this;
                google.maps.event.addListener(options.object, options.event, function(e) {
                    options.callback.call(self, e, options.object); //use call to asign this to the mapster library.
                });
            },
            addMarker: function(options) {
                var marker;
                var self = this;
                options.position = {
                    lat: options.lat,
                    lng: options.lng
                }

                marker = this._createMarker(options);
                if (this.markerClusterer) {
                  this.markerClusterer.addMarker(marker);
                }
                this.markers.add(marker);
                if (options.events) {
                this._attachEvents(marker, options.events);
                }
                if (options.content) {
                    this._on({
                        object: marker,
                        event: 'click',
                        callback: function() {
                            var infoWindow = new google.maps.InfoWindow({
                                content: options.content
                            });
                            infoWindow.open(this.gMap, marker);
                        }
                    })
                }
                return marker;
            },

            _attachEvents: function (object, events) {
              var self = this;
              events.forEach(function(event) {
                self._on({
                  object: object,
                  event: event.name,
                  callback: event.callback
                });
              });
            },

            findBy: function(callback) {
                return this.markers.find(callback);
            },

            removeBy: function(callback) {
              var self = this;
              self.markers.find(callback, function(markers) {
                markers.forEach(function(marker) {
                  if(self.markerClusterer){
                      self.markerClusterer.removeMarker(marker);
                  }else{
                    marker.setMap(null);
                  }
                });
              });
            },

            _createMarker: function(options) {
                options.map = this.gMap;
                return new google.maps.Marker(options)
            }
        };
        return Mapster;
    }());

    Mapster.create = function(element, options) {
        return new Mapster(element, options);
    }

    window.Mapster = Mapster;
}(window, google, List));
