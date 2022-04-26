const container = document.querySelector(".container");
const playStation = document.querySelector(".left");
const xBoxx = document.querySelector(".right");

// playStation.addEventListener("mouseenter", () => {
//   container.classList.add("hover-left");
//   container.classList.remove("hover-right");
// });
// xBoxx.addEventListener("mouseenter", () => {
//   container.classList.add("hover-right");
//   container.classList.remove("hover-left");
// });

playStation.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
playStation.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

xBoxx.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
xBoxx.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
/*  */
