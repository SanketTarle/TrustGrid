/*============================================

        WORKER DASHBOARD

=============================================*/

/*========================

COUNTER ANIMATION

========================*/

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText.replace(/[^0-9]/g, ""));

        if (isNaN(target)) return;

        let current = parseInt(counter.getAttribute("data-count")) || 0;

        const increment = Math.ceil(target / 40);

        if (current < target) {

            current += increment;

            if (current > target) {

                current = target;

            }

            counter.setAttribute("data-count", current);

            if (counter.innerText.includes("₹")) {

                counter.innerText = "₹" + current.toLocaleString();

            } else {

                counter.innerText = current;

            }

            requestAnimationFrame(update);

        }

    };

    update();

});

/*========================

ACTIVE SIDEBAR

========================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar-menu a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});
/*============================================

        TRUST SCORE

=============================================*/

const progress = document.querySelector(".progress-fill");

if (progress) {

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.width = "96%";

        progress.style.transition = "2s";

    }, 300);

}

/*========================

AVAILABILITY BUTTON

========================*/

const availability = document.querySelector(".availability-btn");

if (availability) {

    availability.addEventListener("click", () => {

        if (availability.innerText.includes("Available")) {

            availability.innerHTML = '<i class="bi bi-toggle-off"></i> Offline';

            availability.style.background = "#dc3545";

        } else {

            availability.innerHTML = '<i class="bi bi-toggle-on"></i> Available';

            availability.style.background = "#2ECC71";

        }

    });

}

/*========================

CARD HOVER

========================*/

document.querySelectorAll(

    ".stat-card,.trust-card,.jobs-card,.recent-jobs,.quick-actions,.performance-card"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});
/*============================================

        SCROLL ANIMATION

=============================================*/

const cards = document.querySelectorAll(

    ".stat-card,.trust-card,.jobs-card,.recent-jobs,.quick-actions,.performance-card"

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

    card.style.transform = "translateY(30px)";

    card.style.transition = ".6s";

    observer.observe(card);

});

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

document.querySelectorAll(".action-card").forEach(btn => {

    btn.addEventListener("click", () => {

        showToast("Opening...");

    });

});

/*========================

CONSOLE

========================*/

console.log("✅ TrustGrid Worker Dashboard Loaded Successfully");