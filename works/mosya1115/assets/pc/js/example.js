
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
    $('#sample').on('click', function() {
      console.log('hogehoge');
      return false;
    });
    if (browserType[1] === "ie8" || browserType[1] === "ie7") {
      return alert('oldIE');
    } else {
      return console.log('modern');
    }
  })(jQuery);

}).call(this);

