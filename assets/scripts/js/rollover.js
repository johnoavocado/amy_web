// JavaScript Document

$(document).ready(function(){
	
	
	var changeMe = 20;
	
	// If you declare the variable here, all the functions will be able to use it
	var croppedSizesmall = 	30 + changeMe ; 	// The ratio of the image left after it is cropped
	var croppedSizelarge = 	30 + changeMe; 		// The ratio of the image left after it is cropped
	var textTopMarginSml =	150 - changeMe; 	// The ratio of the text margin to the small image height
	var textTopMarginLrg =	357 - changeMe; 	// The ratio of the text margin to the large image height	
	var startTextTopMargin = 50;
	var aniTime 		 = 	400; 	// The time of the animation. Make it lower to go faster!
	var decisionSize 	 =  200; 	// The size, above which, an image is considered big
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area").mouseenter(function(){
			
			// Get the image height
			var imageHeight = $(this).height();
		
			var croppedSize;
			var textTopMargin;
		
			if(imageHeight >= decisionSize)
			{
				croppedSize = croppedSizelarge;
				textTopMargin = textTopMarginLrg;
			}
			else
			{
				croppedSize = croppedSizesmall;
				textTopMargin = textTopMarginSml;	
			}
			
			// Crop the image
			$(this).find("div").animate(
			{height: imageHeight - croppedSize},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".rollover_text").animate(
			{top: textTopMargin},{duration: aniTime, queue: false});
			// Animate the colour
			$(this).find(".colour_image").animate(
			{opacity: 1.0},{duration: aniTime, queue: false});
			
	});
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area").mouseleave(function(){
			
			// Get the image height
			var imageHeight = $(this).height();
			// Change the height of the div element, i.e. uncrop the image
			$(this).find("div").animate(
			{height: imageHeight},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".rollover_text").animate(
			{top: startTextTopMargin},{duration: aniTime, queue: false});
			// Animate the colour
			$(this).find(".colour_image").animate(
			{opacity: 0},{duration: aniTime, queue: false});
			
	});
	
	
	
});

// JavaScript Document