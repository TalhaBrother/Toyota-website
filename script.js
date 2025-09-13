const menutoggle=document.querySelector(".menu-toggle")
const options=document.querySelector(".options")

menutoggle.addEventListener("click",(e)=>{
  options.classList.toggle("active")
   e.stopPropagation()
})
document.addEventListener("click",()=>{
  options.classList.remove("active")
})
options.addEventListener("click",(e)=>{
  e.stopPropagation()
})

let currentIndex=0
let slides=document.querySelectorAll(".banner .slides img")

function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove("active")
    if(i===index){
      slide.classList.add("active")
    }

  })
}

setInterval(()=>{
  currentIndex++
  if(currentIndex>=slides.length){
    currentIndex=0
  }
  showSlide(currentIndex)
},3000)

showSlide(currentIndex)

let cars=document.querySelectorAll(".row1 .car1")
let currentCar=0

function showCar(index){
  cars.forEach((cars,i)=>{
    cars.classList.remove("active")
    if(i===index){
      cars.classList.add("active")
    }
  })
}

setInterval(()=>{
  currentCar++
  if(currentCar>=cars.length){
    currentCar=0
  }
  showCar(currentCar)
},3000)
showCar(currentCar)