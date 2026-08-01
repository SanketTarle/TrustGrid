/*==================================================

            TRUSTGRID NOTIFICATIONS

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
        SEARCH NOTIFICATIONS
=========================================*/

const searchInput = document.querySelector(".search-box input");

const notificationCards = document.querySelectorAll(".notification-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        notificationCards.forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*=========================================
        FILTER BUTTONS
=========================================*/

const filterButtons = document.querySelectorAll(".filter-buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.innerText.trim().toLowerCase();

        notificationCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "flex";

                return;

            }

            if (card.classList.contains(filter)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/*=========================================
        LOGO SCROLL TO TOP
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
/*==================================================

                PART 2

==================================================*/

/*=========================================
        MARK AS READ
=========================================*/

const readButtons = document.querySelectorAll(".read-btn");

const counter = document.querySelector(".notification-summary h2");

let unreadCount = readButtons.length;

readButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".notification-card");

        const badge = card.querySelector(".unread-badge");

        if (badge) {

            badge.remove();

        }

        card.classList.remove("unread");

        button.innerHTML = '<i class="bi bi-check-circle-fill"></i> Read';

        button.disabled = true;

        button.style.background = "#95A5A6";

        unreadCount--;

        if (counter) {

            counter.innerText = unreadCount;

        }

        showToast("Notification marked as read ✔");

    });

});


/*=========================================
        CLEAR ALL
=========================================*/

const clearBtn = document.querySelector(".clear-btn");

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        if (confirm("Clear all notifications?")) {

            notificationCards.forEach(card => {

                card.style.display = "none";

            });

            if (counter) {

                counter.innerText = "0";

            }

            showToast("All notifications cleared 🗑");

        }

    });

}
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.search-filter-card,.notification-card"

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

    toast.style.padding = "15px 22px";

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

    }, 2500);

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