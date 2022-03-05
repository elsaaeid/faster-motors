/******************************************
    File Name: custom.js
*******************************************/


(function ($) {
    "use strict";
    /**== wow animation ==**/

  
  new WOW().init();

    /**== loader js ==*/

    $(window).load(function () {
        $(".bg_load").fadeOut("slow");
    });


    /**== top-search js ==*/

    $("li.search").on("click", function (e) {
        e.preventDefault();
        $(".top-search").slideToggle();
    });
    $(".input-group-addon.close-search").on("click", function () {
        $(".top-search").slideUp();
    });

    /**==navbar mobile container ==*/
    var icon = document.querySelector('.icon');
    icon.onclick = function myfunction() {
        var mylinks = document.getElementById("mylinks");
        if (mylinks.style.display === "block") {
            mylinks.style.display = "none"
        }
        else {
            mylinks.style.display = "block";
        }
    };
    /* ..............................................
       Owl Carousel Instagram Feed
       ................................................. */

    $('.main-instagram').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });

    /* ..............................................
   Scroll
   ................................................. */

    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });



    /* ..............................................
       Gallery
       ................................................. */

    $('#slides-shop').superslides({
        inherit_width_from: '.cover-slides',
        inherit_height_from: '.cover-slides',
        play: 5000,
        animation: 'fade',
    });

    $(".cover-slides ul li").append("<div class='overlay-background'></div>");


    /* ..............................................
       Special Menu
       ................................................. */

    var Container = $('.container-fluid');
    Container.imagesLoaded(function () {
        var portfolio = $('.special-menu');
        portfolio.on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });
    });

    /**==button of order by ==*/
    var order = document.querySelector('.order-by');
    order.onclick = function myfunction() {
        var mybuttons = document.getElementById("mybuttons");
        if (mybuttons.style.display === "block") {
            mybuttons.style.display = "none"
        }
        else {
            mybuttons.style.display = "block";
        }
    };



 



}
    (jQuery));


