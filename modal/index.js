let modalBox = document.querySelector(".modal-box");
let dim = document.querySelector(".dim");
let openBtn = document.querySelector(".modal-open-btn");
let closeBtn = document.querySelector(".modal-close-btn");

const modalClick = () => {
  let containClass = modalBox.classList.contains("on");

  if (containClass) {
    modalBox.classList.remove("on");
    modalBox.style.display = "none";
    dim.style.display = "none";
  } else {
    modalBox.classList.add("on");
    modalBox.style.display = "block";
    dim.style.display = "block";
  }
};

openBtn.addEventListener("click", modalClick);
closeBtn.addEventListener("click", modalClick);
