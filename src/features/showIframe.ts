export function toggleCsatIframe(show: boolean) {
    const csatIframe = document.getElementById('csat-iframe');
    //console.log(csatIframe);
    if (show) {
        csatIframe.style.display = 'block';
        csatIframe.focus();
    } else {
        csatIframe.style.display = 'none';
    }
}
  
window.addEventListener('message', function(event) {
    if (event.data === 'close-iframe') {
        toggleCsatIframe(false);
    }
});