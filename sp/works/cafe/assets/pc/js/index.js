
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
      var $fade_speed, $interval;
      $interval = 5000;
      $fade_speed = 1000;
      $('#slide ul li:first').addClass('active').show();
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

