(function($) {
  "use strict";

  // 語言按鈕
  $('.langauge__menu').on('click', function(event) {
    $(this).toggleClass('active');
    $(this).find('.language__dropdown').slideToggle();
  });

  // 點擊空白處語言選單消失
  // document.addEventListener('click', function() {
  //   $('.language__dropdown').fadeOut();
  // }, true);

  // 搜尋按鈕
  $('.mobile_search-btn').on('click', function(event) {
    $(this).toggleClass('active');
    $(this).siblings('.search-btn__wrap form').slideToggle();
    $('.search__overlay--js').fadeIn();
  });

  // 點擊其他地方可直接關閉
  $('.search__overlay--js').on('click', function(event) {
    $(this).fadeOut();
    $('.search-btn__wrap form').fadeOut();
  });

  $('#productTab a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#downloadTab a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  })

  // preloader
  $(window).load(function() {
    $(".preloader").fadeOut(1800);
  })

  // cookie
  $('.btn-all').on('click', function() {
    $('.cookie').fadeOut(300);
  });

})(window.jQuery);