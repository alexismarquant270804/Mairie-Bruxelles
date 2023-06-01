document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const burgerMenu = document.querySelector(".header_burger");
    const navMenu = document.querySelector(".header_nav_menu");
    const navClose = document.querySelector(".header_nav_close");
  
    burgerMenu.addEventListener("click", function() {
      header.classList.add("header_nav_open");
    });
  
    navClose.addEventListener("click", function() {
      header.classList.remove("header_nav_open");
    });
  
    document.addEventListener("click", function(event) {
      if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        header.classList.remove("header_nav_open");
      }
    });
  });
  