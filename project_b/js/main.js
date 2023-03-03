/*
    Template Name: Dazimaxx Premium Multipurpose HTML Template
    Description: This is html5 template
    Author: HasTech
    Version: 1.0
*/
/*================================================
[  Table of contents  ]
================================================
  01. Sticky Menu
  02. Owl Carousel
  03. jQuery MeanMenu
  04. Slick Carousel
  05. Image Load & Isoptope
  06. Counter Up
  07. ScrollUp
  08. Wow js
  09. Price Slider Activate
 
======================================
[ End table content ]
======================================*/

(function($) {
  "use strict";

  /*------------------------------------
      01. Sticky Menu
  -------------------------------------- */
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 245) {
      stick.removeClass("sticky");
    } else {
      stick.addClass("sticky");
    }
  });

  /*----------------------------------------
      02. Owl Carousel
  ---------------------------------------- */
  /*----------------------------------------
      Slider Carousel
  ---------------------------------------- */
  $(".slider-wrapper").owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 2500,
    items: 1,
    dotData: true,
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
  /*--------------------------------
      Testimonial Carousel
  --------------------------------- */
  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    autoplay: false,
    smartSpeed: 3000,
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
  /*--------------------------------
      Blog Carousel
  --------------------------------- */
  $('.blog-carousel').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    dots: false,
    nav: false,
    autoplay: false,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1,
        autoplay: true
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3
      }
    }
  });


  $('.ad-carousel').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    dots: false,
    nav: false,
    autoplay: false,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1,
        autoplay: true
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3
      }
    }
  });

  $('.product-carousel').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    dots: false,
    nav: true,
    autoplay: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 3
      }
    }
  });


  /*-------------------------------------------
      03. jQuery MeanMenu
  --------------------------------------------- */
  $('.main-menu nav').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

  /*------------------------------------
    04. Slick Carousel 
  --------------------------------------*/
  /*------------------------------------
    Feature Slick Carousel 
  --------------------------------------*/
  $('.feature-slick-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
  /*------------------------------------
    Feature Slick Carousel Two
  --------------------------------------*/
  $('.feature-slick-carousel-two').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /*------------------------------------
    Product Slick Carousel - product-list
  --------------------------------------*/
  $('.slider-for').slick({
    slidesToShow: 1, //預設 1 幻燈片顯示幾張
    slidesToScroll: 1, //預設 1 幻灯片每次滑動幾張
    arrows: false, // 預設 true 左右箭頭是否顯示
    fade: true, // 預設 false 淡入淡出
    asNavFor: '.slider-nav', //將滑塊設置為其他滑塊的導航（類或ID名稱）,適用於多個輪播圖共用一個導航
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: true
      }
    }]
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true, // 預設 false 指示点
    arrows: false, // 預設 true 左右箭頭是否顯示
    focusOnSelect: true, // 預設 false
  });

  /*-----------------------------------------
      05. Image Load & Isoptope
  ------------------------------------------ */
  $('.grid').imagesLoaded(function() {
    // filter items on button click
    $('.event-menu').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      percentPosition: true,
    });
  });

  /*-----------------------------------------
      06. Counter Up
  ------------------------------------------ */
  $('.counter').counterUp({
    delay: 70,
    time: 5000
  });

  /*------------------------------------------
      07. ScrollUp
  ------------------------------------------- */
  $.scrollUp({
    scrollText: '<i class="icon-arrow-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  /*------------------------------------------
      08. MagnificPopup
  ------------------------------------------- */

  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  /*------------------------------------------
      09. Wow js
  -------------------------------------------- */
  new WOW().init();

  /*------------------------------------------
      10. Price Slider Activate
  -------------------------------------------- */
  $("#slider-range").slider({
    range: true,
    min: 110,
    max: 300,
    values: [120, 240],
    slide: function(event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));

  /*------------------------------------------
      11. About 的 timeline 收合列表
  -------------------------------------------- */
  $(".timeline__arrow").click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.timeline__arrow').toggleClass('arrow-rotate');
    $(this).parent().find('.timeline-note__wrapper').slideToggle(300);
  });


  /*------------------------------------------
      12. Store list 的 tab 下拉選單
  -------------------------------------------- */
  $(".menu-arrow, .store-list__comnapy").click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.menu-arrow').toggleClass('arrow-animate');
    $(this).parent().find('.store-menu').slideToggle(280);
  });



  $(".store-menu li").each(function() {
    if ($(this).hasClass('active')) {
      $(this).parent().show();
      $(this).parent().parent().addClass('active');
      $(this).parent().parent().find('.menu-arrow').toggleClass('arrow-animate');
    }
  });



  /*------------------------------------------
      12. Select選單選取後的顏色
  -------------------------------------------- */
  // 更換select選單被選中後, 出現指定顏色, 顏色需在css寫
  $('select').on('change', function() {
    $(this).addClass('active');
  });



  //漢堡選單時，點選主分類(有次分類)時，不會轉跳連結，而是下拉選單
  function isMobile() {
    try { document.createEvent("TouchEvent"); return true; } catch (e) { return false; }
  }
  if (isMobile()) {
    $('.main-link').click(function(event) {
      event.preventDefault();
    });
  } else {}
  // 在寬度小於992時，讓次分類選單出現
  if ($(window).width() < 992) {
    $(".main-link").click(function() {
      $(this).toggleClass('active');
      $(this).parent().find('.main__menu').slideToggle(280);
    });
  }




  // end
})(jQuery);