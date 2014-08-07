// MODEL

var InspireModel = function(current) {
  this.array = shuffle(inspireBen);
  this.current = 0;
  this.end = inspireBen.length - 1;
};

InspireModel.prototype.forward = function() {
  this.current += 1;
}

InspireModel.prototype.backward = function() {
  this.current -= 1;
}

InspireModel.prototype.checkForBeginning = function() {
  if (this.current <= 0){
    this.current = 0;
  }
}

InspireModel.prototype.checkForEnd= function() {
  if (this.current >= this.end) {
    this.current = this.end;
  }
}

// VIEW

var InspireView = function() {}

InspireView.prototype.showCurrentLink = function(link) {
  $('.current_link').html(link)
}

// CONTROLLER

var InspireController = function() {
  
  inspireModel = new InspireModel();
  inspireView = new InspireView();

  var goForward = function() {
    inspireModel.forward();
    inspireModel.checkForEnd();

    inspireView.showCurrentLink(inspireModel.array[inspireModel.current]);
  }

  var goBack = function() {
    inspireModel.backward();
    inspireModel.checkForBeginning();

    inspireView.showCurrentLink(inspireModel.array[inspireModel.current]);

  }

  this.initialize = function() {

    $(document).on("click", ".forward", goForward)
    Mousetrap.bind('left', goForward)
    

    $(document).on("click", ".backward", goBack)
    Mousetrap.bind('right', goBack)

    $(document).on("click", ".full-list", displayFull)


    inspireView.showCurrentLink(inspireModel.array[0]) 
  }


}

// LOAD

$(document).ready(function() {

  inspire = new InspireController();
  inspire.initialize();

});








