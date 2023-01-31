const container = document.querySelector(".container");
const body = document.querySelector("body");

paceOptions = {
  ajax: true,
  document: true,
  eventLag: false,
};

Pace.on("done", function () {
  container.classList.add("active");
  body.classList.add("active");
});
