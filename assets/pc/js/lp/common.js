
/*!
 * common.js - tu3q - portfolio（共通スクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
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

