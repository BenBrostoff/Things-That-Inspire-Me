var initializeLinks = function() {
  $('.link-list').append(" || ")
  for (i = 0; i < inspireBen.length; i++) {
    $('.link-list').append(inspireBen[i] + " || ")
  }
  $('.link-list').hide();
}


var displayFull = function() {
  if ($('.link-list').is(":visible") === false)  {
    $('.link-list').fadeIn('slow');
  }

  else {
    console.log("HIDDEN VIS");
    $('.link-list').fadeOut('slow');
  }
}

