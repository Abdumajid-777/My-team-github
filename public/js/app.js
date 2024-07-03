let hiddenBox = document.querySelectorAll("#hiddenBox")
let flexBox = document.querySelectorAll("#flexBox")
let rotateBtn = document.querySelectorAll("#rotateBtn")
let rotateBtn1 = document.querySelectorAll("#rotateBtn1")
let hamburgerBtn = document.querySelector("#hamburgerBtn")
let responsiveMenu = document.querySelector("#responsiveMenu")
let closeMenu = document.querySelector("#closeMenu")



rotateBtn.forEach(function(item , index){
    item.addEventListener('click' , function(){
        hiddenBox[index].classList.remove("hidden")
        flexBox[index].classList.add("hidden")
    })
})
rotateBtn1.forEach(function(item , index){
    item.addEventListener('click' , function(){
        hiddenBox[index].classList.add("hidden")
        flexBox[index].classList.remove("hidden")
    })
})

hamburgerBtn.addEventListener('click' , function(){
    responsiveMenu.classList.remove("-right-full")
    responsiveMenu.classList.add("right-0")
})
closeMenu.addEventListener('click' , function(){
    responsiveMenu.classList.remove("right-0")
    responsiveMenu.classList.add("-right-full")
})