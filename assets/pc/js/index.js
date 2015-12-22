
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
  (function($) {
    var stopload;
    if (browserType[1] === "ie8" || browserType[1] === "ie7") {

    } else {
      console.log('index: modern');
    }
    $(function() {
      var h;
      h = $(window).height();
      $('#wrap').css('display', 'none');
      $('#loader-bg ,#loader').height(h).css('display', 'block');
    });
    $(window).load(function() {
      $('#loader-bg').delay(900).fadeOut(800);
      $('#loader').delay(600).fadeOut(300);
      $('#wrap').css('display', 'block');
    });
    $(function() {
      setTimeout('stopload()', 10000);
    });
    stopload = function() {};
    $('#wrap').css('display', 'block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  })(jQuery);

}).call(this);

