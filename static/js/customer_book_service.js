/* ==========================================
   TRUSTGRID
   CUSTOMER BOOK SERVICE
   JAVASCRIPT
========================================== */

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/* ==========================================
   HEADER SHADOW
========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";

    }

    else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

/* ==========================================
   PAYMENT CARD SELECT
========================================== */

const paymentCards = document.querySelectorAll(".payment-card");

paymentCards.forEach(card => {

    card.addEventListener("click", () => {

        paymentCards.forEach(item => {

            item.style.borderColor = "#E5E7EB";

            item.style.background = "#FFFFFF";

        });

        card.style.borderColor = "#2563EB";

        card.style.background = "#EEF4FF";

        card.querySelector("input").checked = true;

    });

});

/* ==========================================
   FORM VALIDATION
========================================== */

const confirmBtn = document.querySelector(".confirm-btn");

const bookingForm = document.querySelector(".service-form");

confirmBtn.addEventListener("click", (event) => {

    event.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value.trim();

    const mobile = bookingForm.querySelector('input[type="tel"]').value.trim();

    const date = bookingForm.querySelector('input[type="date"]').value;

    const time = bookingForm.querySelector('input[type="time"]').value;

    const terms = document.querySelector(".terms-box input");

    if (name === "") {

        alert("Please enter your full name.");

        return;

    }

    if (mobile.length < 10) {

        alert("Please enter a valid mobile number.");

        return;

    }

    if (date === "") {

        alert("Please select booking date.");

        return;

    }

    if (time === "") {

        alert("Please select booking time.");

        return;

    }

    if (!terms.checked) {

        alert("Please accept Terms & Conditions.");

        return;

    }

    alert("🎉 Booking Confirmed Successfully!");

    setTimeout(() => {

        window.location.href = "customer_my_bookings.html";

    }, 800);

});

/* ==========================================
   MINIMUM DATE
========================================== */

const dateInput = document.querySelector('input[type="date"]');

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

}

/* ==========================================
   AUTO RESIZE TEXTAREA
========================================== */

const textarea = document.querySelector("textarea");

if (textarea) {

    textarea.addEventListener("input", function () {

        this.style.height = "auto";

        this.style.height = this.scrollHeight + "px";

    });

}

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = e.offsetX - size / 2 + "px";

        ripple.style.top = e.offsetY - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   PAGE LOAD ANIMATION
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("✅ Customer Book Service Loaded");

});

/* ==========================================
   SMOOTH REVEAL
========================================== */

const reveal = document.querySelectorAll(

    ".worker-card,.booking-form,.payment-section,.price-summary,.terms-box"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

reveal.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".6s";

    observer.observe(item);

});

/* ==========================================
   END
========================================== */