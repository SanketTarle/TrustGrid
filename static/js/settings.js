/*==================================================

            TRUSTGRID SETTINGS

==================================================*/

/*=========================================
        NAVIGATION HOVER
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0)";

    });

});

/*=========================================
        LOGO SCROLL
=========================================*/

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
        SAVE PROFILE
=========================================*/

const saveBtn = document.querySelector(".save-profile-btn");

if (saveBtn) {

    saveBtn.addEventListener("click", () => {

        showToast("Profile updated successfully ✅");

    });

}

/*=========================================
        CHANGE PASSWORD
=========================================*/

const changeBtn = document.querySelector(".setting-btn");

if (changeBtn) {

    changeBtn.addEventListener("click", () => {

        showToast("Password change feature coming soon 🔐");

    });

}
/*==================================================

                PART 2

====================================================*/

/*=========================================
        TOGGLE SWITCHES
=========================================*/

document.querySelectorAll(".switch input").forEach(toggle => {

    toggle.addEventListener("change", () => {

        if (toggle.checked) {

            showToast("Setting Enabled");

        } else {

            showToast("Setting Disabled");

        }

    });

});

/*=========================================
        DARK MODE DEMO
=========================================*/

const toggles = document.querySelectorAll(".switch input");

if (toggles.length > 3) {

    toggles[3].addEventListener("change", (e) => {

        if (e.target.checked) {

            document.body.style.background = "#1F2937";

            document.body.style.color = "white";

        } else {

            document.body.style.background = "#F5F7FA";

            document.body.style.color = "#1F2937";

        }

    });

}
/*==================================================

                PART 3

====================================================*/

/*=========================================
        DELETE ACCOUNT
=========================================*/

const deleteBtn = document.querySelector(".delete-account-btn");

if (deleteBtn) {

    deleteBtn.addEventListener("click", () => {

        const confirmDelete = confirm(

            "Are you sure you want to delete your account?"

        );

        if (confirmDelete) {

            showToast("Account deletion request submitted.");

        }

    });

}

/*=========================================
        PAGE LOAD
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.profile-settings,.settings-card"

    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});

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

    toast.style.color = "white";

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