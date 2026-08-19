gsap.registerPlugin(ScrollTrigger);


/* ==========================================
   MATCH MEDIA
========================================== */

const mm = gsap.matchMedia();


/* ==========================================
   PAGE INTRO
========================================== */

const intro = gsap.timeline({
  defaults: {
    ease: "power4.out"
  }
});


intro

  .from(".nav", {
    y: -40,
    opacity: 0,
    duration: 1
  })

  .from(".eyebrow", {
    y: 30,
    opacity: 0,
    duration: .8
  }, "-=.5")

  .from(".hero-word", {
    y: 180,
    rotateX: -80,
    opacity: 0,
    duration: 1.5,
    stagger: .15
  }, "-=.5")

  .from(".hero-description", {
    y: 30,
    opacity: 0,
    duration: .8
  }, "-=.8")

  .from(".hero-ring", {
    scale: 0,
    opacity: 0,
    duration: 2,
    stagger: .2
  }, "-=1");


/* ==========================================
   CONTINUOUS ORBS
========================================== */

gsap.to(".orb-a", {
  x: 180,
  y: -100,
  scale: 1.4,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".orb-b", {
  x: -150,
  y: 120,
  scale: 1.3,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".orb-c", {
  x: 100,
  y: -100,
  scale: 1.5,
  duration: 9,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


/* ==========================================
   CURSOR
========================================== */

const cursor =
  document.querySelector(".cursor");

const cursorText =
  document.querySelector(".cursor span");

if (
  window.matchMedia("(pointer:fine)").matches
) {

  const moveX = gsap.quickTo(
    cursor,
    "left",
    {
      duration: .4,
      ease: "power3"
    }
  );

  const moveY = gsap.quickTo(
    cursor,
    "top",
    {
      duration: .4,
      ease: "power3"
    }
  );


  window.addEventListener(
    "mousemove",
    e => {

      moveX(e.clientX);
      moveY(e.clientY);

    }
  );


  document
    .querySelectorAll(".magnetic")
    .forEach(button => {

      button.addEventListener(
        "mouseenter",
        () => {

          gsap.to(cursor, {
            width: 90,
            height: 90,
            duration: .4
          });

          gsap.to(cursorText, {
            opacity: 1,
            duration: .2
          });

        }
      );


      button.addEventListener(
        "mouseleave",
        () => {

          gsap.to(cursor, {
            width: 42,
            height: 42,
            duration: .5,
            ease: "elastic.out(1,.5)"
          });

          gsap.to(cursorText, {
            opacity: 0
          });

        }
      );


      button.addEventListener(
        "mousemove",
        e => {

          const rect =
            button.getBoundingClientRect();

          const x =
            e.clientX -
            rect.left -
            rect.width / 2;

          const y =
            e.clientY -
            rect.top -
            rect.height / 2;

          gsap.to(button, {

            x: x * .25,
            y: y * .25,

            duration: .5,

            ease: "power3.out"

          });

        }
      );


      button.addEventListener(
        "mouseleave",
        () => {

          gsap.to(button, {

            x: 0,
            y: 0,

            duration: .8,

            ease: "elastic.out(1,.3)"

          });

        }
      );

    });

}


/* ==========================================
   HERO SCROLL
========================================== */

gsap.timeline({

  scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: 1

  }

})

.to(".hero-content", {

  y: -250,
  scale: .6,
  opacity: 0

}, 0)

.to(".hero-grid", {

  scale: 4,
  rotation: -8

}, 0)

.to(".ring-one", {

  scale: 2,
  rotation: 180

}, 0)

.to(".ring-two", {

  scale: 1.5,
  rotation: -180

}, 0)

.to(".orb-a", {

  x: -300,
  y: 300,
  scale: 2

}, 0)

.to(".orb-b", {

  x: 300,
  y: -200,
  scale: 2

}, 0);


/* ==========================================
   UNIVERSE DESKTOP
========================================== */

mm.add(
  "(min-width: 769px)",
  () => {

    const tl = gsap.timeline({

      scrollTrigger: {

        trigger: ".universe",

        start: "top top",

        end: "bottom bottom",

        scrub: 1,

        pin: false

      }

    });


    tl

      .fromTo(
        ".universe-title",

        {
          scale: 1.8,
          opacity: 0
        },

        {
          scale: 1,
          opacity: 1
        }
      )

      .to(
        ".universe-title",

        {
          scale: .35,
          y: -100
        }
      )

      .to(
        ".universe-bg",

        {
          scale: 2.5,
          rotation: 15
        },
        "<"
      )

      .to(
        ".planet-one",

        {
          x: 500,
          y: -250,
          scale: 2,
          rotation: 360
        },
        "<"
      )

      .to(
        ".planet-two",

        {
          x: -500,
          y: 250,
          scale: .5,
          rotation: -360
        },
        "<"
      )

      .to(
        ".card-one",

        {
          x: -400,
          y: -250,
          rotation: -35
        },
        "<"
      )

      .to(
        ".card-two",

        {
          x: 400,
          y: 300,
          rotation: 40
        },
        "<"
      )

      .to(
        ".card-three",

        {
          x: -300,
          y: 250,
          rotation: 25
        },
        "<"
      );


    /* SVG PATH */

    const path =
      document.querySelector("#orbitPath");

    const dot =
      document.querySelector(".svg-dot");

    const length =
      path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });


    gsap.to(path, {

      strokeDashoffset: 0,

      scrollTrigger: {

        trigger: ".universe",

        start: "top top",

        end: "bottom bottom",

        scrub: 1

      }

    });


    gsap.to(dot, {

      motionPath: {
        path: "#orbitPath",
        align: "#orbitPath",
        autoRotate: true
      },

      scrollTrigger: {

        trigger: ".universe",

        start: "top top",

        end: "bottom bottom",

        scrub: 1

      }

    });

  }
);


/* ==========================================
   MOBILE UNIVERSE
========================================== */

mm.add(
  "(max-width: 768px)",
  () => {

    gsap.fromTo(
      ".universe-title",

      {
        scale: 1.5,
        opacity: 0
      },

      {

        scale: 1,
        opacity: 1,

        scrollTrigger: {

          trigger: ".universe",

          start: "top 70%",

          end: "top 20%",

          scrub: 1

        }

      }
    );


    gsap.to(".planet-one", {

      x: 150,
      y: -100,
      rotation: 360,

      scrollTrigger: {

        trigger: ".universe",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

      }

    });


    gsap.to(".planet-two", {

      x: -150,
      y: 100,
      rotation: -360,

      scrollTrigger: {

        trigger: ".universe",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

      }

    });


    gsap.utils
      .toArray(".floating-card")
      .forEach((card, index) => {

        gsap.fromTo(
          card,

          {
            y: 80,
            opacity: 0,
            rotation: -15
          },

          {

            y: 0,
            opacity: 1,
            rotation: 0,

            scrollTrigger: {

              trigger: ".universe",

              start:
                `top ${85 - index * 10}%`,

              end:
                `top ${50 - index * 10}%`,

              scrub: 1

            }

          }
        );

      });

  }
);


/* ==========================================
   PORTAL
========================================== */

gsap.timeline({

  scrollTrigger: {

    trigger: ".portal",

    start: "top 80%",

    end: "top 10%",

    scrub: 1

  }

})

.to(".portal-circle", {

  clipPath:
    "circle(50% at 50% 50%)",

  duration: 1

})

.to(".portal-circle img", {

  scale: 1,

  duration: 1

}, "<")

.from(".portal-text", {

  scale: 1.8,

  opacity: 0,

  duration: 1

}, "<");


/* ==========================================
   DIMENSION
========================================== */

gsap.timeline({

  scrollTrigger: {

    trigger: ".dimension",

    start: "top bottom",

    end: "bottom top",

    scrub: 1

  }

})

.to(".word-back", {

  x: -300,
  rotation: -8

}, 0)

.to(".word-front", {

  x: 300,
  rotation: 8

}, 0)

.to(".cube", {

  rotationX: 360,
  rotationY: 720,
  rotationZ: 180,

  scale: 1.5

}, 0);


/* ==========================================
   FINAL
========================================== */

gsap.timeline({

  scrollTrigger: {

    trigger: ".final",

    start: "top 80%",

    end: "top 20%",

    scrub: 1

  }

})

.from(".final-title", {

  y: 200,
  opacity: 0,
  scale: .7

})

.to(".final-glow", {

  scale: 2.5,
  x: -200

}, "<");


/* ==========================================
   SCROLL VELOCITY
========================================== */

ScrollTrigger.create({

  onUpdate: self => {

    const velocity =
      self.getVelocity();

    const skew =
      gsap.utils.clamp(
        -4,
        4,
        velocity / -500
      );


    gsap.to(
      ".hero-title, .universe-title",
      {

        skewX: skew,

        duration: .25,

        overwrite: true

      }
    );

  }

});


/* ==========================================
   PROGRESS
========================================== */

gsap.to(".progress", {

  width: "100%",

  ease: "none",

  scrollTrigger: {

    trigger: document.body,

    start: "top top",

    end: "bottom bottom",

    scrub: .2

  }

});


/* ==========================================
   REFRESH
========================================== */

window.addEventListener(
  "load",
  () => {

    ScrollTrigger.refresh();

  }
);