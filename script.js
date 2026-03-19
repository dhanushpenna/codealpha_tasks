let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let current = 0;

function openLightbox(img){

lightbox.style.display = "flex";
lightboxImg.src = img.src;

images.forEach((image,index)=>{
if(image.src === img.src){
current = index;
}
});
}

function closeLightbox(){
lightbox.style.display = "none";
}

function changeSlide(n){

current += n;

if(current >= images.length){
current = 0;
}

if(current < 0){
current = images.length -1;
}

lightboxImg.src = images[current].src;

}

/* Filter */

function filterSelection(category){

let items = document.querySelectorAll(".image");

items.forEach(item => {

if(category === "all" || item.classList.contains(category)){
item.style.display = "block";
}else{
item.style.display = "none";
}

});

}