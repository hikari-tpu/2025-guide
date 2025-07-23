document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menuLine");
    const visual = document.querySelector(".first");

    function toggleHeader() {
        const scrollY = window.scrollY;
        const visualBottom = visual.offsetTop + visual.offsetHeight;

        // スマホ
        if (window.innerWidth <= 600) {
            if (scrollY > visualBottom) {
                header.classList.add("visible");
                hamburger.classList.add("fixed");
            } else {
                header.classList.add("visible"); // 表示は常に
                hamburger.classList.remove("fixed"); // 固定解除
                menu.classList.remove("active");
            }
        }
        // デスクトップ
        else {
            if (scrollY > visualBottom) {
                header.classList.add("visible");
                hamburger.style.display = "flex";
                hamburger.classList.add("fixed");
            } else {
                header.classList.remove("visible");
                hamburger.style.display = "none";
                hamburger.classList.remove("fixed");
                menu.classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", toggleHeader);
    window.addEventListener("resize", toggleHeader);
    toggleHeader();

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove("active");
        }
    });
});
