


var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")


main.addEventListener("mousemove", function(e){

    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"back.Out"
    })


})

image.addEventListener("mouseenter", function(e){
    cursor.innerHTML = "View"
    // cursor.style.backgroundImage = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    gsap.to(cursor,{
        scale:4,
        backgroundImage:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
    })
})
image.addEventListener("mouseleave", function(e){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
       
    })
})