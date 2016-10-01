(function(window, Mapster) {
  $.widget( "mapster.mapster", {
      // default options
      options: { },

      // The constructor
      _create: function() {
        var element = this.element[0];
            options = this.options;
            this.map = Mapster.create(element, options);
      },

      // Called when created, and later when changing options
      _refresh: function() {

      },

      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      addMarker: function( options ) {
        return this.map.addMarker(options);
      },

      findMarker: function (callback) {
        return this.map.findBy(callback);
      },

      removeMarkers: function (callback) {
        this.map.removeBy(callback);
      },

      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {

      },

      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },

      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {

        this._super( key, value );
      }
    });



}(window, Mapster));
