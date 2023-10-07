
var crsr = document.querySelector("#cursor");
var crsr = document.querySelector("#cursor-blur");
let nav = document.querySelector('.nav');



document.querySelector('#menu-btn').addEventListener('click', function() {
    document.querySelector('#nav').classList.toggle('active');
});


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x- 250 +"px"
    blur.style.top = dets.y- 250 +"px"
})


gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

    
}) 

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

// Add this to your JavaScript
