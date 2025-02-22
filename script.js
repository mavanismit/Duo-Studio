function init() {
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

//This is for mouse cursor

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
})


var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top 30%",
    end:"top -25",
    scrub:2,
    duration:3
  }
})


tl.to(".page1 h1", {
  x:-175
}, "anim")

tl.to(".page1 h2", {
  x:175
}, "anim")

tl.to(".page1 video", {
  width:"88%"
}, "anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    // markers:true,
    start:"top -120%",
    end:"top -130%",
    scrub:3,
    duration:3
  }
})

tl2.to(".main", {
  backgroundColor:"#fff",
  color: "black"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top -350%",
      end: "top -450%",
      scrub: 3
  }
})

tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})

