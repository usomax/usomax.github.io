
/*!
 * index.js - tu3q - portfolio（メインスクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    var $allCount, $box, $height, $htmlCount, $jadeCount, $jqueryCount, $list, $width, selectedClass, showFlag, topBtn, zoom;
    $('h1').on('click', function() {
      $('.menu-trigger').toggleClass('active');
      $('ul').stop().slideToggle(300);
    });
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
    console.log($('.box').width());
    $(window).on('load resize', function() {
      $('.box .overlay').css({
        width: $('#section-contents').width()
      });
    });
    showFlag = false;
    topBtn = $('#page-top');
    topBtn.css('bottom', '-100px');
    topBtn.click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
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

