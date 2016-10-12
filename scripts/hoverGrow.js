$(document).ready(function() 
{
	var big = 32;
	var small = 25;
	var pad = (big-small) / 2;		
	
	$(".mediaLink").hover(
		function()
		{
			$(this).find("img").animate(
			{
				opacity:1,
				padding:"0px",
				width:big+"px",
				height:big+"px"
			}, 200, "easeOutSine");
		},
		function()
		{
			$(this).find("img").animate(
			{
				opacity:0.2,
				padding:pad+"px",
				"paddingTop": pad+"px ",
				"paddingBottom": pad+"px ",
				"paddingLeft": pad+"px ",
				"paddingRight": pad+"px ",
				width:small+"px",
				height:small+"px"
			}, 100, "linear");
			 
		}
	);
	
	$(".mediaLink").each(
		function()
		{
			$(this).find("img").animate(
			{
				opacity:0.2,
				padding:pad+"px",
				"paddingTop": pad+"px ",
				"paddingBottom": pad+"px ",
				"paddingLeft": pad+"px ",
				"paddingRight": pad+"px ",
				width:small+"px",
				height:small+"px"
			}, 1, "easeOutSine");
		}
	);
});