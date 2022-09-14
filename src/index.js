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
                console.log(currentSlideIndex);
                slide.dataset.visibility === 'false';
            }
        });
        const newSlideIndex = currentSlideIndex + offset;
        console.log(newSlideIndex);
        slides[newSlideIndex].dataset.visibility = 'true';
    });
});

// slides.forEach(slide => {
//     slide.classList.remove('visible');
//     if (slide.dataset.visibility === 'true') {
//         slide.classList.add('visible');
//     }
// });

