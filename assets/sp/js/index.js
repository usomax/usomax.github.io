
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
    $('#sample').on('touchend', function() {
      console.log('hogehoge');
      return false;
    });
    if (smartphoneType[3] === "iphone") {
      return console.log('index: iphone');
    } else {
      return console.log('index: android');
    }
  })(jQuery);

}).call(this);

