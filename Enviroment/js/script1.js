/* eslint-env es6 */
/* eslint-disable */
//Function expression to select elements


/* For the sticky navigation */
$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {

            if (direction == "down") {

                $('nav').addClass('sticky');

            } else {

                $('nav').removeClass('sticky');

            }

        }, {
                offset: '60px'
        });



    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });


    /* Navigation scroll */

    $('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

    /* Mobile nav */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');

        nav.slideToggle(200)
    });


});
