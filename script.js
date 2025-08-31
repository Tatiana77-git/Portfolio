

gsap.from(".card", {y:20, ease:"bounce", duration:3, stagger:1})
gsap.from(".card-title",{opacity:0, duration:4,stagger:1} )
gsap.to(".header-subtitle", {
    "text":" I'm a frontend developer.",
    duration:2,
    repeat:3,
    repeatDelay:.7,
    ease:"power1.in",
    yoyou:true,
    delay:2

})