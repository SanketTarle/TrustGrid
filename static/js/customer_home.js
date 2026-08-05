/*========================================
        TRUSTGRID HOME PAGE
========================================*/

/*========================================
ACTIVE NAVIGATION
========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/*========================================
SMOOTH SCROLL
========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});
/*========================================
FLOATING CARD ANIMATION
========================================*/

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

    setInterval(() => {

        card.classList.toggle("float");

    }, 1500 + (index * 300));

});

/*========================================
CATEGORY CARD
========================================*/

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        window.location.href = "customer_find_worker.html";

    });

});

/*========================================
VIEW PROFILE BUTTON
========================================*/

document.querySelectorAll(".worker-card a").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Opening Worker Profile...");

    });

});
/*========================================
BUTTON EVENTS
========================================*/

document.querySelector(".primary-btn").addEventListener("click", () => {

    window.location.href = "customer_find_worker.html";

});

document.querySelector(".secondary-btn").addEventListener("click", () => {

    window.location.href = "register.html";

});

/*========================================
PAGE LOADED
========================================*/

window.addEventListener("load", () => {

    console.log("✅ TrustGrid Home Loaded Successfully");

});

/*========================================
HEADER SHADOW ON SCROLL
========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    }

    else {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    }

});