const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalBtm = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".search-close-switch");

  modalBtm.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

modal()