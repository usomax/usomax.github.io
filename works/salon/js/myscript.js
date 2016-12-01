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
    $('.slides').slick({
      centerMode: true,
      dots: true,
      centerPadding: '60px',
      slidesToShow: 1,
      variableWidth: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/*
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
*/


  });