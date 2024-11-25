document.addEventListener("DOMContentLoaded", () => {
  const loginPopup = document.getElementById("popupParent");
  const popupCloseBtn = document.getElementById("popupCloseBtn");
  const loginBtn = document.getElementById("loginBtn");


  loginBtn.addEventListener("click", () => {
    loginPopup.classList.toggle("d-none");
  });

  popupCloseBtn.addEventListener("click", () => {
    loginPopup.classList.toggle("d-none");
  });
})