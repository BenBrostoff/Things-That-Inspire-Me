(function(){

  var app = angular.module('inspireMe', ["ngSanitize", "ngAnimate"]);


  app.controller('CoolLinks', function(){
    this.links = shuffle(inspireBen);

    this.current = this.links[0];
    this.total = inspireBen.length;
    this.visi = false;
    this.begin = true;

    ben = this;

    this.reveal = function() {
      this.begin = false;
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


  app.directive("fadeDirect", function($animate) {
    return function (scope, element, attrs) {
      scope.$watch(attrs.fadeDirect, function(newVal) {
        if (newVal) {
          console.log("ADDING CLASS")
          $animate.addClass(element, "fade");
        } else {
          console.log("REMOVING CLASS")
          $animate.removeClass(element, "fade");
        }
      })
    }
  });

  app.animation(".fade", function() {
    return {
      addClass: function(element, className) {
        TweenMax.to(element, 1, {opacity: 1});
      },
      removeClass: function(element, className){
        TweenMax.to(element, 1, {opacity: 0})
      }
    }
  });


})();