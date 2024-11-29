document.addEventListener("DOMContentLoaded", () => {
    const filterPopup = document.getElementById("filterPopupParent");
    const popupCloseBtn = document.getElementById("popupCloseBtn");
    const filterBtn = document.getElementById("filterBtn");
  
  
    filterBtn.addEventListener("click", () => {
      filterPopup.classList.toggle("d-none");
    });
  
    popupCloseBtn.addEventListener("click", () => {
      filterPopup.classList.toggle("d-none");
    });
  })

function goBackBtnClick(){
    window.location.href = "profile.html"
}