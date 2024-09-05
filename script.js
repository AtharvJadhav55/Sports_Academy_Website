var cr=document.querySelector("#cursor")
var crb=document.querySelector("#cursorblurr")
document.addEventListener("mousemove",function(dets){
    cr.style.left=dets.x+10+"px"
    cr.style.top=dets.y+"px"
    crb.style.left=dets.x-200+"px"
    crb.style.top=dets.y-200+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
cr.style.scale=2
cr.style.border="0.5px solid #44f84a"
cr.style.backgroundColor="transparent"
   })
   elem.addEventListener("mouseleave",function(){
    cr.style.scale=1
cr.style.border="0px solid #44f84a"
cr.style.backgroundColor="#44f84a"
   })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       /* markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       /* markers:true,*/
        start:"top -25%",
        end:"top -70%",
        scrub:1
    }
})

gsap.from("#aboutus",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
       /* markers:true,*/
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})

gsap.from("#cardcontainer",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#cardcontainer",
        scroller:"body",
       /* markers:true,*/
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})

gsap.to("#colon1",{
    y:50,
    x:60,
    scrollTrigger:{
trigger:"#colon1",
scroller:"body",
/*markers:true,*/
start:"top 50%",
end:"top 47%",
scrub:1
    }
})
gsap.to("#colon2",{
    y:-50,
    x:-60,
    scrollTrigger:{
trigger:"#colon2",
scroller:"body",
/*markers:true,*/
start:"top 50%",
end:"top 45%",
scrub:1
    }
})