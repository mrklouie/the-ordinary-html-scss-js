import ConfettiGenerator from "confetti-js";

var confettiSettings = { target: "confetti", rotate: true };
var confetti = new ConfettiGenerator(confettiSettings);

const form = document.getElementById("regimen-builder-form");
const overlay = document.getElementById("overlay");
const closeModal = document.querySelectorAll(".close-modal");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal__body");
const modalHeaderHeight = document
  .querySelector(".modal__header")
  .getBoundingClientRect().height;

modalBody.style.setProperty("--modal-header-height", `${modalHeaderHeight}px`);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  modal.classList.add("active");
  overlay.classList.add("active");

  confetti.render();
});

closeModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    confetti.clear();
  });
});
