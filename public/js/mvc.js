(function(){

  var app = angular.module('inspireMe', ["ngSanitize"]);

  app.controller('CoolLinks', function(){
    this.links = inspireBen;
  });


})();