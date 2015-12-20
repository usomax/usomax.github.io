
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
    var SOURCE_DIR, pathname;
    if ($('.mobile').length) {
      SOURCE_DIR = SP_JS_DIR;
    } else {
      SOURCE_DIR = PC_JS_DIR;
    }
    pathname = location.pathname;
    $.route = function() {
      $.each(arguments, function(index) {
        var func, path;
        path = this['path'];
        func = this['func'];
        path && func && pathname.match(path) && pathname.match('/')(!$(function() {
          $LAB.script(SOURCE_DIR + 'common.js').wait(function() {
            return func.apply(this);
          });
        }));
        path && func && pathname.match('/') && $(function() {
          $LAB.script(SOURCE_DIR + 'common.js').wait(function() {
            return $LAB.script(SOURCE_DIR + 'index.js');
          });
        });
      });
    };
    return $.route({
      path: /^(?=.*\/example\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'example.js');
      }
    }, {
      path: /^(?=.*\/example2\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'example2.js');
      }
    }, {
      path: /^(?=.*\/example3\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'example3.js');
      }
    }, {
      path: /^(?=.*\/example4\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'example4.js');
      }
    }, {
      path: /^(?=.*\/example5\/)/,
      func: function() {
        $LAB.script(SOURCE_DIR + 'example5.js');
      }
    });
  });

}).call(this);

