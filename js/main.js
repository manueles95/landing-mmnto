(function ($) {
    "use strict";

    $(window).on('load', function(){
        // Prealoder
        $("#preloader").delay(1400).fadeOut("slow");
    });

    $(document).ready(function () {

        // sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();


        //  Back to top button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        // animation for Back to top button
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });


        // services carousel Initialize
        $('.service_carousel').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            smartSpeed: 750,
            nav: true,
            dots: false,
            center: true,
            navText: ["<img src='img/left-arrow.svg'>", "<img src='img/right-arrow.svg'>"],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 15,
                },
                576: {
                    items: 2,
                    stagePadding: 0,
                },
                992: {
                    items: 4,
                    stagePadding: 0,
                }
            }
        });


        // reviews carousel Initialize
        $('.reviews_carousel').owlCarousel({
            loop: false,
            autoplay: false,
            smartSpeed: 750,
            nav: true,
            dots: false,
            navText: ["<img src='img/left-arrow.svg'>", "<img src='img/right-arrow.svg'>"],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 30,
                    stagePadding: 30,
                },
                992: {
                    items: 3,
                    margin: 55,
                    stagePadding: 50,
                }
            }
        });

        // reviews carousel Initialize
        $('.stories_carousel').owlCarousel({
            loop: true,
            smartSpeed: 750,
            nav: true,
            dots: false,
            navText: ["<img src='img/left-arrow.svg'>", "<img src='img/right-arrow.svg'>"],
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40,
                    margin: 20,
                },
                576: {
                    items: 2,
                    margin: 30,
                    stagePadding: 0,
                },
                992: {
                    items: 3,
                    margin: 30,
                    stagePadding: 0,
                }
            }
        });


        // aos Initialize
        AOS.init({
            duration: 1200,
        });

        // ease intialize
        $('.scroll_down').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '80';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 600, 'easeInSine');
            event.preventDefault();
        });
        
    });

})(jQuery);

    var typed = new Typed('.auto_type', {
        strings: ["Brand", "Bussines", "Restaurant"],
        typeSpeed: 190,
        loop: true,
        backSpeed: 50,
    });