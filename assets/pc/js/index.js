(function() {
  $(function() {
    var $allCount, $box, $height, $htmlCount, $jadeCount, $jqueryCount, $list, $width, selectedClass, zoom;
    $box = $('.box');
    $list = $('li');
    $height = $box.height();
    $width = $box.width();
    zoom = 1.5;
    selectedClass = '';
    $list.eq(0).addClass('active');
    $allCount = $('.all').length;
    $htmlCount = $('.html').length;
    $jadeCount = $('.jade').length;
    $jqueryCount = $('.jquery').length;
    $list.eq(0).append('(' + $allCount + ')');
    $list.eq(1).append('(' + $htmlCount + ')');
    $list.eq(2).append('(' + $jadeCount + ')');
    $list.eq(3).append('(' + $jqueryCount + ')');
    $box.on({
      'mouseenter': function() {
        $(this).find('img').stop().animate({
          top: -$height / 3,
          left: -$width / 4,
          width: $width * zoom,
          height: $height * zoom
        });
        $(this).find('.overlay').stop().animate({
          opacity: 1
        });
      },
      'mouseleave': function() {
        $(this).find('img').stop().animate({
          top: 0,
          left: 0,
          width: $width,
          height: $height
        });
        $(this).find('.overlay').stop().animate({
          opacity: 0
        });
      }
    });
    $list.on('click', function() {
      selectedClass = $(this).attr('data-rel');
      $list.not('.' + selectedClass).removeClass('active');
      $(this).addClass('active');
      $box.addClass('active').fadeTo(100, 0);
      $box.not('.' + selectedClass).removeClass('active').fadeOut();
      setTimeout((function() {
        $('.' + selectedClass).fadeIn();
        $box.fadeTo(500, 1);
      }), 500);
    });
  });

}).call(this);

