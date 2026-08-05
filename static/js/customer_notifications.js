/* ==========================================
   TRUSTGRID
   CUSTOMER NOTIFICATIONS
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
   MARK ALL AS READ
========================================== */

const markRead = document.querySelector(".mark-read-btn");

if (markRead) {

    markRead.addEventListener("click", () => {

        document.querySelectorAll(".notification-card").forEach(card => {

            card.classList.remove("unread");

        });

        alert("All notifications marked as read.");

    });

}

/* ==========================================
   NOTIFICATION CLICK
========================================== */

document.querySelectorAll(".notification-card").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.remove("unread");

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

    ".notification-card,.empty-notifications"

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

    console.log("Customer Notifications Loaded Successfully");

});

/* ==========================================
   END
========================================== */