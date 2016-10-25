
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
      var i;
      var i;
      var cells, chars, dummy, i, offset, seikai;
      dummy = games[level][0];
      seikai = games[level][1];
      if (level === 0) {
        $('#score').empty();
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
        $('#s' + i).html('<img src="' + chars[i - 1] + '"/>');
        $('#s' + i).click(function() {
          if ($(this).children('img').attr('src') === seikai) {
            level++;
            dim += DIM_DELTA;
            if (level > MAX_LEVEL) {
              t2 = (new Date).getTime();
              $('#score').text('Your score is ' + (t2 - t1) / 1000 + '秒!!');
              level = 0;
              dim = DIM_FIRST;
              return false;
            }
            $('#gameStart').show();
            gameStart();
          }
        });
        i++;
      }
    };
    $('#gameStart').click(function() {
      $(this).hide('slow');
      gameStart();
    });
    return $('#gameReset').click(function() {
      if (level >= 1) {
        level = 0;
        dim = DIM_FIRST;
        gameStart();
        return false;
      }
    });
  })(jQuery);

}).call(this);

