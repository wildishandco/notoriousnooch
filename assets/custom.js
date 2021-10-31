//FOOTER 
jQuery(document).ready(function(){
    footerHeight();
    jQuery(window).resize(function(){
        footerHeight();
    });
});

function footerHeight() {
    var footerHeight = $('footer').height();
    jQuery('body.gradient').css('padding-bottom', footerHeight);
}

//BLOG

jQuery(document).ready(function(){
    var distance = jQuery('.article-template__content').offset().top,
    $window = jQuery(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            jQuery('.article-template__hero-container').hide();
        } else {
            jQuery('.article-template__hero-container').show();
        }
    });
})


gsap.registerPlugin(ScrollTrigger)

//CART MODAL
const tl = gsap.timeline({});

gsap.set(".cart-modal", {
  duration: 0,
  xPercent: 100,
  autoAlpha: 0,
});

jQuery(document).on("cart.requestComplete", function (event, cart) {
  tl.to(".cart-modal", {
    duration: 0,
    autoAlpha: 1,
  }).to(".cart-modal", {
    duration: 0.4,
    xPercent: 0,
    ease: "circ.out",
  });
});

function handleModalOpen() {
  tl.to(".cart-modal", {
    duration: 0,
    autoAlpha: 1,
  }).to(".cart-modal", {
    duration: 0.4,
    xPercent: 0,
    ease: "circ.out",
  });
}

function handleModalClose() {
  tl.to(".cart-modal", {
    duration: 0.4,
    xPercent: 100,
    ease: "circ.out",
  });
}



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




let container = document.getElementById("container");

gsap.to(container, {
  x: () => `${-(container.scrollWidth - document.documentElement.clientWidth)}px`,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 0.2,
    start: "top top",
    end: () => `+=${container.scrollWidth - document.documentElement.clientWidth}`
  }
});

window.addEventListener("load", function() {
  const scrollColorElems = document.querySelectorAll(".horizontal-container .module");
  scrollColorElems.forEach((colorSection, i) => {
    ScrollTrigger.create({
      trigger: colorSection,
      start: "bottom +50%",
      onEnter: () => gsap.to(".home-featured-product", {backgroundColor: '#006450', overwrite: 'auto'}),
      onLeaveBack: () => gsap.to(".home-featured-product", {backgroundColor: '#CE0F69', overwrite: 'auto'})
    });
    ScrollTrigger.create({
      trigger: colorSection,
      start: "bottom +50%",
      onEnter: () => gsap.to(".lettering-container p", {color: '#FCDC3E', overwrite: 'auto'}),
      onLeaveBack: () => gsap.to(".lettering-container p", {color: '#F7CED7', overwrite: 'auto'})
    });
  });

  // HOME SMOKY PACKET
	var rotate = gsap.timeline({
	  scrollTrigger:{
	    trigger: ".home-featured-product",
	    scrub:0.5,
	    start: 'top top +=200',
	    end:'+=10000',
	  }
	})
	.to('.home-featured-product.bacon .content-container img', {
	  rotation:-360*5,
	  duration:1, ease:'none',
	})


	gsap.set('.home-featured-product.cheese .content-container img', {rotate:-300});

	// HOME CHEESE PACKET
	var rotate = gsap.timeline({
	  scrollTrigger:{
	    trigger: ".home-featured-product",
	    scrub:0.5,
	    start: "bottom +25%",
	    end: "bottom 0%",
	  }
	})
	.to('.home-featured-product.cheese .content-container img', {
	  rotation:-360,
	  duration:1, ease:'none',
	})


});










