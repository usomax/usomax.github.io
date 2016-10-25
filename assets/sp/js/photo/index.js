
/*!
 * index.js - LG G4 - Photo Gallery（メインスクリプト）
 * 動作環境： iPad / iPhone / Android
 * 対応ブラウザ： 標準ブラウザ / GoogleChrome
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    var Loader, circle, contents, delay, messages, speed, targetContents;
    $('#loader').delay(1000).fadeOut(300, function() {
      $('#main').css({
        visibility: 'visible'
      }).animate({
        opacity: 1
      });
    });
    circle = function() {
      var $stageImg, $stageItemL, $stageItemR, $stageL, $stageR;
      window.$win = $(window);
      window.$doc = $(document);
      $stageL = $('#stage > .left');
      $stageR = $('#stage > .right');
      $stageItemL = $('#stage > .left > a');
      $stageItemR = $('#stage > .right > a');
      $stageImg = $('#stage > .left > a > img');

      /* スクロール禁止用 */
      window.noScroll = function() {
        var scroll_event;
        scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
        $(document).on(scroll_event, function(e) {
          e.preventDefault();
        });
      };

      /* スクロール復活用 */
      window.returnScroll = function() {
        var scroll_event;
        scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
        $(document).off(scroll_event);
      };
      window.scrollEvent = function() {
        var $dh, $itemList, $itemSize, $wh, $windowTop, $ww, angle, i, increase, itemSizeDiff, leftX, leftY, logger, rightX, rightY;
        $wh = $win.height();
        $ww = $win.width();
        $dh = $doc.height();
        if ($dh < $win.scrollTop() + $wh + 1) {
          $win.scrollTop(3);
        } else if ($win.scrollTop() === 0) {
          $win.scrollTop($dh - $wh - 3);
        }
        $windowTop = $win.scrollTop();
        $itemList = $stageImg.length;
        increase = Math.PI * 2 / $itemList;
        logger = increase * $itemList / ($doc.height() - $wh);
        angle = $windowTop * logger;
        $itemSize = $stageImg.width();
        itemSizeDiff = $itemSize * 1.1;
        i = 0;
        while (i < $itemList) {

          /* 左の円 */
          leftX = $ww / 3 * Math.cos(angle) - itemSizeDiff;
          leftY = $wh * Math.sin(angle);

          /* 右の円 */
          rightX = -leftX + $ww - $itemSize;
          rightY = $wh * Math.sin(angle);

          /* 座標を動かす要素 */
          $stageItemL.eq(i).css({
            '-webkit-transform': 'translate3d(' + leftX + 'px,' + leftY + 'px,0)'
          });
          $stageItemR.eq(i).css({
            '-webkit-transform': 'translate3d(' + rightX + 'px,' + rightY + 'px,0)'

            /* 回転させる */
          });
          angle += increase;
          i++;
        }
      };
      scrollEvent();
      $(window).on('scroll resize', function() {
        scrollEvent();
      });
    };
    $.ajax({
      type: 'GET',
      url: '/assets/sp/js/photo/favorite.js',
      dataType: 'json',
      success: function(data) {
        var h, j, listmax;
        h = 0;
        data[0].article.sort(function(val1, val2) {
          if (val1.head > val2.head) {
            return 1;
          } else {
            return -1;
          }
        });
        j = 0;
        while (j < data[0].article.length) {
          h++;
          $('.left').append('<a href=\'#\'><img src=' + data[0].article[j].img + ' class=\'obj\',  width=' + data[0].article[j].width + ', height=' + data[0].article[j].height + ', alt=\'\', data-img=' + [h] + ' ></a>');
          j++;
        }
        data[1].article.sort(function(val1, val2) {
          if (val1.head < val2.head) {
            return 1;
          } else {
            return -1;
          }
        });
        listmax = data[1].article.length;
        j = 0;
        while (j < data[1].article.length) {
          $('.right').append('<a href=\'#\'><img src=' + data[1].article[j].img + ' class=\'obj\', width=' + data[1].article[j].width + ', height=' + data[1].article[j].height + ', alt=\'\', data-img=' + [listmax] + ' ></a>');
          listmax--;
          j++;
        }
        $('.left').find('img').on('click', function() {
          var ascend, descend, listMax, listMin, modalChange, obj;
          $('#inbox').find('#modal').remove();
          $('#box').fadeIn();
          obj = $(this).data('img') - 1;
          listMax = data[0].article.length - 2;
          listMin = data[0].article.length - 1;
          ascend = function() {
            if (obj < 0 || obj > listMax) {
              obj = 0;
            } else {
              obj++;
            }
          };
          descend = function() {
            if (obj < 1 || obj > listMin) {
              obj = listMin;
            } else {
              obj--;
            }
          };
          modalChange = function() {
            $('#inbox').find('#modal').remove();
            $('#box').find('#inbox').append('<div id=\'modal\'><img src=' + data[0].article[obj].img + '>' + '<p>' + data[0].article[obj].head + '&#47;' + data[0].article.length + '</p>' + '</div>');
          };
          modalChange();
          $('.rightarrow').on('click', function() {
            ascend();
            modalChange();
          });
          $('.leftarrow').on('click', function() {
            descend();
            modalChange();
          });
          $('.close').on('click', function() {
            $('html').css('overflow-x', 'auto');
            $('#box').fadeOut();
          });
          $('html').keyup(function(e) {
            var key;
            key = 'which' in e ? e.which : e.keyCode;
            switch (key) {
              case 39:
                ascend();
                modalChange();
                break;
              case 37:
                descend();
                modalChange();
                break;
              case 27:
                $('html').css('overflow-x', 'auto');
                $('#box').fadeOut();
            }
          });
        });
        $('.right').find('img').on('click', function() {
          var ascend, descend, listMax, listMin, modalChange, obj;
          $('#inbox').find('#modal').remove();
          $('#box').fadeIn();
          obj = $(this).data('img') - 1;
          listMax = data[1].article.length - 2;
          listMin = data[1].article.length - 1;
          ascend = function() {
            if (obj < 0 || obj > listMax) {
              obj = 0;
            } else {
              obj++;
            }
          };
          descend = function() {
            if (obj < 1 || obj > listMin) {
              obj = listMin;
            } else {
              obj--;
            }
          };
          modalChange = function() {
            $('#inbox').find('#modal').remove();
            $('#box').find('#inbox').append('<div id=\'modal\'><img src=' + data[0].article[obj].img + '>' + '<p>' + data[0].article[obj].head + '&#47;' + data[0].article.length + '</p>' + '<p>' + '</div>');
          };
          modalChange();
          $('.rightarrow').on('click', function() {
            descend();
            modalChange();
          });
          $('.leftarrow').on('click', function() {
            ascend();
            modalChange();
          });
          $('.close').on('click', function() {
            $('#box').fadeOut();
          });
          $('html').keyup(function(e) {
            var key;
            key = 'which' in e ? e.which : e.keyCode;
            switch (key) {
              case 39:
                descend();
                modalChange();
                break;
              case 37:
                ascend();
                modalChange();
                break;
              case 27:
                $('#box').fadeOut();
            }
          });
        });
        circle();
      }
    });
    contents = '#section-ajax .content';
    targetContents = '#section-contents';
    messages = 'ページの読み込みに失敗しました。';
    $.ajaxSetup({
      cache: false
    });
    Loader = {
      page: function(url) {
        var d;
        d = $.Deferred();
        $.ajax({
          url: url,
          cache: false,
          type: 'GET',
          dataType: 'html',
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
    delay = 700;
    speed = 1500;
    $('#logo').on('click', function() {
      noScroll();
      $(this).css('pointer-events', 'none');
      $('html,body').animate({
        scrollTop: $win.scrollTop(3)
      }, 0);
      $('#stage').delay(delay).fadeOut(speed);
      $('html, body').delay(delay).animate({
        scrollTop: 0
      }, speed, function() {
        $win.off('load scroll resize');
      });
      $(this).animate({
        top: '+=45px'
      }, 700).animate({
        top: '50'
      }, speed, 'easeOutBounce', function() {

        /* 更新 */
        Loader.page('/works/photo/gallery/');
        $('#section-ajax').delay(delay).fadeIn(delay, function() {
          $('.logo').removeClass('hide');
          $('.logo').css('pointer-events', 'auto');
          $('#logo').addClass('hide');
          $('.content img').each(function(i) {
            $(this).delay(100 * i).animate({
              opacity: 1
            }, speed);
          });
          returnScroll();
        });
      });
      return false;
    });
    $('.logo').on('click', function() {
      noScroll();
      $('html, body').animate({
        scrollTop: 0
      }, 0, function() {
        $('.logo').addClass('hide');
        $('#logo').removeClass('hide');
        $('#section-ajax').fadeOut(800, function() {
          $('#logo').animate({
            top: '50%'
          }, speed, 'easeOutBack', function() {
            $('#stage').fadeIn(speed, function() {
              $('#logo').css('pointer-events', 'auto');
              $(window).on('scroll resize', function() {
                scrollEvent();
              });
              returnScroll();
            });
          });
        });
      });
      return false;
    });
    $('#box').on('click', function() {
      $(this).fadeOut();
    });
    return $('#inbox').on('click', function(e) {
      event.stopPropagation();
    });
  })(jQuery);

}).call(this);

