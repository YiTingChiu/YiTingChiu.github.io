(function($) {

    "use strict";

    // 1.preloader_op1
    // 2.header_op1
    // 3.WOW JS
    // 4.footer_op1
    // 5.slide_op1(首頁輪播)
    // 6.news_op1(消息輪播)
    // 7.product_op1(多圖產品介紹)
    // 8.更換select選單被選中換色
    // 9.cookie_op1


    /* -----------------------------------------------------------------------
       1.preloader_op1
       ----------------------------------------------------------------------- */

    // Preloader

    if ($('#preloader').length) {
        function stylePreloader() {
            $('body').addClass('preloader-deactive');
        }

        $(window).on('load', function() {
            stylePreloader();
        });
    }


    /* -----------------------------------------------------------------------
       2.header_op1
       ----------------------------------------------------------------------- */

    if ($('.header_op1').length) {
        // Header Sticky Js
        var varWindow = $(window);
        varWindow.on('scroll', function(event) {
            var scroll = varWindow.scrollTop();
            if (scroll < 350) {
                $(".sticky-header").removeClass("sticky");
            } else {
                $(".sticky-header").addClass("sticky");
            }
            if ($(window).width() < 992) {
                if (scroll < 50) {
                    $(".responsive-header").removeClass("sticky");
                    $(".header-top").show();
                } else {
                    $(".responsive-header").addClass("sticky");
                    $(".header-top").hide();
                }
            }
        });

        // Width
        $('[data-width]').each(function() {
            $(this).css('width', $(this).data("width"));
        });
        // Margin Top
        $('[data-margin-top]').each(function() {
            $(this).css('margin-top', $(this).data("margin-top"));
        });
        // Margin Bottom
        $('[data-margin-bottom]').each(function() {
            $(this).css('margin-bottom', $(this).data("margin-bottom"));
        });
        // Padding Top
        $('[data-padding-top]').each(function() {
            $(this).css('padding-top', $(this).data("padding-top"));
        });
        // Padding Bottom
        $('[data-padding-bottom]').each(function() {
            $(this).css('padding-bottom', $(this).data("padding-bottom"));
        });

        // Off Canvas JS
        var canvasWrapper = $(".off-canvas-wrapper");
        $(".btn-menu").on('click', function() {
            canvasWrapper.addClass('active');
            $("body").addClass('fix');
        });

        $(".close-action > .btn-menu-close, .off-canvas-overlay").on('click', function() {
            canvasWrapper.removeClass('active');
            $("body").removeClass('fix');
        });

        //Responsive Slicknav JS
        $('.header_op1__main-menu').slicknav({
            appendTo: '.res-mobile-menu',
            allowParentLinks: true,
            closeOnClick: false,
            removeClasses: true,
            closedSymbol: '<i class="fas fa-plus"></i>',
            openedSymbol: '<i class="fas fa-minus"></i>',
            showChildren: false,
        });

        // Menu Activeion Js
        var cururl = window.location.pathname;
        var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
        var hash = window.location.hash.substr(1);
        if ((curpage == "" || curpage == "/" || curpage == "admin") && hash == "") {} else {
            $(".header-navigation-area li").each(function() {
                $(this).removeClass("active");
            });
            if (hash != "")
                $(".header-navigation-area li a[href*='" + hash + "']").parents("li").addClass("active");
            else
                $(".header-navigation-area li a[href*='" + curpage + "']").parents("li").addClass("active");
        }

        // header搜尋框
        $(".btn-search").on('click', function() {
            $(".btn-search-content").toggleClass("show").focus();
        });


        //手機板搜尋按鈕
        $('.btn-search').on('click', function() {
            $('.responsive-search-content').slideToggle();
        });

    }



    /* -----------------------------------------------------------------------
       3.WOW JS
       ----------------------------------------------------------------------- */

    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }



    /* -----------------------------------------------------------------------
       4.footer_op1
       ----------------------------------------------------------------------- */


    if ($('#scroll-to-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-to-top'),
                $lastScrollTop = 0,
                $window = $(window);
            $window.on('scroll', function() {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 120) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });
            $scrollUp.on('click', function(evt) {
                $('html, body').animate({ scrollTop: 0 }, 50);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }


    /* -----------------------------------------------------------------------
       5.slide_op1(首頁輪播)
       ----------------------------------------------------------------------- */

    // 首頁banner輪播
    if ($('.default-slider-container').length) {
        var carouselSlider = new Swiper('.default-slider-container', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });
    }

    // 首頁banner輪播(手機)
    if ($('.default-slider-container--mb').length) {
        var carouselSlider = new Swiper('.default-slider-container--mb', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });
    }

    /* -----------------------------------------------------------------------
       6.news_op1(消息輪播)
       ----------------------------------------------------------------------- */
    if ($('.news-slide-content').length) {
        var swiper = new Swiper(".news-slide-content", {
            navigation: {
                nextEl: ".news_op1 .swiper-button-next",
                prevEl: ".news_op1 .swiper-button-prev",
            },
            pagination: {
                el: ".news_op1 .swiper-pagination",
                clickable: true,
            },
            autoHeight: true,
        });
    }

    /* -----------------------------------------------------------------------
       7.product_op1(多圖產品介紹)
       ----------------------------------------------------------------------- */

    // 多圖產品介紹 - 首頁的產品彈窗/購物車熱門推薦的產品彈窗
    if ($('#product-modal-slide').length) {
        var swiper = new Swiper(".product_op1_sm-img", {
            spaceBetween: 0,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".product_op1_main-img", {
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    /* -----------------------------------------------------------------------
       8.更換select選單被選中後, 出現指定顏色, 顏色需在css寫
       ----------------------------------------------------------------------- */
    $('select').on('change', function() {
        $(this).addClass('active');
    });


    /* -----------------------------------------------------------------------
       9.cookie_op1
       ----------------------------------------------------------------------- */
    // cookie
    if ($(".cookie_op1").length) {
        $("#cookie_op1__btn").on("click", function() {
            $(".cookie_op1").fadeOut();
        });
    }

})(window.jQuery);