
// toggle menu to open navbar

const navbar = document.getElementById("navbar");
const open = document.getElementById("open");
const close = document.getElementById("close");
const body = document.getElementById("body");

function openFunc() {
    navbar.classList.toggle("active");
    close.style.display = "block";
    open.style.display = "none";
}

function closeFunc() {
    navbar.classList.toggle("active");
    open.style.display = "block";
    close.style.display = "none";
}