const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const closeButton = document.querySelector("#close");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
