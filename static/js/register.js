/*==================================================

        TRUSTGRID REGISTER PAGE

==================================================*/

/*=========================================
        ROLE BUTTONS
=========================================*/

const roleButtons = document.querySelectorAll(".role-btn");

roleButtons.forEach(button => {

    button.addEventListener("click", () => {

        roleButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});

/*=========================================
        PASSWORD SHOW/HIDE
=========================================*/

document.querySelectorAll(".toggle-password").forEach(icon => {

    icon.addEventListener("click", () => {

        const input = icon.previousElementSibling;

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("bi-eye-fill");

            icon.classList.add("bi-eye-slash-fill");

        } else {

            input.type = "password";

            icon.classList.remove("bi-eye-slash-fill");

            icon.classList.add("bi-eye-fill");

        }

    });

});
/*==================================================

                PART 2

====================================================*/

/*=========================================
        REGISTER FORM
=========================================*/

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs = form.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {

        if (input.type !== "checkbox" && input.value.trim() === "") {

            valid = false;

            input.style.border = "1px solid red";

        } else {

            input.style.border = "none";

        }

    });

    const password = inputs[3].value;

    const confirmPassword = inputs[4].value;

    if (password !== confirmPassword) {

        showToast("Passwords do not match!");

        return;

    }

    if (valid) {

        showToast("Account Created Successfully 🎉");

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1500);

    }

});

/*=========================================
        GOOGLE BUTTON
=========================================*/

const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click", () => {

    showToast("Google Sign Up Coming Soon");

});
/*==================================================

                PART 3

====================================================*/

/*=========================================
        TOAST
=========================================*/

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";

    toast.style.bottom = "25px";

    toast.style.right = "25px";

    toast.style.background = "#2ECC71";

    toast.style.color = "#fff";

    toast.style.padding = "15px 22px";

    toast.style.borderRadius = "12px";

    toast.style.fontWeight = "600";

    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".left-panel,.register-card,.feature-card,.why-card"

    ).forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(30px)";

        setTimeout(() => {

            item.style.transition = ".6s";

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }, index * 120);

    });

});

/*=========================================
        RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.style.position = "absolute";

        ripple.style.borderRadius = "50%";

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.transform = "scale(0)";

        ripple.style.animation = "ripple .6s linear";

        ripple.style.pointerEvents = "none";

        this.style.position = "relative";

        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});