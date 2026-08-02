/*==================================================

        TRUSTGRID DASHBOARD

==================================================*/

/*=========================================
        NAVIGATION HOVER
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0)";

    });

});

/*=========================================
        HERO BUTTON
=========================================*/

const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {

    heroBtn.addEventListener("click", () => {

        window.location.href = "book_service.html";

    });

}

/*=========================================
        QUICK ACTIONS
=========================================*/

document.querySelectorAll(".quick-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});
/*==================================================

                PART 2

====================================================*/

/*=========================================
        STATS COUNTER
=========================================*/

const stats = document.querySelectorAll(".stat-card h2");

stats.forEach(stat => {

    const original = stat.innerText;

    const number = parseInt(original.replace(/[^\d]/g, ""));

    if (isNaN(number)) return;

    let start = 0;

    const increment = Math.ceil(number / 40);

    const timer = setInterval(() => {

        start += increment;

        if (start >= number) {

            stat.innerText = original;

            clearInterval(timer);

        } else {

            if (original.includes("₹")) {

                stat.innerText = "₹" + start;

            } else {

                stat.innerText = start;

            }

        }

    }, 30);

});

/*=========================================
        BOOKING BUTTONS
=========================================*/

const bookingBtn = document.querySelector(".primary-btn");

if (bookingBtn) {

    bookingBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.location.href = "my_bookings.html";

    });

}

const messageBtn = document.querySelector(".secondary-btn");

if (messageBtn) {

    messageBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.location.href = "messages.html";

    });

}
/*==================================================

                PART 3

====================================================*/

/*=========================================
        PAGE LOAD
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.stat-card,.booking-card,.activity-card,.wallet-card,.notification-card,.category-card,.offer-banner"

    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});

/*=========================================
        TOAST
=========================================*/

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";

    toast.style.bottom = "25px";

    toast.style.right = "25px";

    toast.style.background = "#2ECC71";

    toast.style.color = "white";

    toast.style.padding = "15px 22px";

    toast.style.borderRadius = "12px";

    toast.style.fontWeight = "600";

    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

/*=========================================
        CATEGORY CLICK
=========================================*/

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        showToast("Opening workers list...");

    });

});

/*=========================================
        OFFER BUTTON
=========================================*/

const claimBtn = document.querySelector(".claim-btn");

if (claimBtn) {

    claimBtn.addEventListener("click", (e) => {

        e.preventDefault();

        showToast("Coupon TRUST20 Applied 🎉");

        setTimeout(() => {

            window.location.href = "book_service.html";

        }, 1000);

    });

}

/*=========================================
        RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.style.position = "absolute";

        ripple.style.borderRadius = "50%";

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.transform = "scale(0)";

        ripple.style.animation = "ripple .6s linear";

        ripple.style.pointerEvents = "none";

        this.style.position = "relative";

        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});