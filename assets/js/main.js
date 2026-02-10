const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav__item"),
header = document.getElementById("header");

// ===============================
// Mobile Menu Toggle
// ===============================
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
});

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--open");
        changeIcon();
    });
});

function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

// ===============================
// Swiper (Testimonials)
// ===============================
new Swiper(".testimonial__wrapper", {
loop: true,
spaceBetween: 30,
centeredSlides: true,
grabCursor: true,
slidesPerView: 1,
pagination: {
el: ".swiper-pagination",
clickable: true,
      },
breakpoints: {
520: { slidesPerView: "auto" },
    },
});

// ===============================
// Header Scroll Effect
// ===============================
window.addEventListener("scroll", () => {
    header.classList.toggle("header--scroll", window.scrollY > 40);
});

// ===============================
// ScrollReveal (FIXED)
// ===============================
const sr = ScrollReveal({
duration: 2000,
distance: "100px",
delay: 400,
reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
          ".skills__title, .skills__content, .experience__name, .experience__item, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
{
delay: 500,
interval: 100,
}
);

sr.reveal(".qualification__footer-text", { origin: "left" });
sr.reveal(".qualification__footer .btn", { origin: "right" });
