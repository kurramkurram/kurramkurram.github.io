jQuery(function() {
    var appear = false;
    var pagetop = $('#page_top');
    var footer = $('.footer__wrapper');
    var pagetopDef = $('.page-top__default');
    var pagetopFooter = $('.page-top__footer');  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px'
          }, 300);
        }
        
        if (is_in_footer(footer)) {
          pagetopDef.addClass('in__footer');
          pagetopFooter.addClass('in__footer');
        } else {
          pagetopDef.removeClass('in__footer');
          pagetopFooter.removeClass('in__footer');
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

function is_in_footer(footer) {
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();

  var footerTop = footer.offset().top;

  return (scrollBottom - 74) > footerTop;
}