/* ==========================================
   TRUSTGRID
   CUSTOMER MY BOOKINGS
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
   BOOKING TABS
========================================== */

const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));

        tab.classList.add("active");

    });

});

/* ==========================================
   CANCEL BOOKING
========================================== */

document.querySelectorAll(".cancel-btn").forEach(button => {

    button.addEventListener("click", () => {

        const confirmCancel = confirm(

            "Are you sure you want to cancel this booking?"

        );

        if (confirmCancel) {

            alert("Booking Cancelled Successfully.");

        }

    });

});

/* ==========================================
   TRACK WORKER
========================================== */

document.querySelectorAll(".track-btn").forEach(button => {

    button.addEventListener("click", () => {

        alert(

            "Worker is currently on the way.\nEstimated Arrival : 20 Minutes."

        );

    });

});

/* ==========================================
   REVIEW BUTTON
========================================== */

document.querySelectorAll(".review-btn").forEach(button => {

    button.addEventListener("click", () => {

        alert(

            "Review feature will be available after backend integration."

        );

    });

});

/* ==========================================
   INVOICE BUTTON
========================================== */

document.querySelectorAll(".invoice-btn").forEach(button => {

    button.addEventListener("click", () => {

        alert(

            "Invoice Download Started..."

        );

    });

});

/* ==========================================
   RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        ripple.classList.add("ripple");

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = e.offsetX - size / 2 + "px";

        ripple.style.top = e.offsetY - size / 2 + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const cards = document.querySelectorAll(

    ".booking-card,.empty-bookings,.stat-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(35px)";

    card.style.transition = ".6s ease";

    observer.observe(card);

});

/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log(

        "Customer My Bookings Loaded Successfully"

    );

});

/* ==========================================
   END
========================================== */