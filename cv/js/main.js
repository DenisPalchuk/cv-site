$(document).ready(function () {
    /* ===================================
     Loading Timeout
     ====================================== */
    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 2000);
});

jQuery(function ($) {
    "use strict";
    //check for browser os
    var isMobile = false;
    var isiPhoneiPad = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }


    // sections background image from data background
    var pageSection = $(".parallax, section, .bg-img");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    /* ===================================
     Header Appear On Scroll
     ====================================== */

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 70) {
            // Set position from top to add class
            $("header").addClass("sticky header-appear");
        } else {
            $("header").removeClass("sticky header-appear");
        }
    });

    /* =====================================
            Scroll
     ====================================== */

    //scroll to appear
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) $(".scroll-top-arrow").fadeIn("slow");
        else $(".scroll-top-arrow").fadeOut("slow");
    });
    //Click event to scroll to top
    $(document).on("click", ".scroll-top-arrow", function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    //scroll sections
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 750);
    });

    /* =====================================
            Wow
     ====================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /*==============================================================
                Owl Carousel
      ==============================================================*/

    // references
    var owlreferences = $(".owl-t");
    owlreferences.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // blog
    var owlblog = $(".owl-blog");
    owlblog.owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // end

    // brand
    var owlbrand = $(".owl-client");
    owlbrand.owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    /* ===================================
    Portfolio Filter
    ====================================== */

    // isotope
    $(".gallery").isotope({
        // options
        itemSelector: ".items"
    });

    var $gallery = $(".gallery").isotope({
        // options
    });

    // filter items on button click
    $(".filtering").on("click", "span", function () {
        var filterValue = $(this).attr("data-filter");

        $gallery.isotope({ filter: filterValue });
    });

    $(".filtering").on("click", "span", function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });

    setTimeout(function () {
        $(".filtering .active").click();
    }, 4500);

    /* ---------------------------------------------
        ProgressBar
     --------------------------------------------- */
    var skills = $(".skills");
    var id = skills.attr("id");
    function animateProgressBar() {
        $(".progres").css("width", function () {
            return $(this).attr("aria-valuenow") + "%";
        });
    }

    var waypoint = new Waypoint({
        element: document.getElementById(id),
        handler: function (direction) {
            animateProgressBar();
        },
        offset: "75%"
    });


    /* ---------------------------------------------
        Count UP
     --------------------------------------------- */

    function animateCounter() {
        $(".counter-value").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                }
            );
        });
    }

    var counterId = $("#counter");
    var waypoint1 = new Waypoint({
        element: counterId,
        handler: function (direction) {
            animateCounter();
        },
        offset: "75%"
    });


    /* ---------------------------------------------
       MAGNIFIC POPUP
        --------------------------------------------- */
    if ($(".video-popup").length) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            iframe: extendMagnificIframe()
        });
    }

    // Mobile menu
    $('.menu-toggle').on('click', function () {
        $('.header_area').toggleClass('mobile-menu-hide');
        $('.menu-toggle').toggleClass('open');
    });

    var sections = $('section')
        , nav = $('.nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 2
        }, 500);

        return false;
    });

});



//   MAGNIFIC POPUP
function extendMagnificIframe() {
    var $start = 0;
    var $iframe = {
        markup:
            '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            "</div>" +
            '<div class="mfp-bottom-bar">' +
            '<div class="mfp-title"></div>' +
            "</div>",
        patterns: {
            youtube: {
                index: "youtu",
                id: function (url) {
                    var m = url.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
                    if (!m || !m[1]) return null;

                    if (url.indexOf("t=") != -1) {
                        var $split = url.split("t=");
                        var hms = $split[1]
                            .replace("h", ":")
                            .replace("m", ":")
                            .replace("s", "");
                        var a = hms.split(":");

                        if (a.length == 1) {
                            $start = a[0];
                        } else if (a.length == 2) {
                            $start = +a[0] * 60 + +a[1];
                        } else if (a.length == 3) {
                            $start = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
                        }
                    }

                    var suffix = "?autoplay=1";

                    if ($start > 0) {
                        suffix = "?start=" + $start + "&autoplay=1";
                    }

                    return m[1] + suffix;
                },
                src: "//www.youtube.com/embed/%id%"
            },
            vimeo: {
                index: "vimeo.com/",
                id: function (url) {
                    var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                    if (!m || !m[5]) return null;
                    return m[5];
                },
                src: "//player.vimeo.com/video/%id%?autoplay=1"
            }
        }
    };

    return $iframe;
}
