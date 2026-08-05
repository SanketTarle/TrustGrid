/* ==========================================
   TRUSTGRID
   CUSTOMER REVIEW
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

    header.style.boxShadow = window.scrollY > 40

        ? "0 15px 35px rgba(0,0,0,.12)"

        : "0 5px 20px rgba(0,0,0,.08)";

});

/* ==========================================
   REVIEW FORM
========================================== */

const reviewForm = document.querySelector(".review-form");

if (reviewForm) {

    reviewForm.addEventListener("submit", e => {

        e.preventDefault();

        alert("Thank you! Your review has been submitted successfully.");

        reviewForm.reset();

    });

}

/* ==========================================
   FILTER BUTTONS
========================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/* ==========================================
   HELPFUL BUTTON
========================================== */

document.querySelectorAll(".helpful-btn").forEach(button => {

    button.addEventListener("click", () => {

        let text = button.textContent.match(/\d+/);

        let count = text ? parseInt(text[0]) : 0;

        count++;

        button.innerHTML = `

            <i class="bi bi-hand-thumbs-up-fill"></i>

            Helpful (${count})

        `;

        button.disabled = true;

    });

});

/* ==========================================
   LOAD MORE
========================================== */

const loadMore = document.querySelector(".load-more-btn");

if (loadMore) {

    loadMore.addEventListener("click", () => {

        alert("More reviews will be loaded after backend integration.");

    });

}

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

    ".rating-summary,.review-form-card,.review-card"

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

    card.style.transform = "translateY(30px)";

    card.style.transition = ".6s ease";

    observer.observe(card);

});

/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("Customer Review Loaded Successfully");

});

/* ==========================================
   END
========================================== */