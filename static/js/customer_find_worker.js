/* ==========================================================
   TRUSTGRID
   CUSTOMER FIND WORKER
   JS PART 1
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
   HEADER SHADOW
========================================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";

    }

    else {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";

    }

});

/* ==========================================================
   LIVE SEARCH
========================================================== */

const searchInput = document.querySelector(".search-box input");

const workerCards = document.querySelectorAll(".worker-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    workerCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

});

/* ==========================================================
   FILTER BUTTON
========================================================== */

const filterButton = document.querySelector(".filter-btn");

filterButton.addEventListener("click", () => {

    filterButton.innerHTML =
        '<i class="bi bi-check-circle-fill"></i> Filter Applied';

    filterButton.style.background = "#22C55E";

    setTimeout(() => {

        filterButton.innerHTML =
            '<i class="bi bi-funnel-fill"></i> Apply Filter';

        filterButton.style.background = "";

    }, 2000);

});
/* ==========================================================
   TRUSTGRID
   CUSTOMER FIND WORKER
   JS PART 2
========================================================== */

/* ==========================================================
   FAVORITE BUTTON
========================================================== */

document.querySelectorAll(".fav-btn").forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        icon.classList.toggle("bi-heart");

        icon.classList.toggle("bi-heart-fill");

        button.classList.toggle("active");

    });

});

/* ==========================================================
   SCROLL TO TOP
========================================================== */

const scrollButton = document.querySelector(".scroll-top-btn");

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
   VIEW PROFILE BUTTON
========================================================== */

document.querySelectorAll(".profile-btn").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Opening Worker Profile...");

    });

});

/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("✅ Customer Find Worker Loaded Successfully");

});
/* ==========================================================
   TRUSTGRID
   CUSTOMER FIND WORKER
   JS PART 3
========================================================== */

/* ==========================================================
   CATEGORY CARD CLICK
========================================================== */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.innerText.trim();

        document.querySelector(".search-box input").value = category;

        document.querySelector(".search-box input").focus();

    });

});

/* ==========================================================
   WORKER CARD FADE-IN ON SCROLL
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".worker-card").forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});

/* ==========================================================
   SEARCH BUTTON
========================================================== */

document.querySelector(".search-box button").addEventListener("click", () => {

    const value = document.querySelector(".search-box input").value;

    if (value.trim() === "") {

        alert("Please enter a worker name or category.");

    }

    else {

        console.log("Searching for:", value);

    }

});

/* ==========================================================
   PAGE READY
========================================================== */

window.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 TrustGrid Find Worker Ready");

});