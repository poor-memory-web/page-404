document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector(".menu");
    let icon = document.querySelector(".nav__icon");

    icon.addEventListener("click", function() {
        if (this.classList.contains("fa-bars")) {
            this.classList.remove("fa-bars");
            this.classList.add("fa-times");
            menu.style.left = "0";
        } else {
            this.classList.remove("fa-times");
            this.classList.add("fa-bars");
            menu.style.left = "-220px";
        }
    });
});