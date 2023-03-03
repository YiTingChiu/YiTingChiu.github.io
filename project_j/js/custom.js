// 頁面Sticky
window.onscroll = function() { headerSticky() };
var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function headerSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// wow
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
});
wow.init();