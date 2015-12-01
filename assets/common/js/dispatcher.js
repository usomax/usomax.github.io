
/*!
 * dispatcher.js - サイト名（●●のスクリプト）
 * 動作環境： Windows / Macintosh / iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function() {
  $LAB.script(COMMON_JS_DIR + 'lib/jquery-1.10.2.min.js').wait(function() {
    var pathname, pcorsp;
    pathname = location.pathname;
    if ($('.mobile').length) {
      pcorsp = SP_DIR;
    } else {
      pcorsp = PC_DIR;
      $LAB.script(PC_JS_DIR + 'lib/jquery.wHover.js').wait(function() {
        return $('.wHover').wHover();
      });
    }
    $.route = function() {
      $.each(arguments, function(index) {
        var func, path;
        path = this['path'];
        func = this['func'];
        path && func && pathname.match(path) && $(function() {
          func.apply(this);
        });
      });
    };
    $.route({
      path: /^(?!.*\/example\/).+$|^(?!.*\/example\/).+$/,
      func: function() {
        $LAB.script(pcorsp + 'js/index.js');
      }
    }, {
      path: /^(?=.*\/example\/)/,
      func: function() {
        $LAB.script(pcorsp + 'js/example.js');
      }
    }, {
      path: /^(?=.*\/example2\/)/,
      func: function() {
        $LAB.script(pcorsp + 'js/example2.js');
      }
    }, {
      path: /^(?=.*\/example3\/)/,
      func: function() {
        $LAB.script(pcorsp + 'js/example3.js');
      }
    });
  });

}).call(this);

