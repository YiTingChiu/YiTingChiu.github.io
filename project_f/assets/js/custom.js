(function($) {

  "use strict";

  // preloader_3
  // header_3
  // search_3(搜尋)
  // WOW JS
  // footer_3
  // index_3_1(首頁輪播)
  // index_3_3(首頁產品輪播)
  // index_3_5(首頁連結輪播)
  // index_3_6(首頁消息輪播)
  // join_3(上傳檔案)
  // lazyload


  /* -----------------------------------------------------------------------
     preloader_3
     ----------------------------------------------------------------------- */

  // Preloader

  if ($('.preloader_3').length) {
    function stylePreloader() {
      $('body').addClass('preloader-deactive');
    }

    $(window).on('load', function() {
      stylePreloader();
    });
  }


  /* -----------------------------------------------------------------------
     header_3
     ----------------------------------------------------------------------- */

  if ($('.header_3').length) {
    // Header Sticky Js
    var varWindow = $(window);
    varWindow.on('scroll', function(event) {
      var scroll = varWindow.scrollTop();
      if (scroll < 100) {
        $(".header_3").removeClass("header_3--sticky");
      } else {
        $(".header_3").addClass("header_3--sticky");
      }
    });

    $('.js__menu > a').on('click', function(e) {
      e.preventDefault();
      $('.header_3 .header-menu').slideToggle();
    });

    $('.header-menu__close-js').on('click', function(e) {
      $('.header-menu').slideToggle();
    });

    if ($(window).width() < 992) {
      $('.header_3 .has-menu .main-link__icon').on('click', function(e) {
        e.preventDefault();
        $(this).parent().next().slideToggle();
        $(this).parent().toggleClass('active');
      });
    }
  }


  /* -----------------------------------------------------------------------
     search_3
     ----------------------------------------------------------------------- */
  $('.header_3 .btn-search').on('click', function(e) {
    e.preventDefault();
    $('.header_3 .btn-search-content').slideToggle();
  });


  /* -----------------------------------------------------------------------
     WOW JS
     ----------------------------------------------------------------------- */

  if ($('.wow').length) {
    var wow = new WOW({
      mobile: false
    });
    wow.init();
  }



  /* -----------------------------------------------------------------------
     footer_3
     ----------------------------------------------------------------------- */


  if ($('.footer_3__scroll-to-top').length) {
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
     index_3_1(首頁輪播)
     ----------------------------------------------------------------------- */

  if ($('.index_3_1').length) {
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
    //背景圖片讀取
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function(index, elem) {
      let element = $(elem),
        bgSource = element.data('bg-img');
      element.css('background-image', 'url(' + bgSource + ')');
    });
  }

  /* -----------------------------------------------------------------------
     index_3_3(首頁產品輪播)
     ----------------------------------------------------------------------- */

  // 首頁產品輪播
  if ($('.index_3_3__swiper').length) {
    var swiper = new Swiper(".index_3_3__swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next.index_3_3__next",
        prevEl: ".swiper-button-prev.index_3_3__prev",
      },
    });
  }


  /* -----------------------------------------------------------------------
     index_3_5(首頁連結輪播)
     ----------------------------------------------------------------------- */

  // 首頁連結輪播
  if ($('.index_3_5__swiper').length) {
    var swiper = new Swiper(".index_3_5__swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination4",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next.index_3_5__next",
        prevEl: ".swiper-button-prev.index_3_5__prev",
      },
    });
  }

  // 測試特效用
  // if ($("#scene").length > 0) {
  //   new Parallax(document.getElementById('scene'));
  // }


  /* -----------------------------------------------------------------------
   index_3_6(首頁消息輪播)
   ----------------------------------------------------------------------- */

  if ($('.index_3_6__swiper').length) {
    // 首頁消息輪播
    var swiper = new Swiper(".index_3_6__swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination3",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next.index_3_6__next",
        prevEl: ".swiper-button-prev.index_3_6__prev",
      },
      breakpoints: {
        // when window width is >= 480px
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 991px
        991: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }

    });
  }

  /* -----------------------------------------------------------------------
    join_3(上傳檔案)
    ----------------------------------------------------------------------- */
  //加盟表單上傳檔案js

  if ($('.join_3').length) {
    $('#upload-file').on("change", function() {
      let filenames = [];
      let files = this.files;
      if (files.length > 1) {
        filenames.push("您已選擇 " + files.length + " 個檔案");
      } else {
        for (let i in files) {
          if (files.hasOwnProperty(i)) {
            filenames.push(files[i].name);
          }
        }
      }
      $("#upload-text")
        .html(filenames.join(","));
    });
  }


  /* ==================================================
      lazyload
   ===============================================*/
  document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
      e.target.style.backgroundImage = 'url(' + bg + ')';
    }
  });


})(window.jQuery);