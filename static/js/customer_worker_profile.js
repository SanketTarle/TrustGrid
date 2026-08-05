/*========================================

        TRUSTGRID CUSTOMER WORKER PROFILE

========================================*/

/*========================================

ACTIVE NAVIGATION

========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/*========================================

BACK BUTTON

========================================*/

const backButton = document.querySelector(".back-btn");

if (backButton) {

    backButton.addEventListener("click", () => {

        history.back();

    });

}
/*========================================

        TRUSTGRID CUSTOMER WORKER PROFILE

========================================*/

/*========================================

ACTIVE NAVIGATION

========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/*========================================

BACK BUTTON

========================================*/

const backButton = document.querySelector(".back-btn");

if (backButton) {

    backButton.addEventListener("click", () => {

        history.back();

    });

}
/*========================================

BOOK NOW BUTTON

========================================*/

const bookButton = document.querySelector(".book-btn");

if (bookButton) {

    bookButton.addEventListener("click", (event) => {

        event.preventDefault();

        showToast("Redirecting to Booking Page...");

        setTimeout(() => {

            window.location.href = "customer_booking.html";

        }, 1000);

    });

}

/*========================================

MESSAGE BUTTON

========================================*/

const messageButton = document.querySelector(".message-btn");

if (messageButton) {

    messageButton.addEventListener("click", () => {

        showToast("Opening Messages...");

        setTimeout(() => {

            window.location.href = "customer_messages.html";

        }, 1000);

    });

}

/*========================================

SIMILAR WORKERS

========================================*/

document.querySelectorAll(".view-profile-btn").forEach(button => {

    button.addEventListener("click", () => {

        showToast("Loading Worker Profile...");

    });

});