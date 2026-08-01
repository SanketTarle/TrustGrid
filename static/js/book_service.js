/*==================================================
            TRUSTGRID BOOK SERVICE
==================================================*/

/* ==========================================
   Navigation Hover Effect
========================================== */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0px)";

    });

});


/* ==========================================
   Date Selection
========================================== */

const dateButtons = document.querySelectorAll(".date-buttons button");

dateButtons.forEach(button => {

    button.addEventListener("click", () => {

        dateButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


/* ==========================================
   Time Slot Selection
========================================== */

const timeButtons = document.querySelectorAll(".time-grid button");

timeButtons.forEach(button => {

    button.addEventListener("click", () => {

        timeButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});
/*==================================================
                PART 2
==================================================*/

/* ==========================================
   Payment Method Selection
========================================== */

const paymentOptions = document.querySelectorAll(".payment-options label");

paymentOptions.forEach(option => {

    option.addEventListener("click", () => {

        paymentOptions.forEach(item => {

            item.style.borderColor = "#E5E7EB";
            item.style.background = "#FFFFFF";

        });

        option.style.borderColor = "#2ECC71";
        option.style.background = "#F5FFF9";

    });

});


/* ==========================================
   Input Focus Animation
========================================== */

const formInputs = document.querySelectorAll(
    ".form-group input, .form-group textarea, .form-group select"
);

formInputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.transform = "scale(1.02)";
        input.style.boxShadow = "0 0 10px rgba(46,204,113,0.25)";

    });

    input.addEventListener("blur", () => {

        input.style.transform = "scale(1)";
        input.style.boxShadow = "none";

    });

});


/* ==========================================
   Smooth Scroll To Top
========================================== */

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================================
   Card Hover Animation
========================================== */

const cards = document.querySelectorAll(
    ".customer-details, .datetime-card, .address-card, .problem-card, .payment-card, .worker-card, .summary-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
/*==================================================
                PART 3
==================================================*/

/* ==========================================
   Confirm Booking
========================================== */

const confirmBtn = document.querySelector(".confirm-btn");

if (confirmBtn) {

    confirmBtn.addEventListener("click", function () {

        /* Validation */

        const name = document.querySelector('input[type="text"]');
        const mobile = document.querySelector('input[type="tel"]');

        if (name.value.trim() === "") {

            alert("Please enter your Full Name.");

            name.focus();

            return;

        }

        if (mobile.value.trim() === "") {

            alert("Please enter your Mobile Number.");

            mobile.focus();

            return;

        }

        /* Loading */

        confirmBtn.disabled = true;

        confirmBtn.innerHTML = `
    <i class="bi bi-arrow-repeat"></i>
    Booking...
    `;

        setTimeout(() => {

            confirmBtn.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        Booking Confirmed
        `;

            confirmBtn.style.background = "#27AE60";

            alert("🎉 Booking Confirmed Successfully!");

            setTimeout(() => {

                window.location.href = "my_bookings.html";

            }, 1200);

        }, 1800);

    });

}

/* ==========================================
   Button Hover Animation
========================================== */

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});

/* ==========================================
   Fade Animation on Load
========================================== */

window.addEventListener("load", () => {

    document.querySelectorAll(
        ".hero-card,.customer-details,.datetime-card,.address-card,.problem-card,.payment-card,.worker-card,.summary-card,.confirm-card"
    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(25px)";

        setTimeout(() => {

            card.style.transition = "all .6s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});