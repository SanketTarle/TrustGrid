/* ==========================================
   TRUSTGRID
   CUSTOMER FAVORITES
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
   REMOVE FAVORITE
========================================== */

document.querySelectorAll(".remove-btn").forEach(button => {

    button.addEventListener("click", function () {

        const card = this.closest(".favorite-card");

        const confirmRemove = confirm(

            "Remove this worker from Favorites?"

        );

        if (confirmRemove) {

            card.style.opacity = "0";

            card.style.transform = "translateX(100px)";

            card.style.transition = ".5s";

            setTimeout(() => {

                card.remove();

            }, 500);

        }

    });

});

/* ==========================================
   VIEW PROFILE
========================================== */

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Opening Worker Profile...");

    });

});

/* ==========================================
   BOOK SERVICE
========================================== */

document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", () => {

        console.log("Redirecting to Booking Page...");

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

    ".favorite-card,.empty-favorites"

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

        "Customer Favorites Loaded Successfully"

    );

});

/* ==========================================
   END
========================================== */