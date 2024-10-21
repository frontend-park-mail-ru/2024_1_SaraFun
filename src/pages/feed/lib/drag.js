export function drag(event) {
    if (!isDragging) {
        return;
    }

    currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    currentY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;

    var deltaX = currentX - startX;
    var deltaY = currentY - startY;

    tinderContainer.classList.toggle('tinder_love', deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', deltaX < 0);

    var xMulti = deltaX * 0.03;
    var yMulti = deltaY / 80;
    var rotate = xMulti * yMulti;

    el.style.transform = 'translate(' + (initialX + deltaX) + 'px, ' + (initialY + deltaY) + 'px) rotate(' + rotate + 'deg)';
}