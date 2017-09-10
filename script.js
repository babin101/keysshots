if (navigator.userAgent.indexOf('Mac OS X') == -1) {
    (function() {
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('home-gallery').scrollLeft -= (delta*40); // Multiplied by 40
            e.preventDefault();
        }
        if (document.getElementById('home-gallery').addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.getElementById('home-gallery').addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            document.getElementById('home-gallery').addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
            // IE 6/7/8
            document.getElementById('home-gallery').attachEvent("onmousewheel", scrollHorizontally);
        }
    })();
}