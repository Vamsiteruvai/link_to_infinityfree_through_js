// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const scrollBtn = document.getElementById("scrollTopBtn");
const toast = document.getElementById('toast');
const downloadBtn = document.getElementById('downloadCV');

menuBtn.addEventListener("click", () => {
     mobileMenu.classList.remove("hidden");
    setTimeout(()=>{
        mobileMenu.classList.add("hidden");
    },5000);
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

// scrolling and navigation towaords up
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.classList.remove("hidden");
        scrollBtn.classList.add("opacity-100");
    } else {
        scrollBtn.classList.add("hidden");
        scrollBtn.classList.remove("opacity-100");
    }
});

scrollBtn.addEventListener("click", () => {
    document.getElementById("home")
        .scrollIntoView({ behavior: "smooth" });
});

//downloading effect
downloadBtn.addEventListener('click', () => {
    toast.classList.add('show');

    // hide after 2.5s
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
});

