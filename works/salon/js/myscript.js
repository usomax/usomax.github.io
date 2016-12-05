$(function(){
  showFlag = false;
    topBtn = $('#page-top');
    topBtn.css('opacity', '0');
    showFlag = false;
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        if (showFlag === false) {
          showFlag = true;
          topBtn.stop().animate({
            'opacity': '1'
          }, 200);
        }
      } else {
        if (showFlag) {
          showFlag = false;
          topBtn.stop().animate({
            'opacity': '0'
          }, 200);
        }
      }
    });
    topBtn.click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });