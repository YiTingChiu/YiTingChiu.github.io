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
  
  $("#check-coypinfo").change(function() {
    if(this.checked) {
      $(this).next().next().addClass('change-red');
    }
    else{
      $(this).next().next().removeClass('change-red');
    }
  });

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

  $("#check-agree").change(function() {
    if(this.checked) {
      $(this).next().next().addClass('change-red');
    }
    else{
      $(this).next().next().removeClass('change-red');
    }
  });

  /*----------  登入註冊input + btn判斷  ----------*/

  var accountCheck1=false;
  var passwordCheck1=false;

  function check_funtion1() {
    if (accountCheck1 == true && passwordCheck1 == true) {
      $('#cart-login .run-btn').show();
      $('#cart-login .no-run-btn').hide();
    } else {
      $('#cart-login .run-btn').hide();
      $('#cart-login .no-run-btn').show();
    }
  }

  $('#cart-login .modal-account').on('keyup', function() {
    if ($(this).val() != '') {
      accountCheck1=true;
    }
    else{
      accountCheck1=false;
    }
    check_funtion1();
  });

  $('#cart-login .modal-psw').on('keyup', function() {
    if ($(this).val() != '') {
      passwordCheck1=true;
    }
    else{
      passwordCheck1=false;
    }
    check_funtion1();
  });


  /*----------  登入彈窗 input + btn判斷  ----------*/

  var accountCheck2=false;
  var passwordCheck2=false;

  function check_funtion2() {
    if (accountCheck2 == true && passwordCheck2 == true) {
      $('#member-login .run-btn').show();
      $('#member-login .no-run-btn').hide();
    } else {
      $('#member-login .run-btn').hide();
      $('#member-login .no-run-btn').show();
    }
  }

  $('#member-login .modal-account').on('keyup', function() {
    if ($(this).val() != '') {
      accountCheck2=true;
    }
    else{
      accountCheck2=false;
    }
    check_funtion2();
  });

  $('#member-login .modal-psw').on('keyup', function() {
    if ($(this).val() != '') {
      passwordCheck2=true;
    }
    else{
      passwordCheck2=false;
    }
    check_funtion2();
  });


  /*----------  註冊彈窗 input + btn判斷  ----------*/

  var accountCheck3=false;
  var passwordCheck3=false;

  function check_funtion3() {
    if (accountCheck3 == true && passwordCheck3 == true) {
      $('#member-register .run-btn').show();
      $('#member-register .no-run-btn').hide();
    } else {
      $('#member-register .run-btn').hide();
      $('#member-register .no-run-btn').show();
    }
  }

  $('#member-register .modal-account').on('keyup', function() {
    if ($(this).val() != '') {
      accountCheck3=true;
    }
    else{
      accountCheck3=false;
    }
    check_funtion3();
  });

  $('#member-register .modal-psw').on('keyup', function() {
    if ($(this).val() != '') {
      passwordCheck3=true;
    }
    else{
      passwordCheck3=false;
    }
    check_funtion3();
  });


  /*----------  忘記密碼彈窗 input + btn判斷  ----------*/

  var forgetCheck=false;

  function forget_funtion() {
    if (forgetCheck == true ) {
      $('.run-btn-1').show();
      $('.no-run-btn-1').hide();
    } else {
      $('.run-btn-1').hide();
      $('.no-run-btn-1').show();
    }
  }

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

  $('#member-login').on("shown.bs.modal",function(){
    $(document.body).addClass("modal-open");
  });

  $('#member-register').on("shown.bs.modal",function(){
    $(document.body).addClass("modal-open");
  });

  $('#cart-login').on("shown.bs.modal",function(){
    $(document.body).addClass("modal-open");
  });

  $('#member-login').on("hidden.bs.modal",function(){
    $(document.body).removeClass("modal-open");
  });

  $('#member-register').on("hidden.bs.modal",function(){
    $(document.body).removeClass("modal-open");
  });

  $('#cart-login').on("hidden.bs.modal",function(){
    $(document.body).removeClass("modal-open");
  });

  /*----------  優惠券彈窗  ----------*/
  $(function(){
    $(".coupon_modal").hide();
    $(".top-coupon a").click(function(){
      $(this).addClass('active');
      $(".coupon_modal").slideToggle();
    })
  });


})(jQuery);
