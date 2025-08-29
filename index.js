// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

var typed = new Typed("#typed-role", {
    strings: ["Fullstack Developer", "Frontend Developer", "Backend Developer", "Java Programmer"],
    typeSpeed: 80,      
    backSpeed: 50,      
    backDelay: 1500,    
    loop: true,         
    showCursor: true,   
    cursorChar: "|"     
  });