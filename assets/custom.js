//FOOTER 
jQuery(document).ready(function(){
    footerHeight();
    jQuery(window).resize(function(){
        footerHeight();
    });
});

function footerHeight() {
    setTimeout(function(){ 
        var footerHeight = jQuery('footer').height();
        jQuery('body.gradient').css('padding-bottom', footerHeight);
    }, 500);    
}

//BLOG

jQuery(document).ready(function(){
    
    if(jQuery('body').hasClass('article')) {
        var distance = jQuery('.article-template__content').offset().top,
        $window = jQuery(window);

        $window.scroll(function() {
            if ( $window.scrollTop() >= distance ) {
                jQuery('.article-template__hero-container').hide();
            } else {
                jQuery('.article-template__hero-container').show();
            }
        });
    }
    
});


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


//HOME ANIMATIONS 

if(jQuery('body').hasClass('home')) {
    
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
    
}


//PAGES

let presscontent = document.getElementById("press-content");

if (jQuery(presscontent).length > 0 ) {
    
    //PRESS SIDE SCROLLING
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
            }
            currentWidth = jQuery(window).width();
        });

    });

    //PRESS SIDE SCROLLING --- END
}

//STORY

let tumbleweed = document.getElementById("tumbleweed");

if(jQuery(tumbleweed).length > 0) {
    
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
            rotation:-360*3,
            duration:1, ease:'none',
        })
       
        gsap.to("#tumbleweed", {duration: 0.6, y:120, ease:"circ.in", repeat:-1, yoyo:true})

        var tl = new TimelineMax({repeat:-1});
        
    });
}

let plainNooch = document.getElementById("plainnooch");

if(jQuery(plainNooch).length > 0) {
    
    jQuery(document).ready(function(){
        
        gsap.to('#plainnooch', {
          rotate: 110,
          ease: "none",
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
            scrub: true
          }
        })
        gsap.to('#plainnooch2', {
          rotate: -110,
          ease: "none",
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
            scrub: true
          }
        })
        
        
    


        
//        have a unique timeline for each piece of dust...
        
        var dustStart = "bottom center";
        var shouldstop = false;
        
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: "#plainnooch",
            start: dustStart,
            onEnter: repeatTimeline,
            onLeaveBack: stopTimeline,
            markers: true,
          }
        });

        tl.to('.dustone', {
            ease: "power1.in", y: 300, x: 500, repeat: -1, onRepeat:checkShouldStop, duration: 4, delay: 0, rotate: 90,
        }, 1)
        tl.to('.dusttwo', {
            ease: "power1.in", y: 300, x: 530, repeat: -1, onRepeat:checkShouldStop, duration: 4.2, delay: 0, rotate: 90,
        }, 1)
        tl.to('.dustthree', {
            ease: "power1.in", y: 300, x: 580, repeat: -1, onRepeat:checkShouldStop, duration: 5.5, delay: 2, rotate: 90,
        }, 1)
        tl.to('.dustfour', {
            ease: "power1.in", y: 300, x: 550, repeat: -1, onRepeat:checkShouldStop, duration: 4.6, delay: 0, rotate: 90,
        }, 1)
        tl.to('.dustfive', {
            ease: "power1.in", y: 300, x: 670, repeat: -1, onRepeat:checkShouldStop, duration: 4.1, delay: 0, rotate: 90,
        }, 1)
        tl.to('.dustsix', {
            ease: "power1.in", y: 300, x: 610, repeat: -1, onRepeat:checkShouldStop, duration: 3.7, delay: 1, rotate: 90,
        }, 1)
        tl.to('.dustseven', {
            ease: "power1.in", y: 300, x: 500, repeat: -1, onRepeat:checkShouldStop, duration: 3.8, delay: 0, rotate: 90,
        }, 1)
        tl.to('.dusteight', {
            ease: "power1.in", y: 300, x: 480, repeat: -1, onRepeat:checkShouldStop, duration: 3.9, delay: 0, rotate: 90,
        }, 1)
        tl.to('.dustnine', {
            ease: "power1.in", y: 300, x: 450, repeat: -1, onRepeat:checkShouldStop, duration: 4.4, delay: 3, rotate: 90,
        }, 1)
        tl.to('.dustten', {
            ease: "power1.in", y: 300, x: 530, repeat: -1, onRepeat:checkShouldStop, duration: 4.2, delay: 0, rotate: 90,
        }, 1)

        function repeatTimeline() {
            console.log('repeat');
            shouldstop = false;
        }
        function stopTimeline() {
            console.log('stop');
            shouldstop = true;
        }
        function checkShouldStop() {
          if (shouldstop)
            tl.pause();
        }
        
        
     
        
        
        gsap.to('.toasted .dust', {
          ease: "power1.in", y: 300,x: -500,repeat: -1,duration: 4, delay:2, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dusttwo', {
          ease: "power1.in",y: 300,x: -530,repeat: -1,duration: 4.2, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustthree', {
          ease: "power1.in",y: 300,x: -580,repeat: -1,duration: 5.5,delay:2, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustfour', {
          ease: "power1.in",y: 300,x: -550,repeat: -1,duration: 4.6, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustfive', {
          ease: "power1.in",y: 300,x: -670,repeat: -1,duration: 4.1, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustsix', {
          ease: "power1.in",y: 300,x: -610,repeat: -1,duration: 3.7, delay:1, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustseven', {
          ease: "power1.in",y: 300,x: -500,repeat: -1,duration: 3.8, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dusteight', {
          ease: "power1.in",y: 300,x: -480,repeat: -1,duration: 3.9, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustnine', {
          ease: "power1.in",y: 300,x: -450,repeat: -1,duration: 4.4,delay:3, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })
        gsap.to('.toasted .dustten', {
          ease: "power1.in",y: 300,x: -530,repeat: -1,duration: 4.2, rotate: 90,
          scrollTrigger: {
            trigger: "#plainnooch",
            start: "top bottom",
            end: "bottom center",
          }
        })

    });
}

//STORY BACKGROUND CHANGE

if (jQuery('body').hasClass('story')) {
    const sections = gsap.utils.toArray(".panel");
    const container = document.querySelector('#MainContent');

    const backgroundChange = gsap.timeline({

        scrollTrigger: {
        trigger: "#process",
        scrub: true,
        end: () => `+=${container.offsetWidth}`

      }

    })

     backgroundChange
     .to(container, { duration: 3, backgroundColor: '#CE0F69', ease: "none" }, 0)
}















