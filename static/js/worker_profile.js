/*==================================================

        TRUSTGRID WORKER PROFILE

==================================================*/

/*=========================================
        NAVIGATION
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0)";

    });

});

/*=========================================
        BOOK NOW BUTTON
=========================================*/

const bookBtn = document.querySelector(".book-btn");

if (bookBtn) {

    bookBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.location.href = "book_service.html";

    });

}

/*=========================================
        MESSAGE BUTTON
=========================================*/

const messageBtn = document.querySelector(".message-btn");

if (messageBtn) {

    messageBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.location.href = "messages.html";

    });

}
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

            stat.innerText = original.includes("+") ? start + "+" : start;

        }

    }, 30);

});

/*=========================================
        VIEW PROFILE
=========================================*/

document.querySelectorAll(".view-btn").forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        window.location.href = "worker_profile.html";

    });

});

/*=========================================
        CTA BUTTON
=========================================*/

const ctaBtn = document.querySelector(".cta-btn");

if (ctaBtn) {

    ctaBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.location.href = "book_service.html";

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

        ".profile-hero,.stat-card,.about-section,.skills-section,.experience-section,.certificate-card,.review-card,.worker-card,.cta-card"

    ).forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(30px)";

        setTimeout(() => {

            item.style.transition = ".6s";

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

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
        RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button,.book-btn,.message-btn,.view-btn,.cta-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

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

/*=========================================
        REVIEW CARDS
=========================================*/

document.querySelectorAll(".review-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*=========================================
        CTA CLICK
=========================================*/

const cta = document.querySelector(".cta-btn");

if (cta) {

    cta.addEventListener("click", () => {

        showToast("Redirecting to Booking Page...");

    });

}