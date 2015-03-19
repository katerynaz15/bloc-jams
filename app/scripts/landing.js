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
    
  //$('.player-header-nav navbar')

  //selling-points container
  var changeSell = function(event) {
    console.log("Change font");
    $(this).css('font-size', '14px');
  };

  $('.selling-points container').click(changeSell);


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