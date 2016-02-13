
/*!
 * index.js - サイト名（●●のスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function() {
  var $box, $height, $width, zoom;

  (function($) {
    if (browserType[1] === "ie8" || browserType[1] === "ie7") {

    } else {
      return console.log('index: modern');
    }
  }, $box = $(".box"), $height = $box.height(), $width = $box.width(), zoom = 1.5, $box.on({
    mouseenter: function() {
      $(this).find("img").stop().animate({
        top: -$height / 3,
        left: -$width / 3,
        width: $width * zoom,
        height: $height * zoom
      });
      return $(this).find(".overlay").stop().animate({
        opacity: 1
      });
    },
    mouseleave: function() {
      $(this).find("img").stop().animate({
        top: 0,
        left: 0,
        width: $width,
        height: $height
      });
      return $(this).find(".overlay").stop().animate({
        opacity: 0
      });
    }

    /*$("li").on
      mouseenter: ->
        $(this).addClass "mOver"
      mouseleave: ->
        $(this).removeClass "mOver"
     */
  }))(jQuery);

}).call(this);

