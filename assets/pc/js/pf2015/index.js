
/*!
 * index.js - ポートフォリオ2015（メインスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    var gauge01, gauge02, gauge03, rect;
    rect = function() {
      $('.popup').animate({
        bottom: '-=10px'
      }, 800).animate({
        bottom: '+=10px'
      }, 800);
      setTimeout((function() {
        rect();
      }), 1600);
    };
    $('#fullpage').fullpage({
      anchors: ['top', 'skill', 'history', 'work'],
      sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      navigation: false,
      menu: '#menu',
      css3: true,
      scrollingSpeed: 1000,
      afterLoad: function(anchorLink, index) {
        if (index === 2) {
          gauge01.update({
            arcFillInt: 7
          });
          gauge02.update({
            arcFillInt: 8
          });
          gauge03.update({
            arcFillInt: 7
          });
        }
      }
    });
    $('#moveTo').click(function(e) {
      e.preventDefault();
      $.fn.fullpage.moveTo('work', 3);
    });
    gauge01 = new FlexGauge({
      appendTo: '#example1',
      arcBgColorLight: 100,
      arcBgColorSat: 0,
      colorArcFg: '#00cda9',
      colorArcBg: '#cccccc',
      dialValue: true,
      dialLabel: '(X)HTML & CSS',
      arcStrokeFg: 23.49777222,
      arcStrokeBg: 23.49777222,
      dialUnit: '/10',
      dialUnitPosition: 'after',
      arcFillInt: 0,
      arcFillTotal: 10
    });
    gauge02 = new FlexGauge({
      appendTo: '#example2',
      arcBgColorLight: 100,
      arcBgColorSat: 0,
      colorArcFg: '#0073cd',
      colorArcBg: '#cccccc',
      dialValue: true,
      dialLabel: 'Design',
      arcStrokeFg: 23.49777222,
      arcStrokeBg: 23.49777222,
      dialUnit: '/10',
      dialUnitPosition: 'after',
      arcFillInt: 0,
      arcFillTotal: 10
    });
    gauge03 = new FlexGauge({
      appendTo: '#example3',
      arcBgColorLight: 185,
      arcBgColorSat: 0,
      colorArcFg: '#00cd15',
      colorArcBg: '#cccccc',
      dialValue: true,
      dialLabel: 'jQuery & javascript',
      arcStrokeFg: 23.49777222,
      arcStrokeBg: 23.49777222,
      dialUnit: '/10',
      dialUnitPosition: 'after',
      arcFillInt: 0,
      arcFillTotal: 10
    });
    return rect();
  })(jQuery);

}).call(this);

