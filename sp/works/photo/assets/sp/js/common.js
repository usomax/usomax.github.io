
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
      return console.log('common: iphone');
    } else {
      return console.log('common: android');
    }
  })(jQuery);

}).call(this);

