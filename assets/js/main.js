document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const profileBtn = document.getElementById("profileBtn");
  const homeBtn = document.getElementById("homeBtn");

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



  profileBtn.addEventListener("click", function () {
    window.location.href = "profile.html";
  });

  homeBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  
});
