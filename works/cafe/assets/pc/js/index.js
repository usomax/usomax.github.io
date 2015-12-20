
/*!
 * index.js - サイト名（●●のスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function() {
  (function() {
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
      $('#slide ul li').css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'opacity': 0
      });
      $('#slide ul li:first').addClass('active').animate({opacity:1});
      setInterval((function() {
        var $active, $next;
        $active = $('#slide ul li.active');
        $next = $active.next('li').length ? $active.next('li') : $('#slide ul li:first');
        $active.fadeOut($fade_speed).removeClass('active');
        $next.fadeIn($fade_speed).addClass('active');
      }), $interval);
    });
  }).call(this);

}).call(this);

