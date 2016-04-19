
/*!
 * index.js - サイト名（●●のスクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function() {
  (function($) {
    var $allCount, $box, $height, $htmlCount, $jadeCount, $jqueryCount, $list, $width, selectedClass, showFlag, topBtn, zoom;
    $('#sample').on('touchend', function() {
      console.log('hogehoge');
      return false;
    });
    if (smartphoneType[3] === "iphone") {
      console.log('index: iphone');
    } else {
      console.log('index: android');
    }
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
    $('label').on('click', function() {
      $('ul').slideToggle(300);
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

