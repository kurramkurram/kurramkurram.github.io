import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px'
          }, 300);
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-50px'
          }, 300);
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  }
);

new ScrollObserver('.carrier__wrapper');
new ScrollObserver('.skill__wrapper');
new ScrollObserver('.about__wrapper');
new ScrollObserver('.contact__wrapper');