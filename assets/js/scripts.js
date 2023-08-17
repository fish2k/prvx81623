$(document).ready(function() {
    // $(".header, .hero, .company, .services").hide();

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
});