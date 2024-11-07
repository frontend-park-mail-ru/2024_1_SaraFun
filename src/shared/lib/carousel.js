export function showImage(container, index) {
    const images = container.querySelectorAll('.image-section__img');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

export function scrollLeft(container) {
    const images = container.querySelectorAll('.image-section__img');
    let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    container.setAttribute('data-current-index', currentIndex);
    this.showImage(container, currentIndex);
}

export function scrollRight(container) {
    const images = container.querySelectorAll('.image-section__img');
    let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex + 1) % images.length; 
    container.setAttribute('data-current-index', currentIndex);
    this.showImage(container, currentIndex);
}