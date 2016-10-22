
/*!
 * common.js - サイト名（●●のスクリプト）
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
      console.log('common: iphone');
    } else {
      console.log('common: android');
    }
    $("header, main, footer").hide();
    $("#loader").delay(600).fadeOut(300, function() {
      return $("header, main, footer").fadeIn();
    });
  })(jQuery);

}).call(this);

