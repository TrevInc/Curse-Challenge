// Layer and Glyph Toggle for Open/Close Boxes using jQuery
// Anthony Bellew
// Created 2014 FEB 04
// Displays/hides selected element and toggles the selected Unicode arrow glyph.

jQuery(function($){ 
	$( document ).ready(function(){
		$('.expander-link').bind('click', function() {
		  var myLayer = $(this).next();
		  var myGlyph = $(this).find('.crs-dd');
		  
		  if($(myLayer).css("display")=="none") {
				$(myLayer).css({"display":"block"});
				$(myGlyph).removeClass("crs-dd-closed");
				$(myGlyph).addClass("crs-dd-open");
			} else { 
				$(myLayer).css({"display":"none"});
				$(myGlyph).removeClass("crs-dd-open");
				$(myGlyph).addClass("crs-dd-closed");
			}
		});
	});
});