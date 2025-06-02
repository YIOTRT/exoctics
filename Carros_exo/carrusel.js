const carouselImages = document.getElementById('carousel-images');
const totalImages = carouselImages.children.length;
let index = 0;

function nextSlide() {
    index = (index + 1) % totalImages;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

function previousSlide() {
    index = (index - 1 + totalImages) % totalImages;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}