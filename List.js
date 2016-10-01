(function(window) {

    var List = (function(params) {
        function List(params) {
            this.items = [];
        }

        List.prototype = {
            add: function(item) {
                this.items.push(item);

            },
            remove: function(item) {
                var indexOf = this.items.indexOf(item);
                if (indexOf !== -1) {
                    this.items.splice(indexOf, 1);
                }
            },
            find: function(callback, action) {
                var callbackReturn,
                    items = this.items,
                    length = items.length,
                    matches = [],
                    i;
                for (i = 0; i < length; i++) {
                    callbackReturn = callback(items[i], i);
                    if (callbackReturn) {
                        matches.push(items[i]);
                    }
                }
                if(action) {
                  action.call(this, matches);
                }
                return matches;
            }
        };
        //console.log('List inside of List: ', List);
        return List
    }());
    List.create = function(params) {
        return new List(params);
    }

    window.List = List;

}(window));
