const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const heroWrapper = document.querySelector("#skincare-page .hero-wrapper");
const skincareHero = document.querySelector("#skincare-hero-wrapper");

heroWrapper.style.top = `${navbarHeight}px`;
heroWrapper.style.setProperty("--hero-height", `${navbarHeight}px`);
