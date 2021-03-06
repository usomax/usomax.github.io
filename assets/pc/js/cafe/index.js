
/*!
 * index.js - カフェゆるらぎ（メインスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    $('.js-pageTop').click(function() {
      $('body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
    if ($('body.index')) {
      $('#slide ul li').addClass('src', "./images/img_icatch1.jpg").show();
      $('#slide ul li').addClass('src', "./images/img_icatch2.png").show();
      $('#slide ul li').addClass('src', "./images/img_icatch3.png").show();
      $('#slide ul li').addClass('src', "./images/img_icatch4.png").show();
      $('#slide ul li').addClass('src', "./images/img_icatch5.png").show();
      $(function() {
        var $fade_speed, $height, $interval, $width;
        $width = 780;
        $height = 250;
        $interval = 5000;
        $fade_speed = 1000;
        $('#slide ul li').css({
          'position': 'relative',
          'overflow': 'hidden',
          'width': $width,
          'height': $height
        });
        $('#slide ul li').hide().css({
          'position': 'absolute',
          'top': 0,
          'left': 0
        });
        $('#slide ul li:first').addClass('active').show();
        setInterval((function() {
          var $active, $next;
          $active = $('#slide ul li.active');
          $next = $active.next('li').length ? $active.next('li') : $('#slide ul li:first');
          $active.fadeOut($fade_speed).removeClass('active');
          $next.fadeIn($fade_speed).addClass('active');
        }), $interval);
      });
    }
  })(jQuery);

}).call(this);

