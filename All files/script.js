const menu = document.querySelector(".header-content");
const menuIcon = document.querySelector(".hamburgur-menu");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle('open-menu');
});

closeIcon.addEventListener("click", () => {
    menu.classList.toggle('open-menu');
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backToTop").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

