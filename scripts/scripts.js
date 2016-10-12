function start()
			{
				size();
				
				$("#boxscroll").niceScroll({
					cursorborder:"",
					cursorcolor:"#1c2534",
					boxzoom:false,
					cursoropacitymax:0.7,
					cursoropacitymin:0.3,
					cursorwidth:"7px",
					background:"#59606b",
					cursorborder:"0px solid #000",
					cursorborderradius:"0px",
					
					});
			}
			function size()
			{
				var yourImg = document.getElementById('main');
				if(!yourImg) 
					yourImg = document.getElementById('mainHome');
				if(yourImg && yourImg.style) 
				{
					var ratio = 1.5003819709702062643239113827349;
					//console.log('style was resized');
					var h = $(window).height();
					var w = h * ratio; //$(window).width();
					yourImg.style.width = w+"px";
					yourImg.style.height = h+"px";
					yourImg.style["background-size"] = w+"px " + h+"px";
					
					//document.getElementById('mover1').style["background-size"] = w+"px " + h+"px";
					//document.getElementById('mover2').style["background-size"] = w+"px " + h+"px";
					//document.getElementById('mover3').style["background-size"] = w*0.9+"px " + h*0.9+"px";
					
					var container = document.getElementById('container');
					if(container && container.style) 
					{
						container.style.width = w+"px";
					}
				}
			}

			$(window).resize(function() 
			{	
				size();
			});