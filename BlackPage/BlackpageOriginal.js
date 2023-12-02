const slider = document.querySelector('.slider');
const carouselSlider = document.querySelector('.carousel-slider');
let slideIndex = 1;

function showSlide(index) {
    if (index < 1) {
        slideIndex = 1;
    } else if (index > 3) {
        slideIndex = 3;
    } else {
        slideIndex = index;
    }
    carouselSlider.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}

slider.addEventListener('input', function () {
    showSlide(parseInt(this.value));
});

