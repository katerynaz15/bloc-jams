$(document).ready(function() { 
	$('.hero-content h3').click(function(){
		var subText = $(this).text();
		$(this).text(subText + "!!!");
	});


  //var onHover = function(event) {
    //console.log('Hover action triggered.');
    //$(this).animate({'color: rgb(#AA3939)'});
  //};

  //var offHover = function(event) {
    //console.log('Hover action triggered.');
    //$(this).animate({'color: rgb(#AAA593)'});
  //};

    //$('.hero-content h3').hover(onHover, offHover); 
    
  //$('.player-header-nav navbar')


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