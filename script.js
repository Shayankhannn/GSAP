gsap.to("#div h1",{
    transform: "translateX(-150%)",
    
    scrollTrigger: {
        trigger: "#div",
        scroller: "body",
        scrub:2,
        start:"top 0",
        end:"-100%",
        pin:true
    }
})