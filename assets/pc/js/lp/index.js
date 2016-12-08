
/*!
 * index.js - tu3q - portfolio（メインスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    var $allCount, $box, $boxSize, $height, $htmlCount, $jadeCount, $jqueryCount, $list, $width, selectedClass, showFlag, topBtn, zoom;
    $box = $('.box');
    $list = $('li');
    $height = $box.height();
    $width = $box.width();
    zoom = 1.5;
    selectedClass = '';
    $list.eq(0).addClass('active');
    $allCount = $('.all').length;
    $htmlCount = $('.html').length;
    $jadeCount = $('.jade').length;
    $jqueryCount = $('.jquery').length;
    $list.eq(0).append('(' + $allCount + ')');
    $list.eq(1).append('(' + $htmlCount + ')');
    $list.eq(2).append('(' + $jadeCount + ')');
    $list.eq(3).append('(' + $jqueryCount + ')');
    $boxSize = $('.box a').width();
    $('.overlay').width($boxSize);
    showFlag = false;
    topBtn = $('#page-top');
    topBtn.css('bottom', '-100px');
    showFlag = false;
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        if (showFlag === false) {
          showFlag = true;
          topBtn.stop().animate({
            'bottom': '20px'
          }, 200);
        }
      } else {
        if (showFlag) {
          showFlag = false;
          topBtn.stop().animate({
            'bottom': '-100px'
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
    $box.on({
      'mouseenter': function() {
        $(this).find('img').stop().animate({
          top: -$height / 3,
          left: -$width / 4,
          width: $width * zoom,
          height: $height * zoom
        });
        $(this).find('.overlay').stop().animate({
          opacity: 1
        });
      },
      'mouseleave': function() {
        $(this).find('img').stop().animate({
          top: 0,
          left: 0,
          width: $width,
          height: $height
        });
        $(this).find('.overlay').stop().animate({
          opacity: 0
        });
      }
    });
    $list.on('click', function() {
      selectedClass = $(this).attr('data-rel');
      $list.not('.' + selectedClass).removeClass('active');
      $(this).addClass('active');
      $box.addClass('active').fadeTo(100, 0);
      $box.not('.' + selectedClass).removeClass('active').fadeOut();
      setTimeout((function() {
        $('.' + selectedClass).fadeIn();
        $box.fadeTo(500, 1);
      }), 500);
    });
  })(jQuery);

}).call(this);

