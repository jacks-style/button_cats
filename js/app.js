const BUTTON = document.querySelector(".catsbtn");
const IMAGE = document.querySelector(".catspic");

BUTTON.addEventListener("mouseover", () => {
  IMAGE.style.display = "block";
  IMAGE.style.animation = "start 0.2s ease-in-out";
});
BUTTON.addEventListener("click", () => {
  IMAGE.style.animation = "move 1.1s ease-in-out";
});

BUTTON.addEventListener("mouseout", () => {
  IMAGE.style.animation = "end 0.2s ease-in-out forwards";
});
