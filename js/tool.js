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
});
