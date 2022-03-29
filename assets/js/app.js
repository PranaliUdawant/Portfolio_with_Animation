gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.from(".left-box", {
  height: 0,
  duration: 1,
});
tl.from(".right-box", {
  y: "100%",
  duration: 1,
  delay: "-1",
});
tl.from(".right-box>img", {
  y: "100%",
  duration: 0.5,
  opacity: 0,
});

tl.from(".hire", {
  opacity: 0,
  duration: 1,
});
tl.call(removeBodyClass, []);
tl.from(".black-box", {
  width: "0%",
  duration: 1,
  delay: 1,
});
tl.from(".black-box>img", {
  y: "50%",
  opacity: 0,
  stagger: {
    each: 0.1,
  },
  duration: 1,
});
function removeBodyClass() {
  document.querySelector("#main").classList.remove("p-5");
}

gsap.from(".lead", {
  x: "-200%",
  duration: 0.3,
  scrollTrigger: {
    trigger: ".lead",
    markers: true,
    start: "top 60%"
  }
})
gsap.from(".card", {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    markers: true,
    start: "top 70%"
  }
})