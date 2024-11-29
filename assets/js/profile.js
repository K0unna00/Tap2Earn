document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.getElementsByClassName("tab");
    const tabProfileBtn = document.getElementById("tab-profile");
    const profileForm = document.getElementById("profileForm");
    const withdrawSection = document.getElementById("withdrawSection");
    const selected = document.querySelector('.selected-option');
    const options = document.querySelector('.dropdown-options');
    const addAddressBtn = document.getElementById('addAddressBtn');
    const confirmAddressBtn = document.getElementById('confirmAddressBtn');
    const addressPopup = document.getElementById('addressPopupParent');
    const addressSuccessPopup = document.getElementById('addressSuccessPopupParent');
    const addressPopupCloseBtn = document.getElementById('addressPopupCloseBtn');
    const addressSuccesssPopupCloseBtn = document.getElementById('addressSuccesssPopupCloseBtn');

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

    selected.addEventListener('click', () => {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.dropdown-options li').forEach((item) => {
        item.addEventListener('click', () => {
            selected.innerHTML = item.innerHTML;
            options.style.display = 'none';
        });
    });

    addAddressBtn.addEventListener("click", () => {
        addressPopup.classList.toggle("d-none");
    });
    addressPopupCloseBtn.addEventListener("click", () => {
        addressPopup.classList.toggle("d-none");
    });

    confirmAddressBtn.addEventListener("click", () => {
        addressPopup.classList.toggle("d-none");
        addressSuccessPopup.classList.toggle('d-none');
    });
    addressSuccesssPopupCloseBtn.addEventListener("click", () => {
        addressSuccessPopup.classList.toggle("d-none");
    });

   
});

function ViewHistory(){
    window.location.href = "transactionHistory.html";
}