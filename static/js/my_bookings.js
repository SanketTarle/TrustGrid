/*==================================================

            TRUSTGRID MY BOOKINGS

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
        SEARCH BAR
=========================================*/

const searchInput = document.querySelector(".search-box input");

const bookingCards = document.querySelectorAll(".booking-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        bookingCards.forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*=========================================
        STATUS FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".status-filters button");

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
        BOOKING CARD HOVER
=========================================*/

bookingCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";
        card.style.transition = ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/*=========================================
        VIEW DETAILS
=========================================*/

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Booking Details page will open after backend integration.");

    });

});


/*=========================================
        CANCEL BOOKING
=========================================*/

const cancelButtons = document.querySelectorAll(".cancel-btn");

cancelButtons.forEach(button => {

    button.addEventListener("click", () => {

        const confirmCancel = confirm("Are you sure you want to cancel this booking?");

        if (confirmCancel) {

            button.innerHTML = '<i class="bi bi-check-circle-fill"></i> Cancelled';

            button.style.background = "#E74C3C";

            button.disabled = true;

        }

    });

});


/*=========================================
        CALL WORKER
=========================================*/

const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Calling Worker... 📞");

    });

});


/*=========================================
        CHAT
=========================================*/

const chatButtons = document.querySelectorAll(".chat-btn");

chatButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Chat feature will be available after backend integration. 💬");

    });

});


/*=========================================
        REVIEW
=========================================*/

const reviewButtons = document.querySelectorAll(".review-btn");

reviewButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Review page will open here ⭐");

    });

});


/*=========================================
        DOWNLOAD INVOICE
=========================================*/

const invoiceButtons = document.querySelectorAll(".invoice-btn");

invoiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Invoice download will start after backend integration. 📄");

    });

});
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(
        ".hero-card,.filter-card,.booking-card,.stat-box"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all .6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }, index * 120);

    });

});


/*=========================================
        PAGINATION
=========================================*/

const pageButtons = document.querySelectorAll(".pagination button");

pageButtons.forEach(button => {

    button.addEventListener("click", () => {

        pageButtons.forEach(btn => btn.classList.remove("active"));

        if (!button.querySelector("i")) {

            button.classList.add("active");

        }

    });

});


/*=========================================
        STAT COUNTER
=========================================*/

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {

        count++;

        counter.innerText = count;

        if (count < target) {

            requestAnimationFrame(update);

        }

    };

    update();

});


/*=========================================
        SMOOTH SCROLL TO TOP
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


/*=========================================
        BUTTON RIPPLE EFFECT
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


/*=========================================
        SUCCESS TOAST
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
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
    toast.style.zIndex = "9999";
    toast.style.fontWeight = "600";
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