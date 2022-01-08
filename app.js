import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


window.onload = function() {
    let target = document.querySelector('.loading');
    target.classList.add('loadend');
};

new ScrollObserver('.carrier__wrapper');
new ScrollObserver('.work__wrapper');
new ScrollObserver('.skill__wrapper');
new ScrollObserver('.about__wrapper');
new ScrollObserver('.contact__wrapper');