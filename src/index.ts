import App from './app/App';
import { SurveyPage } from './pages/survey/index';
import './index.scss';
import '@img/HeartWhite.svg';
import '@img/Logo.svg';
import '@img/image.svg';
import '@img/icon.svg';
import '@img/arrow.svg';
import '@img/shine.svg'
import '@img/arrowRight.svg'
import '@img/giftArrow.svg'
import '@img/X.svg';
import '@img/Heart.svg';
import '@img/delete.svg';
import '@img/left.svg';
import '@img/right.svg';
import '@img/eye.svg';
import '@img/eye-x.svg';
import '@img/user.svg';
import '@img/HeartBroken.svg';
import '@img/LogReg.svg';


const root = document.querySelector('#root') as HTMLElement;
const forIframe = document.querySelector('#forIframe') as HTMLElement;

if (root && forIframe) {
    const app = new App(root, forIframe);
    await app.init();
} else {
    const csat = document.querySelector('#csat') as HTMLElement;
    if (csat) {
        new SurveyPage(csat);
    } else {
        console.error('Element with id "root" not found.');
        console.error('Element with id "csat" not found.');
    }
}