import './style.css';
import landscape1 from './assets/landscape1.jpg';
import landscape2 from './assets/landscape2.jpg';
import landscape3 from './assets/landscape3.jpg';

const container = document.querySelector('.main-container');
const next = document.querySelector('.next');
const previous = document.querySelector('previous');

// function generateImage(imageSource) {
//     const slide = document.createElement('div');
//     slide.classList.add('slide');

//     const img = document.createElement('img');
//     img.src = imageSource;

//     slide.appendChild(img);

//     return slide; 
// }

// container.appendChild(generateImage(landscape2));
// container.appendChild(generateImage(landscape1));

const slides = [...document.querySelectorAll('.slide')];

slides.forEach(slide => {
    slide.classList.remove('visible');
    if (slide.dataset.visibility === 'true') {
        slide.classList.add('visible');
    }
});

next.addEventListener('click', () => {
    slides.forEach(slide => {
        
    });
});

function clearChildElements(element) {

    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}