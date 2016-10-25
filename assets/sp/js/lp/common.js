
/*!
 * common.js - tu3q - portfolio（共通スクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    $("header, main, footer").hide();
    return $("#loader").delay(600).fadeOut(300, function() {
      $("header, main, footer").fadeIn();
    });
  })(jQuery);

}).call(this);

