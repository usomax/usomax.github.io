(function() {
  $(function() {
    var $all, $box, $height, $html, $jade, $jquery, $list, $width, selectedClass, zoom;
    $box = $('.box');
    $list = $('li');
    $height = $box.height();
    $width = $box.width();
    zoom = 1.5;
    selectedClass = '';
    $all = $('.all').length;
    $html = $('.html').length;
    $jade = $('.jade').length;
    $jquery = $('.jquery').length;
    $('li span').eq(0).html($all);
    $('li span').eq(1).html($html);
    $('li span').eq(2).html($jade);
    $('li span').eq(3).html($jquery);
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

