/* ==========================================================
   TRUSTGRID
   CUSTOMER WORKER PROFILE
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

        header.style.boxShadow =
            "0 12px 30px rgba(0,0,0,.15)";

    }

    else {

        header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.08)";

    }

});

/* ==========================================================
   FAVORITE BUTTON
========================================================== */

const favoriteButton = document.querySelector(".favorite-btn");

if (favoriteButton) {

    favoriteButton.addEventListener("click", () => {

        const icon = favoriteButton.querySelector("i");

        icon.classList.toggle("bi-heart");

        icon.classList.toggle("bi-heart-fill");

        favoriteButton.classList.toggle("active");

    });

}

/* ==========================================================
   MESSAGE BUTTON
========================================================== */

const messageButton = document.querySelector(".message-btn");

if (messageButton) {

    messageButton.addEventListener("click", () => {

        window.location.href =
            "customer_messages.html";

    });

}

/* ==========================================================
   PAGE LOAD ANIMATION
========================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log(
        "✅ Customer Worker Profile Loaded Successfully"
    );

});
/* ==========================================================
   TRUSTGRID
   CUSTOMER WORKER PROFILE
   JS PART 2
========================================================== */

/* ==========================================================
   STATISTICS COUNTER
========================================================== */

const statCards = document.querySelectorAll(".stat-card h3");

statCards.forEach(card => {

    const target = parseInt(card.innerText.replace(/\D/g, "")) || 0;

    if (target === 0) return;

    let count = 0;

    const speed = Math.ceil(target / 50);

    const counter = setInterval(() => {

        count += speed;

        if (count >= target) {

            count = target;

            clearInterval(counter);

        }

        if (card.innerText.includes("+")) {

            card.innerText = count + "+";

        }

        else {

            card.innerText = count;

        }

    }, 30);

});

/* ==========================================================
   PROGRESS BAR ANIMATION
========================================================== */

const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        const width = bar.className.match(/width-(\d+)/);

        if (width) {

            bar.style.width = width[1] + "%";

        }

    });

});

/* ==========================================================
   BOOK SERVICE BUTTON
========================================================== */

const bookButton = document.querySelector(".book-btn");

if (bookButton) {

    bookButton.addEventListener("click", () => {

        window.location.href = "customer_book_service.html";

    });

}
/* ==========================================================
   TRUSTGRID
   CUSTOMER WORKER PROFILE
   JS PART 2
========================================================== */

/* ==========================================================
   STATISTICS COUNTER
========================================================== */

const statCards = document.querySelectorAll(".stat-card h3");

statCards.forEach(card => {

    const target = parseInt(card.innerText.replace(/\D/g, "")) || 0;

    if (target === 0) return;

    let count = 0;

    const speed = Math.ceil(target / 50);

    const counter = setInterval(() => {

        count += speed;

        if (count >= target) {

            count = target;

            clearInterval(counter);

        }

        if (card.innerText.includes("+")) {

            card.innerText = count + "+";

        }

        else {

            card.innerText = count;

        }

    }, 30);

});

/* ==========================================================
   PROGRESS BAR ANIMATION
========================================================== */

const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("load", () => {

    progressBars.forEach(bar => {

        const width = bar.className.match(/width-(\d+)/);

        if (width) {

            bar.style.width = width[1] + "%";

        }

    });

});

/* ==========================================================
   BOOK SERVICE BUTTON
========================================================== */

const bookButton = document.querySelector(".book-btn");

if (bookButton) {

    bookButton.addEventListener("click", () => {

        window.location.href = "customer_book_service.html";

    });

}
/* ==========================================================
   TRUSTGRID
   CUSTOMER WORKER PROFILE
   JS PART 3
========================================================== */

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(

    ".section-card, .stat-card, .gallery-card, .review-card, .recommended-card"

);

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

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = ".6s ease";

    observer.observe(element);

});

/* ==========================================================
   SCROLL TO TOP
========================================================== */

const scrollButton = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", () => {

    if (!scrollButton) return;

    if (window.scrollY > 300) {

        scrollButton.style.display = "flex";

    }

    else {

        scrollButton.style.display = "none";

    }

});

if (scrollButton) {

    scrollButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   GALLERY CLICK
========================================================== */

document.querySelectorAll(".gallery-card").forEach(card => {

    card.addEventListener("click", () => {

        console.log("Gallery Image Clicked");

    });

});

/* ==========================================================
   PAGE READY
========================================================== */

window.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 TrustGrid Worker Profile Ready");

});