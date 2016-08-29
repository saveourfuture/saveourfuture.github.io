<!--
* Author:	Marzena Kacprzak
*	Assignment:	Minor	Project	– Save Our Future
*	Student	ID:
*	Date	:	2016/08/29
*	Ref:	getbootstrap.com
-->


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


});


