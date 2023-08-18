$(document).ready(function() {
    // $(".header, .hero, .company, .services, .consult, .specs, .quote, .cases, .partners").hide();

    const hero_slider = new Swiper(".hero-slider", {
        slidesPerView: 1,
        loop: true,
        autoplayDisableOnInteraction: false,
        effect: "fade",

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
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
            nextEl: ".spec-next",
            prevEl: ".spec-prev",
        }
    });

    const reviews_slider = new Swiper(".reviews-slider", {
        slidesPerView: 3,
        spaceBetween: 30,

        navigation: {
            nextEl: ".reviews-next",
            prevEl: ".reviews-prev",
        }
    });

    const cases_slider = new Swiper(".cases-slider", {
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
            nextEl: ".case-next",
            prevEl: ".case-prev",
        }
    });

    const partners_slider = new Swiper(".partners-slider", {
        slidesPerView: 6,
        spaceBetween: 30,

        navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
        }
    });

    Fancybox.bind("[data-fancybox]", {});
});