document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
  
        document.querySelectorAll(".accordion-content").forEach(item => {
          if (item !== content && item.classList.contains("open")) {
            item.classList.remove("open");
          }
        });
  
        content.classList.toggle("open");
      });
    });
  });