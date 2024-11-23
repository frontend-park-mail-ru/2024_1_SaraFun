export function toggleCsatIframe(show: boolean) {
    const csatIframe = document.getElementById('csat-iframe') as HTMLIFrameElement;
    const userCookies = document.cookie;

    csatIframe.contentWindow.postMessage(
        {
            msg: 'set-cookies',
            cookies: userCookies
        },
        '*'
    );
    
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

    if (event.data.msg === 'set-cookies') {
        const cookies = event.data.cookies;
        const cookiesArray = cookies.split('; ');
        cookiesArray.forEach((cookie: string) => {
          document.cookie = cookie;
        });
        console.log('Cookies set in iframe:', document.cookie);
    }
});