
/*!
 * example.js - サイト名（●●のスクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function() {
  (function($) {
    if (smartphoneType[3] === "iphone") {
      console.log('example: iphone');
    } else {
      console.log('example: android');
    }
    $LAB.script(SP_JS_DIR + 'lib/jquery.wHover.js').wait(function() {
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
    return $("#loader").delay(600).fadeOut(300, function() {
      return $("header, main, footer").fadeIn();
    });
  })(jQuery);

}).call(this);

