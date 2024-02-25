let page1Center = document.querySelector(".page1-center");

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    markers: true,
    scrub: 2,
    pin: true,
    start: "top top",
    end: "bottom -200%",
  },
});

tl1
  .to(".page1-center #img0", {
    rotate: 0,
    scale: 2,
    ease: "power2",
    duration: 4,
  })
  .to(".page1-center #img0", {
    y: "-250%",
    duration: 4,
  })
  .to(".page1-center #img1", {
    rotate: 0,
    scale: 2,
    ease: "power2",
    duration: 4,
  })
  .to(".page1-center #img1", {
    y: "-250%",
    duration: 4,
  })
  .to(".page1-center #img2", {
    rotate: 0,
    scale: 2,
    ease: "power2",
    duration: 4,
  })
  .to(".page1-center #img2", {
    y: "-250%",
    duration: 4,
  })
  .to(".page1-center #img3", {
    rotate: 0,
    scale: 5,
    opacity: 0,
    ease: "power2",
    duration: 4,
  })
  .to(
    ".page1-center .bg",
    {
      opacity: 1,
      duration: 5,
    },
    "atOnce"
  )
  .to(
    ".bg-text",
    {
      color: "white",
    },
    "atOnce"
  )
  .to(".nav, .page1-btm", {
    opacity: 0,
  })
  .to(
    ".lp1",
    {
      x: "100%",
      duration: 4,
    },
    "atOnce2"
  )
  .to(
    ".bg-text",
    {
      opacity: 0,
    },
    "atOnce2"
  )
  .to(".lp-text1", {
    transform: "translateX(-200%)",
    duration: 25,
  })
  .to(".lp-text2", {
    opacity: 1,
    duration: 10,
    width: "100%",
  })
  .to(".lp-text2-line", {
    width: "100%",
    duration: 5,
  })
  .to(
    ".lp-text2-line",
    {
      opacity: 0,
      duration: 10,
    },
    "atOnce3"
  )
  .to(
    ".lp-text2",
    {
      opacity: 0,
      duration: 8,
    },
    "atOnce3"
  )
  .to(".lp-text3", {
    opacity: 1,
    duration: 5,
  });
