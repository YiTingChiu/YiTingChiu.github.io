(function ($) {
  "use strict";

  /*----------  Menu sticky and scrol top  ----------*/

  var windows = $(window);
  var screenSize = windows.width();

  windows.on("scroll", function () {
    var scroll = windows.scrollTop();

    if (scroll >= 400) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }

  });

  /*----------  Scroll to top  ----------*/

  $(".scroll-top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  /*----------  confirm 側欄下拉  ----------*/

  $(function(){
    // $(".purchase-list").hide(); 
    $('.toggle-btn').click(function(){ 
      $(this).parent().next().slideToggle(); 
      $(this).toggleClass('top');
    })
  });

  /*----------  confirm 快速加入會員/同步資訊 標題顏色改變  ----------*/

  $("#check-registration").change(function() {
    if(this.checked) {
      $(this).next().next().addClass('change-red');
    }
    else{
      $(this).next().next().removeClass('change-red');
    }
  });

  $("#check-synchronize").change(function() {
    if(this.checked) {
      $(this).next().next().addClass('change-red');
    }
    else{
      $(this).next().next().removeClass('change-red');
    }
  });

  /*----------  登入註冊input + btn判斷  ----------*/

  var accountCheck=false;
  var passwordCheck=false;
  var forgetCheck=false;

  check_funtion();

  function check_funtion() {
    if (accountCheck == true && passwordCheck == true) {
      $('.run-btn').show();
      $('.no-run-btn').hide();
    } else {
      $('.run-btn').hide();
      $('.no-run-btn').show();
    }
  }

  function forget_funtion() {
    if (forgetCheck == true ) {
      $('.run-btn-1').show();
      $('.no-run-btn-1').hide();
    } else {
      $('.run-btn-1').hide();
      $('.no-run-btn-1').show();
    }
  }

  $('.modal-account').on('keyup', function() {
    if ($(this).val() != '') {
      accountCheck=true;
    }
    else{
      accountCheck=false;
    }
    check_funtion();
  });

  $('.modal-psw').on('keyup', function() {
    if ($(this).val() != '') {
      passwordCheck=true;
    }
    else{
      passwordCheck=false;
    }
    check_funtion();
  });

  $('.modal-account1').on('keyup', function() {
    if ($(this).val() != '') {
      forgetCheck=true;
    }
    else{
      forgetCheck=false;
    }
    forget_funtion();
  });

  /*----------  註冊登入彈窗切換  ----------*/

  $('.cart-login').click(function(){ 
    $('.login__modal').modal('hide');
    $('#cart-login').modal('show');
  })

  $('.member-login').click(function(){ 
    $('.login__modal').modal('hide');
    $('#member-login').modal('show');
  })

  $('.member-register').click(function(){ 
    $('.login__modal').modal('hide');
    $('#member-register').modal('show');
  })

  $('.forget-sendpw').click(function(){ 
    $('.login__modal').modal('hide');
    $('#forget-sendpw').modal('show');
  })

  /*----------  多層Modal關閉下層也可滾動  ----------*/

  // $('#member-login').on("shown.bs.modal",function(){
  //   $(document.body).addClass("modal-open");
  // });

  // $('#member-register').on("shown.bs.modal",function(){
  //   $(document.body).addClass("modal-open");
  // });

  // $('#cart-login').on("shown.bs.modal",function(){
  //   $(document.body).addClass("modal-open");
  // });

  // $('#member-login').on("hidden.bs.modal",function(){
  //   $(document.body).removeClass("modal-open");
  // });

  // $('#member-register').on("hidden.bs.modal",function(){
  //   $(document.body).removeClass("modal-open");
  // });

  // $('#cart-login').on("hidden.bs.modal",function(){
  //   $(document.body).removeClass("modal-open");
  // });


})(jQuery);
