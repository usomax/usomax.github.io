
/*!
 * index.js - LG G4 - Photo Gallery（メインスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author : Y.takaoka
 * --------------------
 */

(function() {
  (function($) {
    var Loader, circle, contents, delay, get_file_photos, messages, speed, targetContents;
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
        if ($ww > 480) {
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
          itemSizeDiff = $itemSize * 1.2;
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
              left: leftX,
              top: leftY
            });
            $stageItemR.eq(i).css({
              left: rightX,
              top: rightY
            });

            /* 回転させる */
            angle += increase;
            i++;
          }
        }
      };
      scrollEvent();
      $(window).on('scroll resize', function() {
        scrollEvent();
      });
    };
    $.ajax({
      url: 'https://api.github.com/repos/usomax/usomax.github.io/contents/assets/pc/images/photo/thumbs',
      dataType: 'jsonp',
      success: function(returndata) {
        var modalClose, modalLeft, modalRight;
        $.each(returndata.data, function(i, item) {
          $('#box').find('#modal').append('<img src="http://tu3q.tk/assets/pc/images/photo/thumbs/' + this.name + '", class="hide">');
          if (i < 8) {
            $('.left').append('<a href="#"><img src="http://tu3q.tk/assets/pc/images/photo/thumbs/' + this.name + '"></a>');
            return circle();
          } else if (i > 8) {
            $('.right').append('<a href="#"><img src="http://tu3q.tk/assets/pc/images/photo/thumbs/' + this.name + '"></a>');
            circle();
            if (i === 16) {
              return false;
            }
          }
        });
        $('.circle').find('img').on('click', function() {
          var imgSrc;
          imgSrc = $(this).attr('src');
          $('#box').fadeIn();
          $('#modal').find('img[src="' + imgSrc + '"]').removeClass("hide").addClass("active");
        });
        $('.rightarrow').on('click', function() {
          modalRight();
        });
        $('.leftarrow').on('click', function() {
          modalLeft();
        });
        $('#box').on('click', function() {
          modalClose();
        });
        $('#inbox').on('click', function(e) {
          event.stopPropagation();
        });
        $('.close').on('click', function() {
          modalClose();
        });
        $('html').keyup(function(e) {
          var key;
          key = 'which' in e ? e.which : e.keyCode;
          switch (key) {
            case 39:
              modalRight();
              break;
            case 37:
              modalLeft();
              break;
            case 27:
              modalClose();
          }
        });
        modalRight = function() {
          if ($('#modal').find('img[class="active"]').is(':last-child')) {
            $('#modal').find('img[class="active"]').removeClass('active').addClass('hide');
            $('#modal img:first-child').addClass('active').removeClass('hide');
          } else {
            $('#modal').find('img[class="active"]').next().removeClass('hide').addClass('active');
            $('#modal').find('img[class="active"]').prev().removeClass('active').addClass('hide');
          }
        };
        modalLeft = function() {
          if ($('#modal').find('img[class="active"]').is(':first-child')) {
            $('#modal').find('img[class="active"]').removeClass('active').addClass('hide');
            $('#modal img:last-child').removeClass('hide').addClass('active');
          } else {
            $('#modal').find('img[class="active"]').prev().removeClass('hide').addClass('active');
            $('#modal').find('img[class="active"]').next().removeClass('active').addClass('hide');
          }
        };
        modalClose = function() {
          $('#box').fadeOut();
          $('#modal').find('img[class="active"]').removeClass('active').addClass('hide');
        };
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
    get_file_photos = function() {
      var html;
      $('#section-ajax .contents .inner').html('');
      html = '';
      $.ajax({
        url: 'https://api.github.com/repos/usomax/usomax.github.io/contents/assets/pc/images/photo/pics',
        dataType: 'jsonp',
        success: function(returndata) {
          $.each(returndata.data, function(i, item) {
            html += '<a href="http://tu3q.tk/assets/pc/images/photo/pics/' + this.name + '" target="_blank">' + '<div class="border one">' + '<div class="border two"><img src="https://i.embed.ly/1/display/resize?width=960&height=540&quality=95&grow=false&url=http://tu3q.tk/assets/pc/images/photo/pics/' + this.name + '&key=a1f82558d8134f6cbebceb9e67d04980" alt=""></div>' + '</div>' + '</a>';
          });
          $('#section-ajax .content .inner').append(html);
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
        }
      });
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
        top: 100
      }, speed, 'easeOutBounce', function() {

        /* 更新 */
        get_file_photos();
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
    return particlesJS('particles-js', {
      'particles': {
        'number': {
          'value': 80,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#ddd'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#000',
          'opacity': 0.1,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': false,
            'mode': 'repulse'
          },
          'onclick': {
            'enable': false,
            'mode': 'push'
          },
          'resize': true
        }
      }
    });
  })(jQuery);

}).call(this);

