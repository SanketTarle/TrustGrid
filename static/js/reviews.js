/*==================================================

            TRUSTGRID REVIEWS

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
        STAR RATING
=========================================*/

const stars = document.querySelectorAll(".star-rating i");

let selectedRating = 0;

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        selectedRating = index + 1;

        stars.forEach((s, i) => {

            if (i < selectedRating) {

                s.className = "bi bi-star-fill";

                s.style.color = "#F4B400";

            } else {

                s.className = "bi bi-star";

                s.style.color = "#D1D5DB";

            }

        });

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
/*==================================================

                PART 2

==================================================*/

/*=========================================
        SUBMIT REVIEW
=========================================*/

const reviewBtn = document.querySelector(".submit-review-btn");

const reviewBox = document.querySelector("textarea");

if (reviewBtn) {

    reviewBtn.addEventListener("click", () => {

        if (selectedRating === 0) {

            showToast("Please select a star rating ⭐");

            return;

        }

        if (reviewBox.value.trim() === "") {

            showToast("Please write your review.");

            return;

        }

        showToast("Review submitted successfully 🎉");

        reviewBox.value = "";

        selectedRating = 0;

        stars.forEach(star => {

            star.className = "bi bi-star";

            star.style.color = "#D1D5DB";

        });

    });

}

/*=========================================
        EDIT REVIEW
=========================================*/

document.querySelectorAll(".edit-review-btn").forEach(button => {

    button.addEventListener("click", () => {

        reviewBox.focus();

        showToast("Edit your review below.");

    });

});

/*=========================================
        HELPFUL BUTTON
=========================================*/

document.querySelectorAll(".helpful-btn").forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = '<i class="bi bi-hand-thumbs-up-fill"></i> Thanks!';

        button.disabled = true;

        showToast("Marked as helpful 👍");

    });

});
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.review-form-card,.service-card,.review-card"

    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

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

    toast.style.right = "25px";

    toast.style.bottom = "25px";

    toast.style.background = "#2ECC71";

    toast.style.color = "white";

    toast.style.padding = "15px 22px";

    toast.style.borderRadius = "12px";

    toast.style.fontWeight = "600";

    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

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