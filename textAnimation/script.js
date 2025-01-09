
function breakTheText(){
    

var text = document.querySelector("h1")
var h1text = text.textContent

var spliitedText = h1text.split("");
 var halfValue = spliitedText.length/2
var clutter = ""

spliitedText.forEach(function(e,i){
    if(i<halfValue){
        console.log(e)
        clutter += `<span class="f">${e}</span>`
    }else{
        clutter += `<span class="s">${e}</span>`
    }
})

text.innerHTML = clutter

}

breakTheText();

gsap.from("h1 .s",{
    y:50,
    opacity:0,
     duration:0.8,
    delay:0.5,
    stagger:-0.15
})

gsap.from("h1 .f",{
    y:50,
    opacity:0,
     duration:0.8,
    delay:0.5,
    stagger:0.15
})