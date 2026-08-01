/*==================================================

            TRUSTGRID USER PROFILE

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

        link.style.transform = "translateY(0px)";

    });

});

/*=========================================
        QUICK ACTION HOVER
=========================================*/

const actions = document.querySelectorAll(".action-list a");

actions.forEach(action => {

    action.addEventListener("mouseenter", () => {

        action.style.transform = "translateX(8px)";

    });

    action.addEventListener("mouseleave", () => {

        action.style.transform = "translateX(0px)";

    });

});

/*=========================================
        EDIT PROFILE BUTTON
=========================================*/

const editBtn = document.querySelector(".edit-profile-btn");

if (editBtn) {

    editBtn.addEventListener("click", () => {

        alert("Edit Profile mode enabled.");

    });

}

/*=========================================
        SAVE CHANGES
=========================================*/

const saveBtn = document.querySelector(".save-btn");

if (saveBtn) {

    saveBtn.addEventListener("click", () => {

        saveBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Saved';

        saveBtn.style.background = "#27AE60";

        setTimeout(() => {

            saveBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Save Changes';

        }, 2000);

    });

}
/*==================================================

                PART 2

==================================================*/

/*=========================================
        CHANGE PASSWORD
=========================================*/

const updateBtn = document.querySelector(".update-password-btn");

if (updateBtn) {

    updateBtn.addEventListener("click", () => {

        const passwords = document.querySelectorAll(
            '.change-password-card input[type="password"]'
        );

        const current = passwords[0].value.trim();
        const newPass = passwords[1].value.trim();
        const confirm = passwords[2].value.trim();

        if (current === "") {

            alert("Enter current password.");

            return;

        }

        if (newPass === "") {

            alert("Enter new password.");

            return;

        }

        if (newPass !== confirm) {

            alert("Passwords do not match.");

            return;

        }

        updateBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Updated';

        updateBtn.style.background = "#2ECC71";

        setTimeout(() => {

            updateBtn.innerHTML = '<i class="bi bi-key-fill"></i> Update Password';

            updateBtn.style.background = "#0B1F3A";

        }, 2000);

    });

}

/*=========================================
        INPUT FOCUS EFFECT
=========================================*/

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.transform = "scale(1.02)";
        input.style.boxShadow = "0 0 12px rgba(46,204,113,.25)";

    });

    input.addEventListener("blur", () => {

        input.style.transform = "scale(1)";
        input.style.boxShadow = "none";

    });

});

/*=========================================
        STAT CARD HOVER
=========================================*/

const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(
        ".profile-card,.quick-actions,.personal-info-card,.statistics-card,.change-password-card,.recent-activity-card"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all .6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, index * 120);

    });

});


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

    const target = parseFloat(counter.innerText);

    let current = 0;

    const step = target / 40;

    function updateCounter() {

        current += step;

        if (current >= target) {

            counter.innerText = target;

        } else {

            if (Number.isInteger(target)) {

                counter.innerText = Math.floor(current);

            } else {

                counter.innerText = current.toFixed(1);

            }

            requestAnimationFrame(updateCounter);

        }

    }

    updateCounter();

});


/*=========================================
        LOGO SMOOTH SCROLL
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


/*=========================================
        SUCCESS TOAST
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

    toast.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    toast.style.fontWeight = "600";

    toast.style.zIndex = "9999";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

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
        BUTTON TOASTS
=========================================*/

if (saveBtn) {

    saveBtn.addEventListener("click", () => {

        showToast("Profile Updated Successfully ✅");

    });

}

if (updateBtn) {

    updateBtn.addEventListener("click", () => {

        showToast("Password Updated Successfully 🔐");

    });

}