
/*!
 * index.js - サイト名（●●のスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */

(function($) {

  //------------------------------------------------------
  // 初回ロード画面
  //------------------------------------------------------
  //$.event.add(window, 'load', function() {
    $('#loader').delay(1000).fadeOut(300, function() {
      $('#main').css({visibility:'visible'}).animate({opacity: 1});
    });
  //});

  //------------------------------------------------------
  // Ajax読み込み
  //------------------------------------------------------ 
  $.ajax({
    type: "GET",
    url: PC_JS_DIR + "favorite.js",
    dataType:"json",
    success: function(data) {

      //------------------------------------------------------
      // 昇順にソートして.leftに画像を書き込み
      //------------------------------------------------------

      var h = 0;
      data[0].article.sort(function(val1, val2) {
        return ( val1.head > val2.head ? 1 : -1);
      });
      for(j = 0; j < data[0].article.length; j++) {
        h++;
        $(".left").append("<a href='#'><img src="+ data[0].article[j].img + " class='obj',  width="+data[0].article[j].width+", height="+data[0].article[j].height+", alt='', data-img="+[h]+" ></a>");
      }

      //------------------------------------------------------
      // 降順にソートして.rightに画像を書き込み
      //------------------------------------------------------

      data[1].article.sort(function(val1, val2) {
        return ( val1.head < val2.head ? 1 : -1);
      });

      var listmax = data[1].article.length;
      for(j = 0; j < data[1].article.length; j++) {
        $(".right").append("<a href='#'><img src="+ data[1].article[j].img + " class='obj', width="+data[1].article[j].width+", height="+data[1].article[j].height+", alt='', data-img="+[listmax]+" ></a>");
        listmax--;
      }

      //------------------------------------------------------
      // 左画像クリック時、モーダルを出現させる
      //------------------------------------------------------
      $('.left').find("img").on('click',function() {
        $("#inbox").find("#modal").remove();
        $("#box").fadeIn();        
        var obj = $(this).data('img') - 1; // 左画像8枚
        var listMax = data[0].article.length - 2; // 6
        var listMin = data[0].article.length - 1; // 7
        
        //------------------------------------------------------
        // モーダル切替時画像を書き換える処理の関数
        //------------------------------------------------------

        modalChange = function() {
          $("#inbox").find("#modal").remove();
          $("#box").find('#inbox').append("<div id='modal'><img src="+ data[0].article[obj].img +">" + "<p>"+ data[0].article[obj].head + "&#47;" + data[0].article.length + "</p>" +  "</div>");
        }
        
        modalChange();       
        
        //------------------------------------------------------
        // 昇順ソート
        //------------------------------------------------------
        function ascend(){
          if(obj < 0 || obj > listMax) {
            obj = 0;
          } else {
            obj++;
          }
        }
        //------------------------------------------------------
        // 降順ソート
        //------------------------------------------------------
        function descend(){
          if(obj < 1 || obj > listMin) {
            obj = listMin;
          } else {
            obj--;
          }  
        }
        
        //------------------------------------------------------
        // モーダル内の右矢印クリック時の処理
        //------------------------------------------------------

        $(".rightarrow").on('click', function() {
          ascend();
          modalChange();
        });
       
        //------------------------------------------------------
        // モーダル内の左矢印クリック時の処理
        //------------------------------------------------------

        $(".leftarrow").on('click', function() {
          descend();
          modalChange();
        });

        //------------------------------------------------------
        // モーダル内の✕印クリック時の処理
        //------------------------------------------------------

        $(".close").on('click', function() {
          $("html").css('overflow-x' ,'auto');
          $("#box").fadeOut();
        });

        //------------------------------------------------------
        // モーダル出現中のキー入力による処理
        //------------------------------------------------------

        $('html').keyup(function(e) {
          var key = 'which' in e ? e.which : e.keyCode;
          switch(key) {
            case 39: // Key[→]
              ascend();
              modalChange();
              break;
            case 37: // Key[←]
              descend();
              modalChange();
              break;
            case 27:
              $("html").css('overflow-x' ,'auto');
              $("#box").fadeOut();
              break;
          }
        });
      });
      
      //------------------------------------------------------
      // 右画像クリック時、モーダルを出現させる
      //------------------------------------------------------      
      $('.right').find("img").on('click',function() {
        $("#inbox").find("#modal").remove();
        $("#box").fadeIn();        
        var obj = $(this).data('img') - 1; // 右画像8枚
        var listMax = data[1].article.length - 2; // 6
        var listMin = data[1].article.length - 1; // 7
        
        //------------------------------------------------------
        // モーダル切替時画像を書き換える処理の関数
        //------------------------------------------------------

        modalChange = function() {
          $("#inbox").find("#modal").remove();
          $("#box").find('#inbox').append("<div id='modal'><img src="+ data[0].article[obj].img +">" + "<p>"+ data[0].article[obj].head + "&#47;" + data[0].article.length + "</p>" + "<p>"+ "</div>");
        }
        
        modalChange();       
        
        //------------------------------------------------------
        // 昇順ソート
        //------------------------------------------------------
        function ascend(){
          if(obj < 0 || obj > listMax) {
            obj = 0;
          } else {
            obj++;
          }
        }
        //------------------------------------------------------
        // 降順ソート
        //------------------------------------------------------
        function descend(){
          if(obj < 1 || obj > listMin) {
            obj = listMin;
          } else {
            obj--;
          }  
        }
        
        //------------------------------------------------------
        // モーダル内の右矢印クリック時の処理
        //------------------------------------------------------

        $(".rightarrow").on('click', function() {
          descend();
          modalChange();
        });
       
        //------------------------------------------------------
        // モーダル内の左矢印クリック時の処理
        //------------------------------------------------------

        $(".leftarrow").on('click', function() {
          ascend();
          modalChange();
        });

        //------------------------------------------------------
        // モーダル内の✕印クリック時の処理
        //------------------------------------------------------

        $(".close").on('click', function() {

          $("#box").fadeOut();
        });

        //------------------------------------------------------
        // モーダル出現中のキー入力による処理
        //------------------------------------------------------

        $('html').keyup(function(e) {
          var key = 'which' in e ? e.which : e.keyCode;
          switch(key) {
            case 39: // Key[→]
              descend();
              modalChange();
              break;
            case 37: // Key[←]
              ascend();
              modalChange();
              break;
            case 27:
              $("#box").fadeOut();
              break;
          }
        });
      });
      circle();
    }
  });

  function circle() {

    //------------------------------------------------------
    // 共通変数
    //------------------------------------------------------

    $win = $(window);
    $doc = $(document);

    $stageL = $('#stage > .left');
    $stageR = $('#stage > .right');
    $stageItemL = $('#stage > .left > a');
    $stageItemR = $('#stage > .right > a');
    $stageImg = $('#stage > .left > a > img');


    //------------------------------------------------------
    // スクロールイベント
    //------------------------------------------------------

    /* スクロール禁止用 */
    noScroll = function() {
      var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
      $(document).on(scroll_event,function(e){e.preventDefault();});
    }

    /* スクロール復活用 */
    returnScroll = function() {
      var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
      $(document).off(scroll_event);
    }

    scrollEvent = function() {

      var $wh = $win.height();
      var $ww = $win.width();
      var $dh = $doc.height();

      //------------------------------------------------------
      // 最小幅480pxではコンテンツを動かさない
      //------------------------------------------------------
      if ($ww > 480) {

        //------------------------------------------------------
        // ドキュメントの高さを取得しスクロールをループさせる
        //------------------------------------------------------

        if ($dh < $win.scrollTop() + $wh + 1) {
          $win.scrollTop(3);
        } else if ($win.scrollTop() == 0) {
          $win.scrollTop($dh - $wh - 3);
        }

        //------------------------------------------------------
        // 要素の配置の条件定義
        //------------------------------------------------------

        var $windowTop = $win.scrollTop(); // ウィンドウのトップ値
        var $itemList = $stageImg.length; // 要素数
        var increase = Math.PI * 2 / $itemList; // ２πと要素数を割って円周率を算出
        var logger = (increase * $itemList) / ($doc.height() - $wh); // 高さ取得
        var angle = $windowTop * logger; // スクロールトップと高さを割り出す
        var $itemSize = $stageImg.width(); // 要素のサイズ
        var itemSizeDiff = $itemSize * 1.2; // 要素の差分

        //------------------------------------------------------
        // リスト要素をループで円形に配置
        //------------------------------------------------------

        for (var i = 0; i < $itemList; i++) {
          /* 左の円 */
          leftX = $ww / 3 * Math.cos(angle) - itemSizeDiff;
          leftY = $wh * Math.sin(angle);
          /* 右の円 */
          rightX = -leftX + $ww - $itemSize;
          rightY = $wh * Math.sin(angle);
          /* 座標を動かす要素 */
          $stageItemL.eq(i).css({ left: leftX, top: leftY });
          $stageItemR.eq(i).css({ left: rightX, top: rightY });
          /* 回転させる */
          angle += increase;
        }
      }

    }

    //------------------------------------------------------
    // スクロールイベント呼び出し
    //------------------------------------------------------

    scrollEvent();
    $(window).on('scroll resize', function() { scrollEvent(); });

  }

  //------------------------------------------------------
  // Ajaxで外部コンテンツ要素の取得
  //------------------------------------------------------

  var contents = '#section-ajax .content';
  var targetContents = '#section-contents';
  var messages = 'ページの読み込みに失敗しました。';

  $.ajaxSetup({ cache: false }); // IE対策で$.ajaxを呼び出す前にキャッシュ無効化
  var Loader = {
    page: function(url) {
      var d = $.Deferred();
      $.ajax({
        url: url, //+ '.html',
        cache : false,
        type : 'GET',
        dataType : 'html',
        success: d.resolve,
        error: d.reject
      }).done(function(url) {
        $(contents).html($(url).filter(targetContents)[0].innerHTML);
      }).fail(function(url) {
        alert(messages);
      });
      return d.promise();
    }
  };

  //------------------------------------------------------
  // クリックイベント
  //------------------------------------------------------

  var delay = 700;
  var speed = 1500;

  //------------------------------------------------------
  // タイトルロゴクリック時の処理
  //------------------------------------------------------

  $('#logo').on('click', function() {
    noScroll();
    $(this).css('pointer-events', 'none');
    $('html,body').animate({scrollTop: $win.scrollTop(3)}, 0);
    $("#stage").delay(delay).fadeOut(speed);
    $('html, body').delay(delay).animate({scrollTop: 0}, speed, function() {
      $win.off('load scroll resize');
    });
    $(this).animate({top: "+=45px"}, 700).animate({top: 100},speed, 'easeOutBounce', function() {
      /* 更新 */
      Loader.page('/works/photo/lolis/');
      $("#section-ajax").delay(delay).fadeIn(delay, function() {
        $('.logo').removeClass('hide');
        $('.logo').css('pointer-events','auto');
        $('#logo').addClass('hide');
        $('.content img').each(function(i) {
          $(this).delay(100 * i).animate({opacity: 1},speed);
        });
        returnScroll();
      });
    });
    return false;
  });

  $('.logo').on('click', function() {
    noScroll();
    $('html, body').animate({scrollTop: 0}, 0, function() {
      $('.logo').addClass('hide');
      $('#logo').removeClass('hide');
      $("#section-ajax").fadeOut(800, function() {
        $('#logo').animate({top: '50%'},speed, 'easeOutBack', function() {
          $("#stage").fadeIn(speed, function(){
            $('#logo').css('pointer-events', 'auto');
            $(window).on('scroll resize', function() { scrollEvent(); });
            returnScroll();
          });
        });
      });
    });
    return false;
  });

  //------------------------------------------------------
  // モーダル処理
  //------------------------------------------------------

  $('#box').on('click', function(){
    $(this).fadeOut();
  })

  $('#inbox').on('click', function(e){
    event.stopPropagation();
  })

})(jQuery);