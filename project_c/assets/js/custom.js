(function($) {
  "use strict";
  // /*========== Responsive Menu  ==========*/
  $('.header__area-main-menu').meanmenu({
    meanMenuContainer: '.responsive-menu',
    meanScreenWidth: '991',
    meanMenuOpen: '<span></span><span></span><span></span>',
    meanMenuClose: '<i class="flaticon-close"></i>'
  });
  // /*==========  wow  ==========*/
  new WOW().init();
  /*========== menu-bar sticky  ==========*/
  $(window).on('scroll', function() {
    var scrollDown = $(window).scrollTop();
    if (scrollDown < 135) {
      $(".header__area-menu").removeClass("header__area-menu-sticky-menu");
    } else {
      $(".header__area-menu").addClass("header__area-menu-sticky-menu");
    }
  });
  // /*==========  banner  ==========*/
  var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  /*==========  counterUp  ==========*/
  var counter = $('.counter');
  counter.counterUp({
    time: 2500,
    delay: 100
  });
  /*==========  Search  =========*/
  $('.header__area-search-icon.open').on('click', function() {
    $('.header__area-search-box').fadeIn().addClass('active');
  });
  $('.header__area-search-box').on('click', function() {
    $(this).fadeIn().removeClass('active');
  });
  $('.header__area-search-box-icon').on('click', function() {
    $('.header__area-search-box').fadeOut().removeClass('active');
  });
  $('.header__area-search-box form').on('click', function(e) {
    e.stopPropagation();
  });
  /*==========  img-popup  ==========*/
  $('.img-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  /*==========  video-popup  ==========*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
  });
  /*==========  background  ==========*/
  $("[data-background]").each(function() {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })
  /*========== scroll to top  ==========*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
      $('.scroll-top').fadeIn(200);
    } else {
      $('.scroll-top').fadeOut(200);
    }
  });
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
  /*==========  theme loader  ==========*/
  $(window).on("load", function() {
    $(".theme-loader").fadeOut(500);
    /*==========  Progress Bar  ==========*/
    if ($('.experience__area-skill-bar').length) {
      $('.experience__area-skill-bar').appear(function() {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
      }, {
        accY: 0
      });
    };
    // /*==========  Portfolio  ==========*/
    var swiper = new Swiper(".portfolio__area-slider", {
      slidesPerView: 3,
      loop: true,
      speed: 1500,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        },
      }
    });
    // /*==========  testimonial  ==========*/
    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 2,
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 2
        },
      }
    });

    // /*==========  Tab  ==========*/
    // Show the first tab by default
    $('.tabs-stage div').hide();
    $('.tabs-stage div:first').show();
    $('.tabs-nav li:first').addClass('tab-active');

    // Change tab class and display content
    $('.tabs-nav a').on('click', function(event) {
      event.preventDefault();
      $('.tabs-nav li').removeClass('tab-active');
      $(this).parent().addClass('tab-active');
      $('.tabs-stage div').hide();
      $($(this).attr('href')).show();
    });

    // /*========== Product-info的輪播  ==========*/
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 4,
      // freeMode: true,
      // watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4
        }
      }
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });



    // /*========== About - timeline的js  ==========*/
    $(function() {
      var timelineBlocks = $('.timeline-item'),
        offset = 0.8;

      //hide timeline blocks which are outside the viewport
      hideBlocks(timelineBlocks, offset);

      //on scolling, show/animate timeline blocks when entering the viewport
      $(window).on('scroll', function() {
        (!window.requestAnimationFrame) ?
        setTimeout(function() { showBlocks(timelineBlocks, offset); }, 100): window.requestAnimationFrame(function() { showBlocks(timelineBlocks, offset); });
      });

      function hideBlocks(blocks, offset) {
        blocks.each(function() {
          ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
        });
      }

      function showBlocks(blocks, offset) {
        blocks.each(function() {
          ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');

        });
      }
    });


  });
})(jQuery);