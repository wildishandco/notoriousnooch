gsap.registerPlugin(ScrollTrigger)

let presscontent = document.getElementById("press-content");

function pressScrolling() {

    gsap.to(presscontent, {
      x: () => `${-(presscontent.scrollWidth - document.documentElement.clientWidth)}px`,
      ease: "none",
      scrollTrigger: {
        trigger: presscontent,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 0.2,
        start: "top top",
        end: () => `+=${presscontent.scrollWidth - document.documentElement.clientWidth}`
      }
    });
}

jQuery(document).ready(function(){
    
    if(jQuery(window).width() > 991) {
        pressScrolling(); 
    } else {
//        do nothing
    }
    
    var currentWidth = jQuery(window).width();
    
    jQuery(window).resize(function(){
        
        if((jQuery(window).width() > 990) && (currentWidth <= 990)) {
            
            pressScrolling(); 

        } else {
            
            TweenMax.killTweensOf(presscontent);
            //do nothing
        }
        
        currentWidth = jQuery(window).width();
        
        

    });
    
});















//TweenMax.killTweensOf(myObject);


//let storyheader = document.getElementById("story-header");
//
//gsap.to(storyheader, {
//  x: () => `${-(storyheader.scrollWidth - document.documentElement.clientWidth)}px`,
//  ease: "none",
//  scrollTrigger: {
//    trigger: storyheader,
//    invalidateOnRefresh: true,
//    pin: true,
//    scrub: 0.2,
//    start: "top top",
//    end: () => `+=${storyheader.scrollWidth - document.documentElement.clientWidth}`
//  }
//});



jQuery(document).ready(function(){
    
   var windowWidth = jQuery(window).outerWidth();
    
   var tumbleweed = gsap.timeline({
	  scrollTrigger:{
	    trigger: "#tumbleweed",
	    scrub:0.5,
	    start: 'top bottom',
	    end:'bottom top',
	  }
	})
	.to('#tumbleweed', 5, {
        x: windowWidth,
        y: 10,
	    rotation:-360*3,
	    duration:1, ease:'none',
	})
   .to("#tumbleweed", 5, {y:-200, ease:Circ.easeOut, yoyo:true, repeat:1});
    
    var tl = new TimelineMax({repeat:-1});

//tl.to("#tumbleweed", .10, {transformOrigin: "50% 100%", yoyo:true, repeat:1})
//  .to("#tumbleweed", .75, {y:-200, ease:Circ.easeOut, yoyo:true, repeat:1});
   
});


