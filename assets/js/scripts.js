$(document).ready(function() {
    // $(".header, .hero, .company, .services, .consult, .specs, .quote, .cases, .partners, .reviews").hide();

    const burger_button = $("#burger_button");
    const services_link = $("#open_services");
    const overlay = $(".overlay");
    const body = $("body");
    const burger_menu = $(".burger-menu");

    const hero_slider = new Swiper(".hero-slider", {
        slidesPerView: 1,
        loop: true,
        autoplayDisableOnInteraction: false,
        // effect: "fade",

        autoplay: {
            delay: 3000
        },

        navigation: {
            nextEl: ".hero-next"
        },

        pagination: {
            el: ".hero-pagination",
            type: "bullets",
            clickable: true,
            renderBullet: function (index, className) {
                return `
                    <div class="hero-pagination-slide ${className}">
                        <div class="hero-pagination-title">${$(".hero-slide")[index].dataset.slideTitle}</div>
                        <div class="hero-pagination-progress"><span></span></div>
                    </div>
                `;
            }
        },
    });

    const specs_slider = new Swiper(".specs-slider", {
        navigation: {
            nextEl: ".spec-next",
            prevEl: ".spec-prev",
        },

        scrollbar: {
            el: ".specs-scroll"
        },

        breakpoints: {
            320: {
                slidesPerView: 2.1,
                spaceBetween: 10,
                scrollbar: {
                    el: ".specs-scroll"
                }
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    const reviews_slider = new Swiper(".reviews-slider", {
        navigation: {
            nextEl: ".reviews-next",
            prevEl: ".reviews-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 2.1,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    const cases_slider = new Swiper(".cases-slider", {
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
            nextEl: ".case-next",
            prevEl: ".case-prev",
        },

        scrollbar: {
            el: ".cases-scroll",
        },

        on: {
            init: function(e) {
                $(".slides-count").text((e.activeIndex + 1) + " / " + e.slides.length);
            },
            slideChange: function(e) {
                $(".slides-count").text((e.activeIndex + 1) + " / " + e.slides.length);
            },
        }
    });

    const partners_slider = new Swiper(".partners-slider", {
        navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 6,
                spaceBetween: 30,
            }
        }
    });

    const news_slider = new Swiper(".news-slider", {
        navigation: {
            nextEl: ".news-next",
            prevEl: ".news-prev",
        },

        scrollbar: {
            el: ".news-scroll"
        },

        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    Fancybox.bind("[data-fancybox]", {});

    // burger script
    burger_button.on("click", function() {
        openBurger();
    });

    const openBurger = () => {
        if (body.hasClass("open-services")) {
            body.removeClass("open open-services");
            overlay.stop().slideToggle();
            $(".services-menu").stop().slideToggle();
        } else {
            body.toggleClass("open open-burger");
            burger_menu.stop().slideToggle();
            overlay.stop().slideToggle();
        }
    }

    const openServices = () => {
        body.toggleClass("open open-services");
        overlay.stop().slideToggle();
        $(".services-menu").stop().slideToggle();
    }

    services_link.on("click", function() {
        openServices();
    });

    // map
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.736402, 37.713764],
            zoom: 15
        }),
        myPlacemark = new ymaps.Placemark([55.736402, 37.713764], {
            balloonContentHeader: "Правовой эксперт",
            balloonContentBody: "Москва, ул. Смирновская, 25 стр. 16 ",
            balloonContentFooter: "пн - пт 9:00 - 19:00",
            hintContent: "Наш адрес"
        });

        myMap.geoObjects.add(myPlacemark);

        // Открываем балун на карте (без привязки к геообъекту).
        myMap.balloon.open([55.736402, 37.713764], `
            <div class="balloon-wrap">
                <img src='assets/img/logo-dark.png' style='height: 47px'>
            </div>
        `, {
            // Опция: не показываем кнопку закрытия.
            closeButton: false,
        });
    }
});