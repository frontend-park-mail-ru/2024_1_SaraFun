export function startDrag(event) {
    isDragging = true;

    startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
    startY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;

    if (el.style.transform && el.style.transform.includes('translate')) {
        var transformValues = el.style.transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
        if (transformValues) {
            initialX = parseFloat(transformValues[1]);
            initialY = parseFloat(transformValues[2]);
        } else {
            initialX = 0;
            initialY = 0;
        }
    } else {
        initialX = 0;
        initialY = 0;
    }
    el.classList.add('moving');
}