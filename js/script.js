
$(function() {
    var siteWidth = $('meta[name=website-width]').attr('content');
    if(siteWidth) {
        $(window).resize(function() {
            var viewportWidth = $(window).width();
            if(viewportWidth > 480 && viewportWidth < siteWidth) {
                $('body').css({
                  'transform': 'scale(' + (viewportWidth / 1200) + ')',
                  'transform-origin': '0 0',
                })
            }
            else {
                $('body').css({
                  'transform': '',
                  'transform-origin': '',
                })
            }
        })
    }
});
