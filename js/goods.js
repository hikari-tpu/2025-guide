document.addEventListener("DOMContentLoaded", () => {
    // ハンバーガーメニューの開閉
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");

    console.log("hamburger:", hamburger);
    console.log("menu:", menu);

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");

    });

    // 画面全体のクリックを監視して、ハンバーガーやメニュー以外をクリックしたら閉じる
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            menu.classList.remove('active');
        }

    });

    // Swiper初期化
    const worksSwiper = new Swiper(".works-swiper", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".works-swiper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".works-swiper .swiper-button-next",
            prevEl: ".works-swiper .swiper-button-prev",
        },
    });

    const goodsSwiper = new Swiper(".goods-swiper", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".goods-swiper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".goods-swiper .swiper-button-next",
            prevEl: ".goods-swiper .swiper-button-prev",
        },
    });
});
