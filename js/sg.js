// Fade the sub-headline in word-by-word if the viewport's wide enough to show the text on one line
$(function() {

  var loadSubtitle = function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 779) {
      $('span#dmd').delay(200).fadeIn(500, function() {
        $('span#dartist').fadeIn(1000, function() {
          $('span#mpls').fadeIn(1000);
        });
      });
    }
  };

  loadSubtitle();

  $(window).resize(function() {
    loadSubtitle();
  });

  console.log('Hello, curious source code reader! Check out more of my work at github.com/sarahg.');
});
