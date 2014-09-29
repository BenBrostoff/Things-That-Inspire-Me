(function(){

  var app = angular.module('inspireMe', ["ngSanitize"]);


  app.controller('CoolLinks', function(){
    this.links = shuffle(inspireBen);

    this.current = this.links[0];
    this.total = inspireBen.length;
    this.visi = false;

    ben = this;

    this.reveal = function() {
      this.visi = !this.visi;
    }


    this.change = function(op, bound, place) {
      if (place != bound) {
        this.current = this.links[op(place)]
      }
    };

    this.add = function(){
      this.change(function(x){return x + 1}, 
                  this.total - 1, 
                  ben.links.indexOf(this.current));
    }

    this.subtract = function(){
      this.change(function(x){return x - 1}, 
                  0, 
                  ben.links.indexOf(this.current));
    };

    this.keySense = function(keyEvent) {
      if (keyEvent.which === 39){
        this.add();
      }

      if (keyEvent.which === 37){
        this.subtract();
      }
    };


  });



})();