// page init
$(document).ready(function() {

  "use strict";

  initAddClass();
  // Add Class  init
  function initAddClass() {
    "use strict";

    jQuery('.setting-drop-opener').on("click", function(e) {
      e.preventDefault();
      jQuery("body").toggleClass("cart-dropdown-active");
    });
    jQuery('.cart-drop-opener').on("click", function(e) {
      e.preventDefault();
      jQuery("body").toggleClass("cart-drop-active");
    });
    jQuery('.search-opener').on("click", function(e) {
      e.preventDefault();
      jQuery("body").toggleClass("search-active");
    });
    jQuery('.nav-opener').on("click", function(e) {
      e.preventDefault();
      jQuery("body").toggleClass("nav-active");
    });
    jQuery('.drop-open').on("click", function(e) {
      e.preventDefault();
      jQuery("#nav > ul > li").toggleClass("drop-active");
    });
  }

  initCustomForms();
  // initialize custom form elements
  function initCustomForms() {
    jcf.replaceAll();
  }


  initSlickSlider();
  // Slick Slider init
  function initSlickSlider() {
    "use strict";

    jQuery('.deal-slider').slick({
      dots: true,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 2000
    });
    // 首頁大圖輪播
    jQuery('.main-slider').slick({
      lazyLoad: 'ondemand',
      dots: false,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: true,
      fade: true,
      autoplaySpeed: 4000
    });
    jQuery('.portfolio-slider').slick({
      dots: false,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      arrows: true,
      autoplaySpeed: 2000,
      asNavFor: '.pagg-slider'
    });
    // 產品內頁小圖輪播
    jQuery('.pagg-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.portfolio-slider, .product-slider',
      focusOnSelect: true,
      autoplay: false,
      arrows: false,
    });
    // 產品內頁大圖輪播
    jQuery('.product-slider').slick({
      dots: false,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,
      asNavFor: '.pagg-slider',
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
    // 各式酒品內頁-相關商品輪播
    jQuery('.info__hot-items').slick({
      dots: false,
      speed: 500,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: false,
      // prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      // nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });
    // 首頁各式酒品輪播
    jQuery('.index-product-slider').slick({
      dots: false,
      speed: 1000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 430,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    });

    // 產品內頁輪播
    jQuery('.p-info-img').slick({
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: false,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });

    // 首頁滿版廣告輪播
    jQuery('.full-ad-slider').slick({
      lazyLoad: 'ondemand',
      dots: false,
      speed: 1000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      arrows: false,
      fade: true,
      autoplaySpeed: 5000
    });

  }

  initAccordion();
  // accordion menu init
  function initAccordion() {
    jQuery('.accordion').slideAccordion({
      opener: '.opener',
      slider: '.slide',
      animSpeed: 300
    });
  }

  initFancybox();
  // lightbox init
  function initFancybox() {
    jQuery('a.lightbox, [data-fancybox]').fancybox({
      parentEl: 'body',
      margin: [50, 0]
    });
    jQuery("#age-hiddenlink").fancybox().trigger('click');
  }


  if ($(window).width() > 767) {
    initTouchNav();
    // handle dropdowns on mobile devices
    function initTouchNav() {
      jQuery('#nav').each(function() {
        new TouchNav({
          navBlock: this
        });
      });
    }
  }




  initCountDown();
  // count down init
  function initCountDown() {
    var newDate = new Date(2019, 1, 28);

    jQuery("#defaultCountdown").countdown({ until: newDate });
  }

  initbackTop();
  // backtop init
  function initbackTop() {
    "use strict";

    var jQuerybackToTop = jQuery("#go-to-top");
    jQuery(window).on('scroll', function() {
      if (jQuery(this).scrollTop() > 100) {
        jQuerybackToTop.addClass('active');
        jQuerybackToTop.parent().parent().parent().addClass('active');
      } else {
        jQuerybackToTop.removeClass('active');
        jQuerybackToTop.parent().parent().parent().removeClass('active');
      }
    });
    jQuerybackToTop.on('click', function(e) {
      jQuery("html, body").animate({ scrollTop: 0 }, 500);
    });
  }

  initStickyScrollBlock();
  // initialize fixed blocks on scroll
  function initStickyScrollBlock() {
    ResponsiveHelper.addRange({
      '768..': {
        on: function() {
          jQuery('.nav-holder').stickyScrollBlock({
            setBoxHeight: true,
            activeClass: 'sticky',
            positionType: 'fixed',
            extraTop: function() {
              var totalHeight = 0;
              jQuery('0').each(function() {
                totalHeight += jQuery(this).outerHeight();
              });
              return totalHeight;
            }
          });
        },
        off: function() {
          jQuery('.nav-holder').stickyScrollBlock('destroy');
        }
      }
    });
  }

  jQuery('.img-col').tilt({
    maxTilt: 1,
  });


});


jQuery(window).on('load', function() {

  "use strict";

  new WOW().init();

  jQuery("#loader").delay(600).fadeOut(300);

  initIsoTop();
  // IsoTop init
  function initIsoTop() {

    "use strict";
    // Isotope init
    var isotopeHolder = jQuery('#feature-holder'),
      win = jQuery(window);
    jQuery('.filter-list a').on("click", function(e) {
      e.preventDefault();

      jQuery('.filter-list li').removeClass('active');
      jQuery(this).parent('li').addClass('active');
      var selector = jQuery(this).attr('data-filter');
      isotopeHolder.isotope({ filter: selector });
    });
    jQuery('#feature-holder').isotope({
      layoutMode: 'masonry',
      itemSelector: '.item-col',
      // percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
  }
});


jQuery(window).on('load', function() {

  "use strict";

  // 各式品酒
  $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
    $('.index-product-slider').slick('setPosition');
  })

  // 年齡判斷
  $('.btn__age.yes').click(function() {
    $(this).parent().parent().parent().parent().fadeOut();
  })

  // 產品介紹彈窗
  $('.btn__intro.product').click(function() {
    $(this).parent().parent().find('.product-box').fadeIn();
  })

  // 品牌故事彈窗
  $('.btn__intro.brand').click(function() {
    $(this).parent().parent().find('.brand-box').fadeIn();
  })

  // 產品內頁彈窗的關閉按鈕
  $('.p-info-close').click(function() {
    $(this).parent().parent().parent().fadeOut();
  })

  // 產品列表搜尋
  $('.mobile-search-box').click(function() {
    $(this).toggleClass('active');
    $(this).find('.click__turn').toggleClass('arrow-animate');
    $(this).parent().find('.product-selector__row').slideToggle();
    $(this).parent().find('.product-selector-btn__wrap').slideToggle();
  })

  $('.nav__plus').click(function() {
    $(this).toggleClass('active');
    $(this).parent().parent().find('.dropdown').removeClass('hover');
    $(this).parent().find('.dropdown-menu').addClass('show');
  })


  $('.dropdown-menu__close').click(function() {
    $(this).parent().parent().parent().find('.dropdown-menu').removeClass('show');
    $(this).parent().parent().parent().parent().find('.nav__plus').removeClass('active');
    $(this).parent().parent().parent().parent().find('.main-link').removeClass('active');
  })


  // 優惠券彈窗
  $(function() {
    $(".coupon_modal").hide();
    $(".top-coupon a").click(function() {
      $(".coupon_modal").slideToggle();
      $(".coupon_modal").addClass('active');
    })
  });

  // 優惠券關閉按鈕
  $('.coupon_close').click(function() {
    $(this).parent().slideToggle();
  })

  // 優惠券滾動時固定位置
  var jQueryCouponSticky = jQuery(".coupon_modal");
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > 100) {
      jQueryCouponSticky.addClass('c-sticky');
    } else {
      jQueryCouponSticky.removeClass('c-sticky');
    }
  });

  // 更換select選單被選中後, 出現指定顏色, 顏色需在css寫
  $('.jcf-select').on('change', function() {
    $(this).addClass('active');
  });


  //漢堡選單時，點選主分類(有次分類)時，不會轉跳連結，而是下拉選單
  function isMobile() {
    try { document.createEvent("TouchEvent"); return true; } catch (e) { return false; }
  }
  if (isMobile()) {
    $('.main-link').click(function(event) {
      $('.main-link').parent().removeClass('hover');
      event.preventDefault();
    });

  } else {}


  // 在寬度小於768時，讓次分類選單出現
  if ($(window).width() < 768) {
    $(".main-link").click(function() {
      $(this).toggleClass('active');
      $(this).parent().find('.dropdown-menu').addClass('show');
    });
  }

  // 雙層下拉選單
  $('.select__head').click(function() {
    $(this).siblings().children('.multi-select').slideToggle();
  })

  $(".main-menu.multi>li").each(function() {
    $(this).on("click", function() {
      $(this).parent().slideUp();
      $(this).parent().siblings().find('.sub-menu').slideUp();
      var clickName = $(this).find('a').prop('class');
      $('#' + clickName).slideDown();
    });
  });

  $('.back-to-select').click(function() {
    $(this).parent().parent().slideUp();
    $('.main-menu').slideDown();
  })

  // 單層下拉選單
  $('.select__head').click(function() {
    $(this).siblings().children('.single-select').slideToggle();
  })

  if ($(window).width() < 991) {
    $('.select__head').click(function() {
      $('.select-items.active').slideUp(); //有active的子選單上拉收合
      $('.select__head a').removeClass('rotate')//箭頭初始化

      if ($(this).siblings().children('.select-items').hasClass('active') == false) { // 如果沒有active
        $('.select-items.active').removeClass('active'); //有active的子選單刪除active
        $(this).siblings().children('.select-items').slideDown(); //子選單下拉
        $(this).children('a').addClass('rotate'); //箭頭往上
      };

      $(this).siblings().children('.select-items').toggleClass('active'); //子選單加active
      $('.product-selector__row').addClass('front');
      $('.mobile-search-box').addClass('front');
      $('.select__overlay--js').show();
    })
  }

  $('.select__head a').click(function() {
    $(this).toggleClass('rotate');
  })

  // 漢堡選單按鈕
  document.getElementById('menu-toggle')
    .addEventListener('click', function() {
      document.body.classList.toggle('nav-open');
    });

  // 數字按鈕
  $(document).ready(function() {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function() {
      $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function() {
      $('.count').val(parseInt($('.count').val()) - 1);
      if ($('.count').val() == 0) {
        $('.count').val(1);
      }
    });
  });

});

// 愛心切換
function changeIcon(anchor) {
  var icon = anchor.querySelector("i");
  icon.classList.toggle('fa-heart-o');
  icon.classList.toggle('fa-heart');
}
