
$(function () {

    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrolloffset = $(window).scrollTop();


    /*Fixed Header*/
    checkScroll(scrolloffset);

    $(window).on("scroll", function () {

        scrolloffset = $(this).scrollTop();

        checkScroll(scrolloffset);

    });

    function checkScroll(scrolloffset) {
        if (scrolloffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    
    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    var b = document.getElementById('overlay');
    function swa() {
        b.style.visibility = 'visible';
        b.style.opacity = '1';
        b.style.transition = 'all 0.7s ease-out 0s';
    }
    function swa2() {
        b.style.visibility = 'hidden';
        b.style.opacity = '0';
    }
});