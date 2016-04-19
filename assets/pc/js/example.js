
/*!
 * example.js - サイト名（●●のスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function() {
  (function($) {
    if (browserType[1] === "ie8" || browserType[1] === "ie7") {

    } else {
      console.log('example: modern');
    }
    $LAB.script(PC_JS_DIR + 'lib/jquery.wHover.js').wait(function() {
      $('.wHover').wHover();
      return $('.oHover').on({
        mouseenter: function() {
          return $(this).stop().fadeTo('fast', .6);
        },
        mouseleave: function() {
          return $(this).stop().fadeTo('fast', 1);
        }
      });
    });
    $("header, main, footer").hide();
    $("#loader").delay(600).fadeOut(300, function() {
      return $("header, main, footer").fadeIn();
    });
  })(jQuery);

}).call(this);

