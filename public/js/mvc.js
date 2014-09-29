(function(){

  var app = angular.module('inspireMe', ["ngSanitize"]);


  app.controller('CoolLinks', function(){
    this.links = shuffle(inspireBen);
    this.current = this.links[0];
    this.total = inspireBen.length;


    this.change = function(op, bound, place) {
      if (place != bound) {
        console.log(place);
        console.log(op(place));
        this.current = this.links[op(place)]
      }
    };

    this.add = function(){
      this.change(function(x){return x + 1}, 
                  this.total, 
                  inspireBen.indexOf(this.current));
    }

    this.subtract = function(){
      this.change(function(x){return x - 1}, 
                  0, 
                  inspireBen.indexOf(this.current));
    };

  });

})();