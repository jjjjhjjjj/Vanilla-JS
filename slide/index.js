const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector("li:first-child");
const lastSlide = document.querySelector("li:last-child");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");

const slide = (type) => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  let defaultSlide = firstSlide;

  if (type === "minus") {
    defaultSlide = lastSlide;
  }

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    let nextSlide = currentSlide.nextElementSibling;

    if (type === "minus") {
      nextSlide = currentSlide.previousElementSibling;
    }

    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      defaultSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    defaultSlide.classList.add(SHOWING_CLASS);
  }
};

slide();
setInterval(slide, 4000);
plusButton.addEventListener("click", slide);
minusButton.addEventListener("click", () => slide("minus"));
