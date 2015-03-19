$(document).ready(function() { 
	$('.hero-content h3').click(function(){
		var subText = $(this).text();
		$(this).text(subText + "!!!");
	});


  var setHover = function(event) {
    console.log('Hover action triggered.');
    $(this).css('color', 'red');
  };

  var changeColor = function(event) {
    console.log('Off Hover action triggered.');
    $(this).css('color', 'green');
  };

    $('.hero-content h3').hover(setHover, changeColor); 
    
  
  $('.player-header-nav').click(function(){
    console.log("About to fade away");
    $(this).fadeOut('slow');
  });

  $('.selling-points .point p').click(function() {
    console.log("Being clicked");
    $(this).css('font-size', '18px');
  });

var onHoverAction = function(event) {
     console.log('Hover action triggered.');
     $(this).animate({'margin-top': '10px'});
   };
 
var offHoverAction = function(event) {
     console.log('Off-hover action triggered.');
     $(this).animate({'margin-top': '0px'});
   };
 
   $('.selling-points .point').hover(onHoverAction, offHoverAction);
});