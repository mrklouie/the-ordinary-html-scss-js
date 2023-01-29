import Swiper from "swiper/swiper-bundle.esm";
import "swiper/swiper-bundle.min.css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
