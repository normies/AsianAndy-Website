var theaterMode = false;

$(window).on('resize', function(){
    resizeIframes();
});

$(document).ready(function() {

    resizeIframes();

    $('.toggle-theater').click(function() {
        toggleTheaterMode();
    });

    $('.toggle-fullscreen').click(function() {
        toggleFullScreen();
    });

    $('.toggle-popout').click(function() {
        window.open('https://gaming.youtube.com/live_chat?v=-rhZPfBXe98&is_popout=1', 'Asian Andy Chat', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=500,height=800');
    });

    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
        trigger : 'hover'
    });

    $('.ui-absolute').show();
});

var toggleTheaterMode = function() {

    theaterMode = !theaterMode;

    if (theaterMode === true) {
        $('.top-navbar').hide();
        $('.container-wrapper').css('margin-top', 0);
        $('.chat-iframe').css('margin-top', 0);
        $('body').css('background-color', '#000');
    } else {
        $('.top-navbar').show();
        $('.container-wrapper').css('margin-top', '48px');
        $('.chat-iframe').css('margin-top', '-48px');
        $('body').css('background-color', '#191919');
    }

    resizeIframes();
};

var resizeIframes = function() {

    var $window = $(window);
    var $iframe = $('.video-iframe');
    

    if ($window.width() < 992) {
        $iframe.css('margin-top', 0);
        $iframe.css('height', '56.25vw');
        return false;
    }

    var windowHeight = $window.height();
    var iFrameWidth = $iframe.width();
    var iFrameHeight = ((iFrameWidth / 16) * 9);

    $iframe.css('height', Math.min(iFrameHeight, (windowHeight - 48)));

    var marginTop = 0;

    if (theaterMode === true) {
        marginTop = ((windowHeight - $iframe.height())) / 2;
    } else {
        marginTop = ((windowHeight - $iframe.height()) - 48) / 2;
    }

    $iframe.css('margin-top', marginTop);
};

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}