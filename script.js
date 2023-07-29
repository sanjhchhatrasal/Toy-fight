var main = document.querySelector("#main");
var img = document.querySelector("#page1>img");


main.addEventListener("mousemove", function(dets){
    img.style.top = 1-dets.y*0.05 + "px"
    img.style.left =1- dets.x*0.05 + "px"
})

gsap.from("#page1>h1", {
    y:100,
    duration:1,
      scrollTrigger:{
        trigger:"h1",
        scroller:"body",
        start:"top 22%",
        end:"top 30%",
        scrub:2,
     }

})
gsap.to( "#page1 #nav #center-nav>a ", {
    y:-100,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page1>h1",
        scroller:"body",
        start:"top 22%",
        end:"top 29%",
        scrub:2,
    }

})
gsap.from( "#page2>h5", {
    y:10,
    stagger:true,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"h5",
        scroller:"body",
        start:"top 40%",
        end:"top 45%",
        scrub:2
    }

})

gsap.from( "#page3 #img1", {
    y:-40,
    stagger:true,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 50%",
        end:"top 75%",
        scrub:3
    }

})
gsap.from( "#page3 #img2", {
    y:-40,
    stagger:true,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#img2",
        scroller:"body",
        start:"top 50%",
        end:"top 75%",
        scrub:3
    }

})
gsap.from( "#page3>h6", {
    y:-40,
    stagger:true,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"h6",
        scroller:"body",
        start:"top 50%",
        end:"top 75%",
        scrub:3
    }

})
gsap.from( "#page4 #bg-img", {
    y:50,
    stagger:true,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#bg-img",
        scroller:"body",
        start:"top 60%",
        end:"top 75%",
        scrub:3
    }

})
gsap.from( "#page4 #hand", {
    y:-50,
    stagger:true,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#hand",
        scroller:"body",
        start:"top 60%",
        end:"top 75%",
        scrub:4
    }

})