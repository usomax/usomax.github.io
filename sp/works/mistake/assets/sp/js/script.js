
/*!
 * script.js - サイト名（●●のスクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */


/*!
 * isnt           は  !==
 * not            は  !
 * and            は  &&
 * or             は  ||
 * true, yes, on  は  true
 * false, no, off は  false
 * @, this        は  this
 */

(function() {
  (function($) {
    return $('#sample').on('click', function() {
      console.log('hogehoge');
      return false;
    });
  })(jQuery);

}).call(this);
