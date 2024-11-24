document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.getElementsByClassName("tab");
    const tabProfileBtn = document.getElementById("tab-profile");
    const profileForm = document.getElementById("profileForm");
    

    Array.from(tabBtns).forEach(tab => {
        tab.addEventListener("click", function () {
            Array.from(tabBtns).forEach(sibling => sibling.classList.remove("active"));

            this.classList.add("active");

            if(tabProfileBtn.classList.contains('active')){
                profileForm.classList.remove('d-none');
            }
            else{
                profileForm.classList.add('d-none');
            }
        });
    });

});
