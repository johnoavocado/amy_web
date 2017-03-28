// JavaScript Document

$(document).ready(function(){
	
	
	
	// If you declare the variable here, all the functions will be able to use it
	
	var textTopMargin 	 	= 70;	
	var startTextTopMargin = 20;
	var aniTime 		 = 	400; 	// The time of the animation. Make it lower to go faster!
	
	// When the mouse hovers over a hover_area div element
	$(".info_hover_area").mouseenter(function(){
			
			
			
			// Crop the image
			$(this).find(".find_me").animate(
			{height: 0},{duration: aniTime, queue: false});
			// Animate the text
			/*
			$(this).find(".info_rollover_text").animate(
			{top: textTopMargin},{duration: aniTime, queue: false});
			*/
			// Animate the colour
			
			$(this).find(".colour_image").animate(
			{opacity: 1.0},{duration: aniTime, queue: false});
			
			
	});
	
	// When the mouse hovers over a hover_area div element
	$(".info_hover_area").mouseleave(function(){
			
			// Get the image height
			var imageHeight = $(this).height();
			// Change the height of the div element, i.e. uncrop the image
			$(this).find(".find_me").animate(
			{height: imageHeight},{duration: aniTime, queue: false});
			// Animate the text
			/*
			$(this).find(".info_rollover_text").animate(
			{top: startTextTopMargin},{duration: aniTime, queue: false});
			*/
			// Animate the colour
			
			$(this).find(".colour_image").animate(
			{opacity: 0},{duration: aniTime, queue: false});
			
	});
	
	
	
});

// JavaScript Document