// ===========================
// PASSWORD SHOW / HIDE
// ===========================

const passwordBoxes = document.querySelectorAll(".password-box");

passwordBoxes.forEach(box => {

    const input = box.querySelector("input");
    const eye = box.querySelector("i");

    eye.addEventListener("click", () => {

        if (input.type === "password") {

            input.type = "text";

            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");

        }
        else {

            input.type = "password";

            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");

        }

    });

});


// ===========================
// FORM VALIDATION
// ===========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const mobile = document.querySelector('input[type="tel"]');

    const passwords = document.querySelectorAll('.password-box input');

    const password = passwords[0];
    const confirmPassword = passwords[1];

    if (name.value.trim() == "") {

        alert("Please enter your Full Name");
        return;

    }

    if (email.value.trim() == "") {

        alert("Please enter your Email");
        return;

    }

    if (mobile.value.trim() == "") {

        alert("Please enter your Mobile Number");
        return;

    }

    if (mobile.value.length != 10) {

        alert("Mobile Number must be 10 digits");
        return;

    }

    if (password.value.length < 8) {

        alert("Password must be at least 8 characters");
        return;

    }

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match");
        return;

    }

    alert("🎉 Registration Successful!");

});