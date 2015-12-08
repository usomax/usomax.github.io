
/*!
 * script.js - サイト名（●●のスクリプト）
 * 動作環境：Windows / Macintosh
 * 対応ブラウザ：GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */


/*!
 * isnt           は  !==
 * not            は  !
 * and            は  &&
 * or             は  ||
 * true, yes, on  は  true
 * false, no, off は  false
 * @, this        は  this
 */

(function() {
    var level = 0;
    var games = [
      ['dummyDog.jpg','dog.jpg'],
      ['dummyDog.jpg','dog.jpg'],
      ['dummyDog.jpg','dog.jpg']
    ];
    var MAX_LEVEL = games.length - 1;
    var DIM_FIRST = 5;
    var DIM_DELTA = 3;
    var dim = DIM_FIRST;
    var t1;
    var t2;



   function gameStart(){
      //$('#gameStart').hide("slow");
        var dummy = games[level][0];
        var seikai = games[level][1];

        if (level == 0) {
          $('#score').empty();
          t1 = new Date().getTime();
        }
        // dim x dim のspan要素を作って#cellsに突っ込む
        var cells = '';
        for (var i = 1; i <= dim * dim; i++) {
          cells += '<span id="s'+ i + '"></span>';
          if (i % dim==0) {
            cells += '<br />';
          }
        }
        $('#cells').html(cells)
        // dummy で埋められた配列を作る
        var chars = [];
        for (var i = 0; i < dim * dim; i++) {
          chars.push(dummy);
        }
        // 配列のうち一つをseikaiにする
        var offset = Math.floor(Math.random() * chars.length);
        chars.splice(offset, 1, seikai);

        // console.log(chars);

        // span要素にそれらの配列の値をはめこむ
        for (var i = 1; i <= chars.length; i++) {
          $('#s'+ i).html('<img src="'+ chars[i-1] +'"/>');
          //$('#s'+ i).text(chars[i - 1]);
          $('#s'+ i).click(function(){
              if ($(this).children('img').attr('src') == seikai) {
                level++;
                dim += DIM_DELTA;
                if (level > MAX_LEVEL) {
                  t2 = new Date().getTime();
                  $('#score').text('Your score is '+(t2-t1)/1000+'秒!!');
                  level = 0;
                  dim = DIM_FIRST;
                  return false;
                }
                $("#gameStart").show();
                gameStart();
              }
          });
        }
      }
    $("#gameStart").click(function(){
     gameStart();

    });
}).call(this);
