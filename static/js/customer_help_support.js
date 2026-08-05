/* ==========================================
   TRUSTGRID
   CUSTOMER HELP & SUPPORT
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
   FAQ ACCORDION
========================================== */

document.querySelectorAll(".faq-item").forEach(item => {

    const answer = item.querySelector("p");

    answer.style.display = "none";

    item.addEventListener("click", () => {

        document.querySelectorAll(".faq-item p").forEach(p => {

            if (p !== answer) {

                p.style.display = "none";

            }

        });

        answer.style.display =

            answer.style.display === "block"

                ? "none"

                : "block";

    });

});

/* ==========================================
   SUPPORT BUTTONS
========================================== */

document.querySelectorAll(".support-btn").forEach(button => {

    button.addEventListener("click", () => {

        alert(button.textContent.trim() + " feature will be available after backend integration.");

    });

});

/* ==========================================
   CONTACT FORM
========================================== */

const form = document.querySelector(".support-form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        const inputs = form.querySelectorAll("input,textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.borderColor = "#EF4444";

            }

            else {

                input.style.borderColor = "#22C55E";

            }

        });

        if (valid) {

            alert("Support request submitted successfully.");

            form.reset();

        }

    });

}

/* ==========================================
   CATEGORY CARDS
========================================== */

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        alert(card.querySelector("h3").textContent);

    });

});

/* ==========================================
   RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

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

    ".support-card,.faq-item,.category-card,.info-card,.support-form"

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

    console.log("Customer Help & Support Loaded Successfully");

});

/* ==========================================
   END
========================================== */