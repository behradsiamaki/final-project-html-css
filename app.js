
const overlay = document.querySelector(".overlay");
const openOverlay = document.querySelector(".open-overlay");
const closeOverlay = document.querySelector(".close-overlay");

openOverlay.addEventListener("click", function(){
    overlay.classList.add("open");
})

closeOverlay.addEventListener("click", function(){
    overlay.classList.remove("open");
})

const slides = document.querySelectorAll(".slide-item");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const overlaySlider = document.querySelector(".overlay-slider");

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
})

let counter = 0;

nextBtn.addEventListener("click", function(){
    overlaySlider.classList.add("remove");
});

nextBtn.addEventListener("click", function(){
    counter++;
    carousel();
});
prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
    if(counter === 0){
        overlaySlider.classList.add("open");
    }else if(counter === -1){
        overlaySlider.classList.add("open");
    }
    console.log(counter);
});

function carousel(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

const items = document.getElementsByClassName("box-wrapper-responsive");
for(let index = 0; index < items.length; index++){
    const element = items[index];
    console.log(element);
    const title = element.querySelector("h2");
    title.addEventListener("click", function(){
        this.parentNode.classList.toggle("open")
    })
}
