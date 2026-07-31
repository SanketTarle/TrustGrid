const passwordInput = document.querySelector(".password-box input");
const eyeIcon = document.querySelector(".password-box i");

eyeIcon.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }

});