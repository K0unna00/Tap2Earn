document.addEventListener("DOMContentLoaded", () => {
  const loginPopup = document.getElementById("popupParent");
  const popupCloseBtn = document.getElementById("popupCloseBtn");

  popupCloseBtn.addEventListener("click", () => {
    loginPopup.classList.toggle("d-none");
  });
})