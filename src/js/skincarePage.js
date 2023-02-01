const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const containerEl = document.querySelector("#skincare-page .container");
containerEl.style.paddingTop = `${navbarHeight}px`;
