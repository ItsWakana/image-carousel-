import './style.css';
import landscape1 from './assets/landscape1.jpg';
import landscape2 from './assets/landscape2.jpg';
import landscape3 from './assets/landscape3.jpg';

const container = document.querySelector('.main-container');
const buttons = document.querySelectorAll('.carousel-button');

const slides = [...document.querySelectorAll('.slide')];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        let currentSlideIndex;

        slides.forEach((slide, index) => {
            if (slide.dataset.visibility === 'true') {
                currentSlideIndex = index;
                slide.dataset.visibility === 'false';
            }
            slide.dataset.visibility = 'false';
        });

        let newSlideIndex = currentSlideIndex + offset;
        if (newSlideIndex < 0) newSlideIndex = slides.length-1;
        if (newSlideIndex > slides.length-1) newSlideIndex = 0;
        slides[newSlideIndex].dataset.visibility = 'true';
    });
});