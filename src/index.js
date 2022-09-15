import './style.css';
import landscape1 from './assets/landscape1.jpg';
import landscape2 from './assets/landscape2.jpg';
import landscape3 from './assets/landscape3.jpg';
import arrow from './assets/arrow.svg';

import { changeSlide, createCircles, specificSlide } from './utilities';

const container = document.querySelector('.main-container');
const buttons = document.querySelectorAll('[data-carousel-button]');
const slides = [...document.querySelectorAll('.slide')];

createCircles(container, slides);
const circles = [...document.querySelectorAll('.dot')];


circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {

        circles.forEach((circle) => {
            circle.dataset.selected = 'false';
        });
        circle.dataset.selected = 'true';
        specificSlide(slides, index);
    });
});
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        changeSlide(offset, slides, circles);
    });
});
setInterval(() => { changeSlide(1, slides, circles) }, 5000);

