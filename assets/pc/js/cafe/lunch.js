
/*!
 * index.js - カフェゆるらぎ（メインスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    return $('.js-pageTop').click(function() {
      $('body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  })(jQuery);

}).call(this);

