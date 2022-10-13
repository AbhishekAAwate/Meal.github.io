
$(document).ready(function () {

    /* -------------- stiky Navbar ------------- */
    $('.js-sec-feature').waypoint(function (direction) {

        if (direction == 'down') {
            $('nav').addClass('sticky-nav');
        }
        else {
            $('nav').removeClass('sticky-nav');
        }

    }
        , {
            offset: '60px;'
        });

    /* ---------------- making button works----------- */

    $('.js-scroll-to-plan').click(function () {

        $('html,body').animate({ scrollTop: $('.js-section-plan').offset().top }, 1000);
    });
    

});


// $() - select karta hai html elements or classes ko 

// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }
//    , {
//     offset: '25%'
//   })