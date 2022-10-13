











/*------------ For the sticky navigation ------------------*/

$(document).ready(function () {
    $('.js-sec-feature').waypoint(function (direction) {

        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px;'
    });

    /* ------------ Scrool on Button click */

    $('.js-scroll-to-plan').click(function () {
        $('html,body').animate({ scrollTop: $('.js-section-plan').offset().top }, 1000);
    });

    $('.js-scroll-to-start').click(function () {
        $('html,body').animate({ scrollTop: $('.js-sec-feature').offset().top }, 1000);
    });
    

    /* ------------- navigation scroll using JQuery------------------- */

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {

                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            }
        });

    /* Animation on Scroll */
    $('.js-wp-1').waypoint(function () {
        $('.js-wp-1').addClass('animated bounceOut');
    });

});

// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })