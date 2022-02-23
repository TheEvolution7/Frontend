var swiper = new Swiper(".swiper-text", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    speed: 800,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    grabCursor: false,
    autoHeight: true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-thumb .vlt-swiper-button-next",
        prevEl: ".swiper-button-thumb .vlt-swiper-button-prev",
    },
  });
var swiper2 = new Swiper(".swiper-box", {
    spaceBetween: 10,
    speed: 1e3,
    pagination: {
        el: ".swiper-button-thumb .vlt-swiper-pagination",
        clickable: !1,
        type: "fraction",
            renderFraction: function (index, total) {
                return '<span class="swiper-pagination-current"></span><span class="sep">/</span><span class="swiper-pagination-total"></span>'
        }
    },
    navigation: {
        nextEl: ".swiper-button-thumb .vlt-swiper-button-next",
        prevEl: ".swiper-button-thumb .vlt-swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
