jQuery(document).mousemove(function(event){

	var xPos = (event.clientX/jQuery(window).width())-0.5,
        yPos = (event.clientY/jQuery(window).height())-0.5;
  
      jQuery(".error-packet").each(function(index, element){
        var box = element;
        TweenLite.to(box, 1, {
            y: xPos * 100, 
            x: yPos * 100,
            rotate: yPos * 10,
            ease: Power1.easeOut,
        });
      })  
});






