/* ==========================================================
   TRUSTGRID
   CUSTOMER DASHBOARD JS
   PART 1
========================================================== */

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/* ==========================================================
   LOGOUT
========================================================== */

const logoutButton = document.querySelector(".logout-btn");

if (logoutButton) {

    logoutButton.addEventListener("click", function (event) {

        event.preventDefault();

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            window.location.href = "login.html";

        }

    });

}

/* ==========================================================
   ACTION CARD ANIMATION
========================================================== */

const actionCards = document.querySelectorAll(".action-card");

actionCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});
/* ==========================================================
   TRUSTGRID
   CUSTOMER DASHBOARD JS
   PART 2
========================================================== */

/* ==========================================================
   HEADER SHADOW
========================================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";

    }

    else {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";

    }

});

/* ==========================================================
   WORKER CARD BUTTON
========================================================== */

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Opening Worker Profile...");

    });

});

/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    console.log("✅ Customer Dashboard Loaded Successfully");

});
/* ==========================================================
   TRUSTGRID
   CUSTOMER DASHBOARD JS
   PART 3
========================================================== */

/* ==========================================================
   STAT CARD COUNTER ANIMATION
========================================================== */

const statNumbers = document.querySelectorAll(".stat-card h2");

statNumbers.forEach((number) => {

    const finalValue = parseInt(number.textContent.replace(/[^0-9]/g, "")) || 0;

    let current = 0;

    const increment = Math.ceil(finalValue / 40);

    const counter = setInterval(() => {

        current += increment;

        if (current >= finalValue) {

            current = finalValue;

            clearInterval(counter);

        }

        if (number.textContent.includes("₹")) {

            number.textContent = "₹" + current;

        }

        else if (number.textContent.includes(".")) {

            number.textContent = "4.9";

        }

        else {

            number.textContent = current;

        }

    }, 30);

});

/* ==========================================================
   SMOOTH SCROLL TO TOP
========================================================== */

const scrollButton = document.createElement("button");

scrollButton.innerHTML = '<i class="bi bi-arrow-up"></i>';

scrollButton.className = "scroll-top-btn";

document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollButton.style.display = "flex";

    }

    else {

        scrollButton.style.display = "none";

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   END OF CUSTOMER DASHBOARD JS
========================================================== */