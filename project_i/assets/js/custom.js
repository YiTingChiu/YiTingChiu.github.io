(function($) {

  "use strict";

  // 1.preloader_6
  // 2.header_6
  // 3.WOW JS
  // 4.footer_6
  // 5.product_6
  // 6.index_6_1(首頁輪播)
  // 7.index_6_4(首頁產品輪播)
  // 8.index_6_6(首頁消息輪播)
  // 9.index_6_8(首頁連結輪播)
  // 10.cookie_6


  /* -----------------------------------------------------------------------
     1.preloader_6
     ----------------------------------------------------------------------- */

  // Preloader

  if ($('.preloader_6').length) {
    function stylePreloader() {
      $('body').addClass('preloader-deactive');
    }

    $(window).on('load', function() {
      stylePreloader();
    });
  }


  /* -----------------------------------------------------------------------
     2.header_6
     ----------------------------------------------------------------------- */



  if ($('.header_6').length) {
    // Header Sticky Js
    var varWindow = $(window);
    varWindow.on('scroll', function(event) {
      var scroll = varWindow.scrollTop();
      if (scroll < 100) {
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
    $('.header_6__main-menu').slicknav({
      appendTo: '.res-mobile-menu',
      allowParentLinks: true,
      closeOnClick: false,
      removeClasses: true,
      closedSymbol: '<i class="fas fa-plus"></i>',
      openedSymbol: '<i class="fas fa-minus"></i>'
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

    //手機板語言按鈕
    $('.btn-lang').on('click', function() {
      $('.responsive-langauge-wrap').slideToggle();
    });

    //手機板會員按鈕
    $('.btn-member').on('click', function() {
      $('.responsive-member-wrap').slideToggle();
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
     4.footer_6
     ----------------------------------------------------------------------- */


  if ($('.footer_6__scroll-to-top').length) {
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
     5.product_6
     ----------------------------------------------------------------------- */

  if ($('.product_6__category-sub-menu').length) {
    // 側欄active判斷自動展開
    $(".product_6__category-sub-menu>ul>li>ul>li").each(function() {
      if ($(this).hasClass('active')) {
        $(this).parent().addClass('show');
        $(this).parent().prev().removeClass('collapsed');
      }
    });
  }


  // 產品放大鏡
  if ($('.zoom-hover').length) {
    $('.zoom-hover').zoom()
  }


  // 產品輪播
  if ($('.single-product-nav-slider2').length) {
    var ProductNav2 = new Swiper('.single-product-nav-slider2', {
      slidesPerView: 4,
      freeMode: true,
    });
    var ProductThumb2 = new Swiper('.single-product-thumb-slider2', {
      freeMode: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: ProductNav2
      }
    });
  }

  /* -----------------------------------------------------------------------
     6.index_6_1(首頁輪播)
     ----------------------------------------------------------------------- */

  if ($('.index_6_1').length) {
    // 首頁banner輪播(電腦)
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
        navigation: {
          nextEl: ".swiper-button-next.index_6_1__next",
          prevEl: ".swiper-button-prev.index_6_1__prev",
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
    //背景圖片讀取
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function(index, elem) {
      let element = $(elem),
        bgSource = element.data('bg-img');
      element.css('background-image', 'url(' + bgSource + ')');
    });
  }

  /* -----------------------------------------------------------------------
     7.index_6_4(首頁產品輪播)
     ----------------------------------------------------------------------- */

  // 首頁產品輪播
  if ($('.index_6_4__swiper').length) {
    var swiper = new Swiper(".index_6_4__swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: true,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next.index_6_4__next",
        prevEl: ".swiper-button-prev.index_6_4__prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      }
    });
  }


  /* -----------------------------------------------------------------------
     8.index_6_6(首頁消息輪播)
     ----------------------------------------------------------------------- */

  if ($('.index_6_6__swiper').length) {
    // 首頁消息輪播
    var swiper = new Swiper(".index_6_6__swiper", {
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: true,
      loop: true,
      // autoplay:true,
      pagination: {
        el: ".swiper-pagination6",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next.index_6_6__next",
        prevEl: ".swiper-button-prev.index_6_6__prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      }
    });
  }


  /* -----------------------------------------------------------------------
     9.index_6_8(首頁連結輪播)
     ----------------------------------------------------------------------- */

  // 首頁連結輪播
  if ($('.index_6_8__swiper').length) {
    var swiper = new Swiper(".index_6_8__swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: true,
      loop:true,
      pagination: {
        el: ".swiper-pagination8",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next.index_6_8__next",
        prevEl: ".swiper-button-prev.index_6_8__prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }
    });
  }

  // 測試特效用
  // if ($("#scene").length > 0) {
  //   new Parallax(document.getElementById('scene
  // }

  /* ==================================================
     10. cookie_6
  ===============================================*/
  $('.cookie_6 .btn-all').on('click', function() {
    $('.cookie_6').fadeOut(300);
  });


})(window.jQuery);