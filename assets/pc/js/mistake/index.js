
/*!
 * index.js - 間違い探し（メインスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    var DIM_DELTA, DIM_FIRST, MAX_LEVEL, dim, gameStart, games, level, t1, t2;
    level = 0;
    games = [[PC_IMG_DIR + 'mistake/dummyDog.jpg', PC_IMG_DIR + 'mistake/dog.jpg'], [PC_IMG_DIR + 'mistake/dummyDog.jpg', PC_IMG_DIR + 'mistake/dog.jpg'], [PC_IMG_DIR + 'mistake/dummyDog.jpg', PC_IMG_DIR + 'mistake/dog.jpg']];
    MAX_LEVEL = games.length - 1;
    DIM_FIRST = 5;
    DIM_DELTA = 1;
    dim = DIM_FIRST;
    t1 = void 0;
    t2 = void 0;
    gameStart = function() {
      var cells, chars, dummy, i, offset, seikai;
      $('#cells').css('pointer-events', 'auto');
      var i;
      var i;
      dummy = games[level][0];
      seikai = games[level][1];
      if (level === 0) {
        $('#score').text('クリアタイム');
        t1 = (new Date).getTime();
      }
      cells = '';
      i = 1;
      while (i <= dim * dim) {
        cells += '<span id="s' + i + '"></span>';
        if (i % dim === 0) {
          cells += '<br />';
        }
        i++;
      }
      $('#cells').html(cells);
      chars = [];
      i = 0;
      while (i < dim * dim) {
        chars.push(dummy);
        i++;
      }
      offset = Math.floor(Math.random() * chars.length);
      chars.splice(offset, 1, seikai);
      i = 1;
      while (i <= chars.length) {
        $('#s' + i).css('opacity', '0');
        $('#s' + i).html('<img src="' + chars[i - 1] + '"/>');
        $('#s' + i).animate({
          opacity: 1
        }, 300);
        if (level === 0) {
          $('#cells span img').css('width', '13%');
        } else if (level === 1) {
          $('#cells span img').css('width', '11%');
          $('#gameReset').fadeIn();
        } else if (level === 2) {
          $('#cells span img').css('width', '9%');
        }
        $('#s' + i).click(function() {
          if ($(this).children('img').attr('src') === seikai) {
            $(this).children('img').css('border-color', '#0f0');
            level++;
            dim += DIM_DELTA;
            if (level > MAX_LEVEL) {
              $('#cells').css('pointer-events', 'none');
              t2 = (new Date).getTime();
              $('#score').text((t2 - t1) / 1000 + '秒!!');
              level = 0;
              dim = DIM_FIRST;
              $('#gameStart').text('もう一度探す！').fadeIn();
              return false;
            }
            gameStart();
          } else {
            $(this).children('img').css('border-color', '#f00');
          }
        });
        i++;
      }
    };
    $('#gameStart').click(function() {
      $(this).hide('20');
      $('#gameReset').fadeOut();
      gameStart();
    });
    return $('#gameReset').click(function() {
      $(this).fadeOut();
      if (level >= 1) {
        level = 0;
        dim = DIM_FIRST;
        gameStart();
        return false;
      }
    });
  })(jQuery);

}).call(this);

