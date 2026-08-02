/*========================================

        TRUSTGRID WORKER JOBS

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

SEARCH JOB

========================*/

const searchInput = document.querySelector(".search-job input");

const tableRows = document.querySelectorAll(".jobs-table-card tbody tr");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        tableRows.forEach(row => {

            const text = row.innerText.toLowerCase();

            row.style.display = text.includes(value) ? "" : "none";

        });

    });

}
/*========================================

        FILTER

========================================*/

const statusFilter = document.querySelector(".filters select");

if (statusFilter) {

    statusFilter.addEventListener("change", () => {

        const value = statusFilter.value.toLowerCase();

        tableRows.forEach(row => {

            const status = row.querySelector(".status").innerText.toLowerCase();

            if (value === "all status") {

                row.style.display = "";

            }

            else {

                row.style.display = status === value ? "" : "none";

            }

        });

    });

}

/*========================

SUMMARY CARD EFFECT

========================*/

document.querySelectorAll(".summary-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/*========================

ACTION BUTTON

========================*/

document.querySelectorAll(".view-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        showToast("Opening Job Details...");

    });

});
/*========================================

        TOAST

========================================*/

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

PAGE BUTTON

========================*/

document.querySelectorAll(".page-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".page-btn").forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/*========================

CONSOLE

========================*/

console.log("✅ Worker Jobs Loaded Successfully");
