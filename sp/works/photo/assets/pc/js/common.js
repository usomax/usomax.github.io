
/*!
 * common.js - サイト名（●●のスクリプト）
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
      $LAB.script(COMMON_JS_DIR + 'lib/selectivizr.min.js');
    } else {
      console.log('common: modern');
    }
    return $LAB.script(PC_JS_DIR + 'lib/jquery.wHover.js').wait(function() {
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
  })(jQuery);

}).call(this);

