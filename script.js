var animationTimelinemidgreen = gsap.timeline();
var animationTimelinelightgreen = gsap.timeline();
var animationTimelinedarkgreen = gsap.timeline();
var animationTimelineclouds = gsap.timeline();
var animationTimelineherotext = gsap.timeline();
var animationTimelineherobutton = gsap.timeline();
var animationTimelinewaterdarkgreen = gsap.timeline();

// animationTimelinemidgreen.to("#midgreen",{
function desc() {
  gsap.to("#midgreen", {
    transform: "translateX(0%)",
    x: 0,
    y: 100,
    duration: 2,
    scale: 1,
    bottom: 0,
    scrollTrigger: {
      trigger: "#herosection",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  animationTimelinelightgreen.to("#lightgreen", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#lightgreen",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // pin:true
    },
  });

  animationTimelinedarkgreen.to("#darkgreen", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#darkgreen",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // pin:true
    },
  });

  animationTimelineclouds.to("#clouds", {
    x: 130,
    y: 330,
    scale: 2,
    opacity: 1,
    duration: 2,
    delay: 1.5,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#darkgreen",
      scroller: "body",
      // markers:true,
      start: "top 10%",
      end: "top 2%",
      scrub: 3,
      // pin:true
    },
  });

  animationTimelineherotext.to("#herotext, #herotext2", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  });

  animationTimelineherobutton.to("#herobutton", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
  });

  gsap.to("#clouds2", {
    transform: "translateX(0%)",
    x: 0,
    y: 400,
    duration: 2,
    scale: 2,
    bottom: 0,
    width: 1000,
    scrollTrigger: {
      trigger: "#testimonialsection",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#sun", {
    transform: "translateX(0%)",
    x: 1700,
    y: -250,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#hills2", {
    transform: "translateX(0%)",
    x: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#hills1", {
    transform: "translateX(0%)",
    x: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#midblue", {
    transform: "translateX(0%)",
    x: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#darkblue", {
    transform: "translateX(0%)",
    x: 0,
    y: -40,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#lightblue", {
    transform: "translateX(0%)",
    x: 0,
    y: -160,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#water_midgreen", {
    // transform:"translateX(0%)",
    x: 20,
    y: -45,
    duration: 2,
    scale: 1.2,
    bottom: -40,
    width: 1100,
    scrollTrigger: {
      trigger: "#fishessection",
      scroller: "body",
      //   markers: true,
      start: "top -50",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#water_darkgreen", {
    x: 250,
    y: -45,
    duration: 2,
    width: 1650,
    scale: 1,
    rotate: 0,
    opacity: 1,
    bottom: -40,
    right: -180,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#water_lightgreen", {
    // transform:"translateX(0%)",
    x: 20,
    y: 120,
    duration: 2,
    opacity: 1,
    rotate: 0,
    bottom: -40,
    right: -180,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      // pin:true
    },
  });

  gsap.to("#fish", {
    transform: "translateX(0%)",
    x: 1750,
    y: -920,
    duration: 2,
    scale: 1.2,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });
}
// desc();

function macDesc() {
  gsap.to("#midgreen", {
    transform: "translateX(0%)",
    x: 0,
    y: 100,
    duration: 2,
    scale: 1,
    bottom: 0,
    scrollTrigger: {
      trigger: "#herosection",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  animationTimelinelightgreen.to("#lightgreen", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#lightgreen",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // pin:true
    },
  });

  animationTimelinedarkgreen.to("#darkgreen", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#darkgreen",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // pin:true
    },
  });

  animationTimelineclouds.to("#clouds", {
    x: 130,
    y: 330,
    scale: 2,
    opacity: 1,
    duration: 2,
    delay: 1.5,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#darkgreen",
      scroller: "body",
      // markers:true,
      start: "top 10%",
      end: "top 2%",
      scrub: 3,
      // pin:true
    },
  });

  animationTimelineherotext.to("#herotext, #herotext2", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  });

  animationTimelineherobutton.to("#herobutton", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
  });

  gsap.to("#clouds2", {
    transform: "translateX(0%)",
    x: 0,
    y: 400,
    duration: 2,
    scale: 2,
    bottom: 0,
    width: 1000,
    scrollTrigger: {
      trigger: "#testimonialsection",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#sun", {
    transform: "translateX(0%)",
    x: 1250,
    y: -550,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#hills2", {
    transform: "translateX(0%)",
    x: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#hills1", {
    transform: "translateX(0%)",
    x: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#midblue", {
    transform: "translateX(0%)",
    x: 0,
    y: 50,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#darkblue", {
    transform: "translateX(0%)",
    x: 0,
    y: -40,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#lightblue", {
    transform: "translateX(0%)",
    x: 0,
    y: -160,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#water_midgreen", {
    // transform:"translateX(0%)",
    x: -40,
    y: 30,
    duration: 2,
    scale: 1.2,
    bottom: -40,
    width: 1100,
    scrollTrigger: {
      trigger: "#fishessection",
      scroller: "body",
      //   markers: true,
      start: "top -50",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#water_darkgreen", {
    x: 100,
    y: 100,
    duration: 2,
    width: 1650,
    scale: 1,
    rotate: 0,
    opacity: 1,
    bottom: -40,
    right: -180,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#water_lightgreen", {
    // transform:"translateX(0%)",
    x: -300,
    y: -5,
    scale: 1.3,
    duration: 2,
    opacity: 1,
    rotate: 0,
    bottom: -40,
    right: -180,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      // pin:true
    },
  });

  gsap.to("#fish", {
    transform: "translateX(0%)",
    x: 1350,
    y: -700,
    duration: 2,
    scale: 1.2,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });
}
function smallmbl() {
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      //   markers: true,
      start: "top 0",
      end: "top -400%",
      scrub: 2,
      pin: true,
    },
  });
  tl1
    .to(
      "#midgreen",
      {
        x: -150,
        y: -5,
        duration: 1,
      },
      "a"
    )
    .to(
      "#lightgreen",
      {
        x: 170,
        y: -30,
        opacity: 2,
        scale: 2,
      },
      "a"
    )
    .to(
      "#darkgreen",
      {
        x: 120,
        y: -110,
        opacity: 1,
        scale: 2.8,
      },
      "a"
    )
    .to(
      "#clouds",
      {
        x: 0,
        y: 120,
        scale: 1.5,
        opacity: 1,
      },
      "a"
    )
    .to(
      "#testimonialsection",
      {
        opacity: 1,
      },
      "b"
    )
    .to(
      "#herosection",
      {
        top: "-100%",
        duration: 2,
        opacity: 0,
      },
      "b"
    )
    .to(
      "#darkblue",
      {
        // transform: "translateX(0%)",
        x: -40,
        y: 12,
        scale: 0.6,
        opacity: 1,
        duration: 1,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#midblue",
      {
        // transform: "translateX(0%)",
        x: 60,
        y: 90,
        opacity: 1,
        duration: 1,
        scale: 0.8,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#lightblue",
      {
        // transform: "translateX(0%)",
        x: -60,
        y: 50,
        opacity: 1,
        duration: 1,
        scale: 0.6,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#hills1",
      {
        x: 90,
        y: 20,
        duration: 1,
        scale: 2.5,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#hills2",
      {
        x: 120,
        y: 90,
        duration: 1,
        ease: Power1.easeOut,
        scale: 2.2,
      },
      "c"
    )
    .to(
      "#sun",
      {
        x: -250,
        y: 120,
        duration: 2,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#clouds2",
      {
        x: 0,
        y: 400,
        duration: 2,
        scale: 2,
        bottom: 0,
        width: 1000,
      },
      "c"
    )
    .to(
      ".fish_section",
      {
        opacity: 1,
      },
      "d"
    )
    .to(
      "#testimonialsection",
      {
        top: "-100%",
        opacity: 0,
        duration: 2,
      },
      "d"
    )
    .to(
      "#water_lightgreen",
      {
        x: 20,
        y: 10,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: -40,
        // right: -180,
      },
      "e"
    )
    .to(
      "#water_midgreen",
      {
        x: -10,
        y: -40,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: 100,
        scale: 1.6,
        // right: -180,
      },
      "e"
    )
    .to(
      "#water_darkgreen",
      {
        x: -35,
        y: -70,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: 100,
        scale: 1.9,
        // right: -180,
      },
      "e"
    )
    .to(
      "#fish",
      {
        x: 150,
        y: -300,
        duration: 2,
        scale: 0.8,
      },
      "e"
    );
  animationTimelineherotext.to("#herotext, #herotext2", {
    x: 0,
    y: 35,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  });
  animationTimelineherobutton.to("#herobutton", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
  });
}

function mbl1() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      //   markers: true,
      start: "top 0",
      end: "top -300%",
      scrub: 2,
      pin: true,
    },
  });
  tl2
    .to(
      "#midgreen",
      {
        x: 50,
        y: -150,
        duration: 1,
        ease: Power1.easeOut,
      },
      "a"
    )
    .to(
      "#lightgreen",
      {
        x: 170,
        y: -40,
        opacity: 2,
        duration: 1,
        scale: 2,
        ease: Power1.easeOut,
      },
      "a"
    )
    .to(
      "#darkgreen",
      {
        x: 120,
        y: -130,
        opacity: 1,
        duration: 1,
        scale: 2.8,
        ease: Power1.easeOut,
      },
      "a"
    )
    .to(
      "#clouds",
      {
        x: 0,
        y: 120,
        scale: 1.5,
        duration: 1,
        opacity: 1,
      },
      "a"
    )
    .to(
      "#testimonialsection",
      {
        opacity: 1,
        duration: 1,
      },
      "b"
    )
    .to(
      "#herosection",
      {
        top: "-100%",
        duration: 2,
        opacity: 0,
      },
      "b"
    )
    .to(
      "#darkblue",
      {
        // transform: "translateX(0%)",
        x: -40,
        y: 12,
        scale: 0.6,
        opacity: 1,
        duration: 1,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#midblue",
      {
        // transform: "translateX(0%)",
        x: 60,
        y: 90,
        opacity: 1,
        duration: 1,
        scale: 0.8,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#lightblue",
      {
        // transform: "translateX(0%)",
        x: -60,
        y: 50,
        opacity: 1,
        duration: 1,
        scale: 0.6,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#hills1",
      {
        x: 90,
        y: 20,
        duration: 1,
        scale: 2.5,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#hills2",
      {
        x: 120,
        y: 90,
        duration: 1,
        ease: Power1.easeOut,
        scale: 2.2,
      },
      "c"
    )
    .to(
      "#sun",
      {
        x: -350,
        y: 50,
        duration: 2,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#clouds2",
      {
        x: 0,
        y: 400,
        duration: 2,
        scale: 2,
        bottom: 0,
        width: 1000,
      },
      "c"
    )
    .to(
      ".fish_section",
      {
        opacity: 1,
      },
      "d"
    )
    .to(
      "#testimonialsection",
      {
        top: "-100%",
        opacity: 0,
        duration: 2,
      },
      "d"
    )
    .to(
      "#water_lightgreen",
      {
        x: 20,
        y: 10,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: -40,
        // right: -180,
      },
      "e"
    )
    .to(
      "#water_midgreen",
      {
        x: -10,
        y: -40,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: 100,
        scale: 1.6,
        // right: -180,
      },
      "e"
    )
    .to(
      "#water_darkgreen",
      {
        x: -35,
        y: -70,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: 100,
        scale: 1.9,
        // right: -180,
      },
      "e"
    )
    .to(
      ".fish",
      {
        x: 110,
        y: -170,
        duration: 2,
        scale: 0.8,
      },
      "e"
    );
  animationTimelineherotext.to("#herotext, #herotext2", {
    x: 0,
    y: 35,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  });
  animationTimelineherobutton.to("#herobutton", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
  });
}

function Tab1() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      //   markers: true,
      start: "top 0",
      end: "top -400%",
      scrub: 2,
      pin: true,
    },
  });
  tl3
    .to(
      "#midgreen",
      {
        x: "15%",
        y: "-30%",
        duration: 1,
        ease: Power1.easeOut,
        scale: 2.3,
      },
      "a"
    )
    .to(
      "#lightgreen",
      {
        x: "15%",
        y: "0%",
        opacity: 1,
        scale: 1.4,
        ease: Power1.easeOut,
      },
      "a"
    )
    .to(
      "#darkgreen",
      {
        x: "30%",
        y: "-15%",
        opacity: 1,
        scale: 2.8,
        ease: Power1.easeOut,
      },
      "a"
    )
    .to(
      "#clouds",
      {
        x: 0,
        y: 120,
        scale: 1.5,
        opacity: 1,
      },
      "a"
    )
    .to(
      "#testimonialsection",
      {
        opacity: 1,
      },
      "b"
    )
    .to(
      "#herosection",
      {
        top: "-100%",
        duration: 2,
        opacity: 0,
      },
      "b"
    )
    .to(
      "#darkblue",
      {
        x: -170,
        y: "-50%",
        scale: 0.5,
        opacity: 1,
        duration: 1,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#midblue",
      {
        // transform: "translateX(0%)",
        x: 100,
        y: 70,
        opacity: 1,
        duration: 1,
        scale: 0.8,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#lightblue",
      {
        // transform: "translateX(0%)",
        x: -150,
        y: 30,
        opacity: 1,
        duration: 1,
        scale: 0.5,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#hills1",
      {
        x: 80,
        y: -10,
        duration: 1,
        scale: 1.5,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#hills2",
      {
        x: 110,
        y: 90,
        duration: 1,
        ease: Power1.easeOut,
        scale: 1.5,
      },
      "c"
    )
    .to(
      "#sun",
      {
        x: -520,
        y: 200,
        duration: 2,
        ease: Power1.easeOut,
      },
      "c"
    )
    .to(
      "#clouds2",
      {
        x: 0,
        y: 400,
        duration: 2,
        scale: 2,
        bottom: 0,
        width: 1000,
      },
      "c"
    )
    .to(
      ".fish_section",
      {
        opacity: 1,
      },
      "d"
    )
    .to(
      "#testimonialsection",
      {
        top: "-100%",
        opacity: 0,
        duration: 2,
      },
      "d"
    )
    .to(
      "#water_lightgreen",
      {
        x: 20,
        y: -5,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: -40,
        // right: -180,
      },
      "e"
    )
    .to(
      "#water_midgreen",
      {
        x: -10,
        y: -50,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: 100,
        scale: 1.6,
        // right: -180,
      },
      "e"
    )
    .to(
      "#water_darkgreen",
      {
        x: -40,
        y: -50,
        duration: 2,
        opacity: 1,
        rotate: 0,
        // bottom: 100,
        scale: 1.9,
        // right: -180,
      },
      "e"
    )
    .to(
      ".fish",
      {
        x: 450,
        y: -200,
        duration: 2,
        scale: 0.8,
      },
      "e"
    );
  animationTimelineherotext.to("#herotext, #herotext2", {
    x: 0,
    y: 25,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  });
  animationTimelineherobutton.to("#herobutton", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
  });
}

function TabLandScape() {
  gsap.to("#midgreen", {
    transform: "translateX(0%)",
    x: 0,
    y: 40,
    duration: 2,
    scale: 1,
    bottom: 0,
    scrollTrigger: {
      trigger: "#herosection",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  animationTimelinelightgreen.to("#lightgreen", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#lightgreen",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // pin:true
    },
  });

  animationTimelinedarkgreen.to("#darkgreen", {
    x: 0,
    y: -75,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#darkgreen",
      scroller: "body",
      // markers:true,
      start: "top 0%",
      end: "top -100%",
      scrub: 1,
      // pin:true
    },
  });

  animationTimelineclouds.to("#clouds", {
    x: 130,
    y: 330,
    scale: 2,
    opacity: 1,
    duration: 2,
    delay: 1.5,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#darkgreen",
      scroller: "body",
      // markers:true,
      start: "top 10%",
      end: "top 2%",
      scrub: 3,
      // pin:true
    },
  });

  animationTimelineherotext.to("#herotext, #herotext2", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1.5,
  });

  animationTimelineherobutton.to("#herobutton", {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
  });

  gsap.to("#clouds2", {
    transform: "translateX(0%)",
    x: 0,
    y: 400,
    duration: 2,
    scale: 2,
    bottom: 0,
    width: 1000,
    scrollTrigger: {
      trigger: "#testimonialsection",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#sun", {
    transform: "translateX(0%)",
    x: 880,
    y: -190,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#hills2", {
    transform: "translateX(0%)",
    x: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#hills1", {
    transform: "translateX(0%)",
    x: 0,
    y: 70,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#midblue", {
    transform: "translateX(0%)",
    x: 0,
    y: 20,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#darkblue", {
    transform: "translateX(0%)",
    x: 0,
    y: -40,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#lightblue", {
    transform: "translateX(0%)",
    x: 0,
    y: -160,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".testimonials_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });

  gsap.to("#water_midgreen", {
    x: -35,
    y: 30,
    duration: 2,
    scale: 1.1,
    bottom: -75,
    width: 1100,
    scrollTrigger: {
      trigger: "#fishessection",
      scroller: "body",
      //   markers: true,
      start: "top -50",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#water_darkgreen", {
    x: 250,
    y: 0.55,
    duration: 2,
    width: 1340,
    scale: 1,
    rotate: 0,
    opacity: 1,
    bottom: -40,
    right: 70,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      pin: true,
    },
  });

  gsap.to("#water_lightgreen", {
    // transform:"translateX(0%)",
    x: -140,
    y: 10,
    duration: 2,
    opacity: 1,
    rotate: 0,
    bottom: -40,
    right: -180,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
      // pin:true
    },
  });

  gsap.to("#fish", {
    transform: "translateX(0%)",
    x: 700,
    y: -650,
    duration: 2,
    scale: 1.2,
    scrollTrigger: {
      trigger: ".fish_section",
      scroller: "body",
      // markers:true,
      start: "top 0",
      end: "top -200%",
      scrub: 1,
    },
  });
}

function okk() {
  var widthh = window.innerWidth;
  window.addEventListener("resize", function () {
    if (window.innerWidth !== widthh) {
      window.location.reload(true);
    }
  });
  // console.log(widthh);

  if (widthh >= 0 && widthh <= 375) {
    // Code to execute when yourValue is between 0 and 400
    console.log("/* Media Query for low resolution Mobile Devices */");
    smallmbl();
  } else if (widthh >= 376 && widthh <= 600) {
    // Code to execute when yourValue is between 401 and 600
    console.log("/* Media Query for Mobile Devices */");
    mbl1();
  } else if (widthh >= 768 && widthh <= 1023) {
    /* Media Query for Tablets Ipads portrait mode */
    console.log("Media Query for Tablets Ipads portrait mode ");
    Tab1();
  } else if (widthh >= 1024 && widthh <= 1199) {
    console.log(" /* Media Query for Tab LandScape */");
    TabLandScape();
  } else if (widthh >= 1200 && widthh <= 1500) {
    console.log(" /* Media Query for MacBook */");
    macDesc();
  } else if (widthh >= 1501) {
    console.log(" /* Media Query for Laptops and Desktops */");
    desc();
  }
}
okk();
