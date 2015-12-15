/*!
 * index.js - サイト名（●●のスクリプト）
 * 動作環境： Windows / Macintosh
 * 対応ブラウザ： GoogleChrome / Firefox / Safari / Opera / IE11 / IE10 / IE9 / IE8
 * --------------------
 * @version: 1.0
 * @author :
 * --------------------
 */
(function() {
    $(function() {
        // 設定
        var $width = 780; // 横幅
        var $height = 250; // 高さ
        var $interval = 5000; // 切り替わりの間隔（ミリ秒）
        var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
        $("#slide ul li").css({
            "position": "relative",
            "overflow": "hidden",
            "width": $width,
            "height": $height
        });
        $("#slide ul li").hide().css({
            "position": "absolute",
            "top": 0,
            "left": 0
        });
        $("#slide ul li:first").addClass("active").show();
        setInterval(function() {
            var $active = $("#slide ul li.active");
            var $next = $active.next("li").length ? $active
                .next("li") : $("#slide ul li:first");
            $active.fadeOut($fade_speed).removeClass(
                "active");
            $next.fadeIn($fade_speed).addClass("active");
        }, $interval);
    });
}).call(this);