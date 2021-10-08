jQuery(document).mousemove(function(event){

	var xPos = (event.clientX/jQuery(window).width())-0.5,
        yPos = (event.clientY/jQuery(window).height())-0.5;
  
  jQuery("#home-cheesy-nooch").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    y: xPos * 100, 
	    x: yPos * 100,
	    rotate: yPos * 10,
	    ease: Power1.easeOut,
	});
  })  

  jQuery("#home-bacon-nooch").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    x: xPos * 100, 
	    y: yPos * 100,
	    rotate: xPos * 10,
	    ease: Power1.easeOut,
	});
  })  

  jQuery("#star-one").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    x: xPos * 120, 
	    y: yPos * 120,
	    ease: Power1.easeOut,
	});
  }) 

  jQuery("#star-two").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    y: xPos * 150, 
	    x: yPos * 150,
	    ease: Power1.easeOut,
	});
  }) 
  jQuery("#star-three").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    y: xPos * 80, 
	    x: yPos * 80,
	    ease: Power1.easeOut,
	});
  }) 
  jQuery(".home-section h1").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    y: xPos * 20, 
	    x: yPos * 20,
	    ease: Power1.easeOut,
	});
  }) 
  jQuery("#nooch-home-man").each(function(index, element){
    var box = element;
	TweenLite.to(box, 1, {
	    x: xPos * 20, 
	    y: yPos * 20,
	    ease: Power1.easeOut,
	});
  })   

});
