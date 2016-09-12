


$(document).ready(function() {

    var a = $(".navbar-background").offset().top;

    $(document).scroll(function () {
        if ($(this).scrollTop() > a) {
            $('.navbar-background').css({"background": "#f2f2f2"});
        } else {
            $('.navbar-background').css({"background": "transparent"});
        }
    });

    $("#button-scroll").click(function () {
        $('html, body').animate({
            scrollTop: $("#scroll-target").offset().top
        }, 2000);
    });
    
    $('.popover-markup>.trigger').popover({
        html: true,
        title: function () {
            return $(this).parent().find('.head').html();
        },
        content: function () {
            return $(this).parent().find('.content').html();
        }
    });


});


