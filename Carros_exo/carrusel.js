document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100 + "%";
        document.querySelector(".carousel-images").style.transform = `translateX(${offset})`;
    }

    nextButton.addEventListener("click", function () {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    setInterval(function () {
        index = (index + 1) % images.length;
        updateCarousel();
    }, 5000); // Auto reproducción cada 5 segundos
});