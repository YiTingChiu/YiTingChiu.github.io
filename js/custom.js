(function($) {

    // header - responsive
    const menu = document.querySelector('.menu');
    const menuSection = menu.querySelector('.menu-section');
    const menuArrow = menu.querySelector('.menu-mobile-arrow');
    const menuClosed = menu.querySelector('.menu-mobile-close');
    const menuTrigger = document.querySelector('.menu-mobile-trigger');
    const menuOverlay = document.querySelector('.overlay');
    let subMenu;

    menuSection.addEventListener('click', (e) => {
        if (!menu.classList.contains('active')) {
            return;
        }

        if (e.target.closest('.menu-item-has-children')) {
            const hasChildren = e.target.closest('.menu-item-has-children');
            showSubMenu(hasChildren);
        }
    });

    menuArrow.addEventListener('click', () => {
        hideSubMenu();
    });

    menuTrigger.addEventListener('click', () => {
        toggleMenu();
    });

    menuClosed.addEventListener('click', () => {
        toggleMenu();
    });

    menuOverlay.addEventListener('click', () => {
        toggleMenu();
    });

    function toggleMenu() {
        menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    }

    function showSubMenu(hasChildren) {
        subMenu = hasChildren.querySelector('.menu-subs');
        subMenu.classList.add('active');
        subMenu.style.animation = 'slideLeft 0.5s ease forwards';
        const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
        menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
        menu.querySelector('.menu-mobile-header').classList.add('active');
    }

    function hideSubMenu() {
        subMenu.style.animation = 'slideRight 0.5s ease forwards';
        setTimeout(() => {
            subMenu.classList.remove('active');
        }, 300);

        menu.querySelector('.menu-mobile-title').innerHTML = '';
        menu.querySelector('.menu-mobile-header').classList.remove('active');
    }

    window.onresize = function() {
        if (this.innerWidth > 991) {
            if (menu.classList.contains('active')) {
                toggleMenu();
            }
        }
    };

    // header - sticky
    if ($('#header').length) {
        window.onscroll = function() { myFunction() };

        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }

    // skill bar
    if ($('.skill').length) {
        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function() {

            if (visible($('.bar'))) {
                if ($('.bar').hasClass('loaded')) return;
                $('.bar').addClass('loaded');

                $(".bar").each(function() {
                    $(this).find(".bar-inner").animate({
                        width: $(this).attr("data-width")
                    }, 2000)
                });
            }
        })
    }


    // portfolio slide
    if ($('.portfolio').length) {
        var swiper = new Swiper(".portfolioSwiper", {
            slidesPerView: 1.8,
            speed: 1000,
            effect: "coverflow",
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.5
                },
                // when window width is >= 640px
                576: {
                    slidesPerView: 1.8
                }
            }
        });
    }

    // wow
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }

})(window.jQuery);


// typing animation
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};