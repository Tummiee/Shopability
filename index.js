const leftbtn = document.querySelector(".l-btn")
const rightbtn = document.querySelector(".r-btn")

rightbtn.addEventListener("click", function(event){
    const conent = document.querySelector(".product-slide")
    conent.scrollLeft += 1100
    event.preventDefault()
})

leftbtn.addEventListener("click", function(event){
    const conent = document.querySelector(".product-slide")
    conent.scrollLeft -= 1100
    event.preventDefault()
})

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress")
    let progressValue = document.getElementById("progress-value")
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight -
                     document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if(pos>100){
        scrollProgress.style.display = "grid"
    }
    else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0
    })
    scrollProgress.style.background = `conic-gradient(#5bdb57 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue

const sidebar = document.querySelector(".sidebar")
const cross = document.querySelector(".fa-xmark")
const black = document.querySelector(".black")
const sidebtn = document.querySelector(".second-1")

sidebtn.addEventListener("click", () =>{
    sidebar.classList.add("active")
    cross.classList.add("active")
    black.classList.add("active")
    document.body.classList.add("stop-scroll")
})

cross.addEventListener("click", () => {
    sidebar.classList.remove("active")
    cross.classList.remove("active")
    black.classList.remove("active")
    document.body.classList.remove("stop-scroll")
})