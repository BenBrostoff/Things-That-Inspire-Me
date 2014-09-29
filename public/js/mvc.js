(function(){

  var app = angular.module('inspireMe', ["ngSanitize"]);


  app.controller('CoolLinks', function(){
    this.links = shuffle(inspireBen);
    collect = this.links

    this.current = this.links[0];
    this.total = inspireBen.length;


    this.change = function(op, bound, place) {
      if (place != bound) {
        this.current = this.links[op(place)]
      }
    };

    this.add = function(){
      this.change(function(x){return x + 1}, 
                  this.total, 
                  collect.indexOf(this.current));
    }

    this.subtract = function(){
      this.change(function(x){return x - 1}, 
                  0, 
                  collect.indexOf(this.current));
    };

  });

})();