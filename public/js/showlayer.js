// Layer and Glyph Toggle for Open/Close Boxes
// Anthony Bellew
// Created 2014 FEB 01
// Displays/hides selected element and toggles the selected Unicode arrow glyph.

function showlayer(layer,glyph){

	var myLayer = document.getElementById(layer);
	var myGlyph = document.getElementById(glyph);
	
	if(myLayer.style.display=="none" || myLayer.style.display==""){
		myLayer.style.display="block";
		myGlyph.textContent="\u25B4";
	} else { 
		myLayer.style.display="none";
		myGlyph.textContent="\u25BE";
	}

}