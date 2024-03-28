const img = document.querySelector("img") 
const btns = document.querySelectorAll("button") 
let isON = false 
 
btns[0].addEventListener("click", () => { 
    btns[0].style.backgroundColor = "green" 
    btns[1].style.backgroundColor = "grey" 
    btns[4].style.backgroundColor = "rgb(255, 0, 0)" 
    btns[3].style.backgroundColor = "rgb(255, 157, 0)" 
    btns[2].style.backgroundColor = "rgb(0, 0, 255)" 
    isOn = true 
    btns[2].addEventListener("click", () => { 
        img.style.animationDuration = 1 + "s" 
    }) 
    btns[3].addEventListener("click", () => { 
        img.style.animationDuration = 0.5 + "s" 
    }) 
    btns[4].addEventListener("click", () => { 
        img.style.animationDuration = 0.1 + "s" 
    }) 
}); 
btns[1].addEventListener("click", () => { 
    btns[1].style.backgroundColor = "red" 
    btns[4].style.backgroundColor = "grey" 
    btns[3].style.backgroundColor = "grey" 
    btns[2].style.backgroundColor = "grey" 
    btns[0].style.backgroundColor = "grey" 
    img.style.animationDuration = 0 + "s" 
    isON = false 
    btns[2].addEventListener("click", () => { 
        img.style.animationDuration = 0 + "s" 
    }) 
    btns[3].addEventListener("click", () => { 
        img.style.animationDuration = 0 + "s" 
    }) 
    btns[4].addEventListener("click", () => { 
        img.style.animationDuration = 0 + "s" 
    }) 
 
})