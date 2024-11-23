document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const loginPopup = document.getElementById("popupParent");
  const loginBtn = document.getElementById("loginBtn");
  const popupCloseBtn = document.getElementById("popupCloseBtn");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item !== content && item.classList.contains("open")) {
          item.classList.remove("open");
        }
      });

      content.classList.toggle("open");
    });
  });

  loginBtn.addEventListener("click", () => {
    loginPopup.classList.toggle("d-none");
  });

  popupCloseBtn.addEventListener("click", () => {
    loginPopup.classList.toggle("d-none");
  });
});
