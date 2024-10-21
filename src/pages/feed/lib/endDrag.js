export function endDrag() {
    if (!isDragging) {
        return;
    }

    isDragging = false;

    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var deltaX = currentX - startX;
    var deltaY = currentY - startY;
    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(deltaX) < 80;

    el.classList.toggle('removed', !keep);

    if (keep) {
        el.style.transform = '';
    } else {
        var toX = deltaX > 0 ? moveOutWidth : -moveOutWidth;
        var toY = deltaY;
        var xMulti = deltaX * 0.03;
        var yMulti = deltaY / 80;
        var rotate = xMulti * yMulti;

        el.style.transform = 'translate(' + toX + 'px, ' + toY + 'px) rotate(' + rotate + 'deg)';
        initCards();
    }
}