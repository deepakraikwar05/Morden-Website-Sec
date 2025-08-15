function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
}

loco();

function page1() {
  gsap.from(".first-part", {
    opacity: 0,
    x: -300,
    duration: 1.5,
    stagger: 0.2,
  });
  gsap.from(".overlay-text h1", {
    opacity: 0,
    y: 500,
    duration: 2.5,
    scrub: 5,
  });
}
page1();

function animation() {
  var elems = document.querySelectorAll(".elem");
  var page2 = document.querySelector(".page2");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });

  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.hoverWithMediaCircle(".page3 ", {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  });
}
animation();
Shery.makeMagnet(".magnet");
