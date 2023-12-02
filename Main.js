const sliderRed = document.querySelector('.slider-red');
const sliderYellow = document.querySelector('.slider-yellow');
const sliderBlue = document.querySelector('.slider-blue');
const sliderGreen = document.querySelector('.slider-green');

const carouselContainerR = document.querySelector('.carousel-container-r');
const carouselContainerY = document.querySelector('.carousel-container-y');
const carouselContainerB = document.querySelector('.carousel-container-b');
const carouselContainerG = document.querySelector('.carousel-container-g');

const carouselSliderR = document.querySelector('.carousel-slider-r');
const carouselSliderY = document.querySelector('.carousel-slider-y');
const carouselSliderB = document.querySelector('.carousel-slider-b');
const carouselSliderG = document.querySelector('.carousel-slider-g');


let slideIndex = 1;


carouselContainerY.style.display = 'none';
carouselContainerB.style.display = 'none';
carouselContainerG.style.display = 'none';

function openPortfolio(){
  window.location.href = 'https://yaroslavtsybulia.github.io'; 
}

function showSlide(sliderIndex,  container) {
    if (sliderIndex < 1) {
        sliderIndex = 1;
    } else if (sliderIndex > 3) {
        sliderIndex = 3;
    }
    container.style.transform = `translateX(-${(sliderIndex - 1) * 100}%)`;
}

sliderRed.addEventListener('input', function () {
    if (carouselSliderR.style.display !== 'none') {
        slideIndex = parseInt(this.value);
        showSlide(slideIndex, carouselSliderR);
    } 
});

sliderYellow.addEventListener('input', function () {
if (carouselSliderY.style.display !== 'none') {
        slideIndex = parseInt(this.value);
        showSlide(slideIndex, carouselSliderY);
    }
});

sliderBlue.addEventListener('input', function () {
if (carouselSliderB.style.display !== 'none') {
        slideIndex = parseInt(this.value);
        showSlide(slideIndex, carouselSliderB);
    }
});

sliderGreen.addEventListener('input', function () {
if (carouselSliderG.style.display !== 'none') {
        slideIndex = parseInt(this.value);
        showSlide(slideIndex, carouselSliderG);
    }
});

function openSliderRed() {
    if (carouselSliderY.style.display !== 'none' || carouselSliderB.style.display !== 'none' || carouselSliderG.style.display !== 'none' ){
        // Fade out the yellow container
        carouselSliderY.style.opacity = 0;
        // Fade out the blue container
        carouselSliderB.style.opacity = 0;
        //Fade out the green container
        carouselSliderG.style.opacity = 0;

        // Wait for 300 milliseconds (0.3 seconds) for the fade out effect
        setTimeout(function() {
            // Hide the yellow container
            carouselSliderY.style.display = 'none';
            carouselContainerY.style.display = 'none';

            // Hide the blue container
            carouselSliderB.style.display = 'none';
            carouselContainerB.style.display = 'none';
            
            // Hide the green container
            carouselSliderG.style.display = 'none';
            carouselContainerG.style.display = 'none';

            // Show the red container
            carouselSliderR.style.display = 'flex';
            carouselContainerR.style.display = 'flow';

            // Fade in the red container
            setTimeout(function() {
                carouselSliderR.style.opacity = 1; // Fade in effect
            }, 10); // Adding a small delay for smooth transition
        }, 300);
    }
}

function openSliderYellow() {
    if (carouselSliderR.style.display !== 'none' || carouselSliderB.style.display !== 'none' || carouselSliderG.style.display !== 'none' ){
        carouselSliderR.style.opacity = 0;
        carouselSliderB.style.opacity = 0;
        carouselSliderG.style.opacity = 0;

        setTimeout(function() {
            carouselSliderR.style.display = 'none';
            carouselContainerR.style.display = 'none';

            carouselSliderB.style.display = 'none';
            carouselContainerB.style.display = 'none';
            
            carouselSliderG.style.display = 'none';
            carouselContainerG.style.display = 'none';

            carouselSliderY.style.display = 'flex';
            carouselContainerY.style.display = 'flow';

            setTimeout(function() {
                carouselSliderY.style.opacity = 1; 
            }, 10);
        }, 300);
    }
}

function openSliderBlue() {
    if (carouselSliderR.style.display !== 'none' || carouselSliderY.style.display !== 'none' || carouselSliderG.style.display !== 'none' ){
        
        carouselSliderR.style.opacity = 0;
        carouselSliderY.style.opacity = 0;
        carouselSliderG.style.opacity = 0;

        setTimeout(function() {
            carouselSliderR.style.display = 'none';
            carouselContainerR.style.display = 'none';

            carouselSliderY.style.display = 'none';
            carouselContainerY.style.display = 'none';
            
            carouselSliderG.style.display = 'none';
            carouselContainerG.style.display = 'none';

            carouselSliderB.style.display = 'flex';
            carouselContainerB.style.display = 'flow';

            setTimeout(function() {
                carouselSliderB.style.opacity = 1; 
            }, 10);
        }, 300);
    }
}

function openSliderGreen() {
    if (carouselSliderR.style.display !== 'none' || carouselSliderY.style.display !== 'none' || carouselSliderB.style.display !== 'none' ){
        
        carouselSliderR.style.opacity = 0;
        carouselSliderY.style.opacity = 0;
        carouselSliderB.style.opacity = 0;

        setTimeout(function() {
            carouselSliderR.style.display = 'none';
            carouselContainerR.style.display = 'none';

            carouselSliderY.style.display = 'none';
            carouselContainerY.style.display = 'none';
            
            carouselSliderB.style.display = 'none';
            carouselContainerB.style.display = 'none';

            carouselSliderG.style.display = 'flex';
            carouselContainerG.style.display = 'flow';

            setTimeout(function() {
                carouselSliderG.style.opacity = 1; 
            }, 10);
        }, 300);
    }
}

