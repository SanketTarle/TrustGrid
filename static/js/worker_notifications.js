/*========================================

        TRUSTGRID WORKER NOTIFICATIONS

========================================*/

/*========================

ACTIVE SIDEBAR

========================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar-menu a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/*========================

SEARCH NOTIFICATIONS

========================*/

const searchInput = document.querySelector(".search-box input");

const notifications = document.querySelectorAll(".notification-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        notifications.forEach(card => {

            card.style.display =

                card.innerText.toLowerCase().includes(value)

                    ? "flex"

                    : "none";

        });

    });

}
/*========================================

        FILTERS

========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.innerText.toLowerCase();

        notifications.forEach(card => {

            if (filter === "all") {

                card.style.display = "flex";

            }

            else if (card.className.toLowerCase().includes(filter.replace(" ", ""))) {

                card.style.display = "flex";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

/*========================

MARK AS READ

========================*/

const markReadBtn = document.querySelector(".mark-read-btn");

if (markReadBtn) {

    markReadBtn.addEventListener("click", () => {

        notifications.forEach(card => {

            card.classList.remove("unread");

            card.classList.add("active");

        });

        showToast("All notifications marked as read.");

    });

}
/*========================================

        CLEAR NOTIFICATIONS

========================================*/

const clearBtn = document.querySelector(".clear-btn");

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        notifications.forEach(card => {

            card.style.display = "none";

        });

        showToast("All notifications cleared.");

    });

}

/*========================

TOAST

========================*/

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

/*========================

CONSOLE

========================*/

console.log("✅ Worker Notifications Loaded Successfully");