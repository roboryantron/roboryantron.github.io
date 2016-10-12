var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = update;


//the event listener
//this could better be a listener on the div element
//but i wanted to allways show the mouse coordinates in the debug div
//Event.observe(document, 'mousemove', getcordsInDiv);
function flip()
{
	$("#card").toggleClass('flipped');
}
function update(mp)
{
	var _x;
	var _y;
	if (!isIE)
	{
		_x = mp.pageX;
		_y = mp.pageY;
	}
	if (isIE)
	{
		_x = event.clientX + document.body.scrollLeft;
		_y = event.clientY + document.body.scrollTop;
	}
	var ratio = 1.5003819709702062643239113827349;
	var h = $(window).height();
	var w = $(window).width();//h * ratio;
	
	var cx = _x / w;
	var cy = _y / h;
	
	
	var x = (cx-.5) * .2;
	var y = (cy-.5) * .2;
	//$("#mover1").css("background-position", (x+.5)*100+"% "+(y+.5)*100+"%");
	
	x = (cx-.5) * .25;
	y = (cy-.5) * .25;
	//$("#mover2").css("background-position", (x+.5)*100+"% "+(y+.5)*100+"%");
	
	var card = document.getElementById('mover3');
  
  //document.getElementById('mover3').addEventListener( 'click', function(){
	//if (cx > .5)
		//$("#card").toggleClass('flipped');
		
  //}, false);
  
	//document.getElementById('mover3').toggleClassName('flipped');

	//$("#mover2").toggleClassName('flipped');
	
	x = (cx-.5) * .3;
	y = (cy-.5) * .3;
	//$("#mover3").css("background-position", (x+.5)*100+"% "+(y+.5)*100+"%");
	//$("#mover3").css("width", (x+.5)*100+"% ");
	$("#card").css("-webkit-transform", "rotateY( "+x*100+"deg ) rotateX( "+y*100+"deg )");
	 //-webkit-transform: rotateY( 180deg );
	 
	//$("#card").css("-webkit-transform: rotateY("+x*100+" deg);");
	//$("#card").css("-webkit-transform", "rotateY("+x*100+" deg);");
	//$("#card").css("width", +x*100+"%;");
	
	//document.getElementById('card').style["-webkit-transform"] = "(45 deg)";
}