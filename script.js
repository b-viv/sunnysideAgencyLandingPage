const menuClose = document.querySelector(".menu-close");
const menuOpen = document.querySelector(".menu-open");
const navbar = document.querySelector(".navbar");


menuClose.addEventListener("click", function hideMenu() {
    navbar.style.display = "none";
    menuClose.style.display = "none";
    menuOpen.style.display = "inline-block";
});
menuOpen.addEventListener("click", function showMenu() {
    navbar.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuOpen.style.display = "none";
});

