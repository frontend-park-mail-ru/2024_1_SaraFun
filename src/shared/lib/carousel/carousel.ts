export function showImage(container: HTMLElement, index: number): void {
    const images = container.querySelectorAll('.image-section__img') as NodeListOf<HTMLElement>;
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

export function scrollLeft(container: HTMLElement): void {
    const images = container.querySelectorAll('.image-section__img') as NodeListOf<HTMLElement>;
    let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    container.setAttribute('data-current-index', currentIndex.toString());
    showImage(container, currentIndex);
}

export function scrollRight(container: HTMLElement): void {
    const images = container.querySelectorAll('.image-section__img') as NodeListOf<HTMLElement>;
    let currentIndex = parseInt(container.getAttribute('data-current-index')) || 0;
    currentIndex = (currentIndex + 1) % images.length; 
    container.setAttribute('data-current-index', currentIndex.toString());
    showImage(container, currentIndex);
}