export function changeSlide(offset, imageSlides, circles) {

    let currentSlideIndex;

    imageSlides.forEach((slide, index) => {
        if (slide.dataset.visibility === 'true') {
            currentSlideIndex = index;
            slide.dataset.visibility === 'false';
        }
        slide.dataset.visibility = 'false';
        circles[index].dataset.selected = 'false';
    });

    let newSlideIndex = currentSlideIndex + offset;
    if (newSlideIndex < 0) newSlideIndex = imageSlides.length-1;
    if (newSlideIndex > imageSlides.length-1) newSlideIndex = 0;
    imageSlides[newSlideIndex].dataset.visibility = 'true';
    circles[newSlideIndex].dataset.selected = 'true';
}

export function specificSlide(imageSlides, i) {
    imageSlides.forEach(slide => {
        slide.dataset.visibility = 'false';
    });
    let newSlideIndex = i;
    imageSlides[i].dataset.visibility = 'true';
}