/*==================================================

            TRUSTGRID FAVORITES

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

        link.style.transform = "translateY(0px)";

    });

});

/*=========================================
        SEARCH WORKER
=========================================*/

const searchInput = document.querySelector(".search-box input");

const cards = document.querySelectorAll(".favorite-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*=========================================
        FILTER BUTTON
=========================================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});
/*==================================================

                PART 2

==================================================*/

/*=========================================
        FAVORITE TOGGLE
=========================================*/

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if (button.classList.contains("active")) {

            icon.className = "bi bi-heart-fill";

            button.style.background = "#FF4D6D";

            button.style.color = "white";

            showToast("Added to Favorites ❤️");

        } else {

            icon.className = "bi bi-heart";

            button.style.background = "#FFE8EC";

            button.style.color = "#FF4D6D";

            showToast("Removed from Favorites");

        }

    });

});

/*=========================================
        VIEW PROFILE
=========================================*/

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", () => {

        window.location.href = "worker_profile.html";

    });

});

/*=========================================
        BOOK NOW
=========================================*/

document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", () => {

        window.location.href = "book_service.html";

    });

});
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.search-filter-card,.favorite-card"

    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

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

    toast.style.right = "25px";

    toast.style.bottom = "25px";

    toast.style.background = "#2ECC71";

    toast.style.color = "#fff";

    toast.style.padding = "15px 20px";

    toast.style.borderRadius = "10px";

    toast.style.fontWeight = "600";

    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    toast.style.zIndex = "9999";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2200);

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

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.borderRadius = "50%";

        ripple.style.pointerEvents = "none";

        ripple.style.transform = "scale(0)";

        ripple.style.animation = "ripple .6s linear";

        this.style.position = "relative";

        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*=========================================
        LOGO SCROLL
=========================================*/

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}