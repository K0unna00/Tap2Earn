document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.getElementsByClassName("tab");
    const tabProfileBtn = document.getElementById("tab-profile");
    const profileForm = document.getElementById("profileForm");
    const withdrawSection = document.getElementById("withdrawSection");


    Array.from(tabBtns).forEach(tab => {
        tab.addEventListener("click", function () {
            Array.from(tabBtns).forEach(sibling => sibling.classList.remove("active"));

            this.classList.add("active");

            if (tabProfileBtn.classList.contains('active')) {
                profileForm.classList.remove('d-none');
                withdrawSection.classList.add('d-none');
            }
            else {
                profileForm.classList.add('d-none');
                withdrawSection.classList.remove('d-none');
            }
        });
    });



    const selected = document.querySelector('.selected-option');
    const options = document.querySelector('.dropdown-options');

    selected.addEventListener('click', () => {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.dropdown-options li').forEach((item) => {
        item.addEventListener('click', () => {
            selected.innerHTML = item.innerHTML;
            options.style.display = 'none';
        });
    });

  

});

