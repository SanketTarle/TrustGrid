/*========================================

        TRUSTGRID WORKER EARNINGS

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

EARNING COUNTER

========================*/

const counters = document.querySelectorAll(".earning-card h3");

counters.forEach(counter => {

    const target = parseInt(counter.innerText.replace(/[^0-9]/g, ""));

    let count = 0;

    const speed = Math.ceil(target / 40);

    const update = () => {

        if (count < target) {

            count += speed;

            if (count > target) count = target;

            counter.innerText = "₹" + count.toLocaleString();

            requestAnimationFrame(update);

        }

    };

    update();

});
/*========================================

        WITHDRAW

========================================*/

const withdrawButtons = document.querySelectorAll(".withdraw-btn");

withdrawButtons.forEach(button => {

    button.addEventListener("click", () => {

        showToast("Withdrawal request submitted successfully.");

    });

});

/*========================

CARD ANIMATION

========================*/

document.querySelectorAll(

    ".earning-card,.chart-card,.weekly-card,.transaction-section,.summary-box"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/*========================

SEARCH

========================*/

const search = document.querySelector(".search-box input");

const rows = document.querySelectorAll(".transaction-table tbody tr");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        rows.forEach(row => {

            row.style.display = row.innerText.toLowerCase().includes(value)

                ? ""

                : "none";

        });

    });

}
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

CHART PLACEHOLDER

========================*/

const chart = document.querySelector(".chart-placeholder");

if (chart) {

    chart.addEventListener("mouseenter", () => {

        chart.style.borderColor = "#2ECC71";

    });

    chart.addEventListener("mouseleave", () => {

        chart.style.borderColor = "#d1d5db";

    });

}

/*========================

CONSOLE

========================*/

console.log("✅ TrustGrid Worker Earnings Loaded Successfully");
