Shery.mouseFollower({});
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
  //images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});
