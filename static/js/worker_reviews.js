/*========================================

        TRUSTGRID WORKER REVIEWS

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

COUNTER ANIMATION

========================*/

const counters = document.querySelectorAll(".review-card h3");

counters.forEach(counter => {

    const original = counter.innerText;

    const target = parseInt(original.replace(/[^0-9]/g, ""));

    if (isNaN(target)) return;

    let count = 0;

    const speed = Math.ceil(target / 40);

    const update = () => {

        if (count < target) {

            count += speed;

            if (count > target) {

                count = target;

            }

            if (original.includes("/")) {

                counter.innerHTML = count + " / 5";

            }

            else if (original.includes("100")) {

                counter.innerHTML = count + " / 100";

            }

            else {

                counter.innerHTML = count;

            }

            requestAnimationFrame(update);

        }

    };

    update();

});
/*========================================

        PROGRESS BAR

========================================*/

document.querySelectorAll(".progress-fill").forEach(bar => {

    const width = bar.style.width || window.getComputedStyle(bar).width;

    const target = bar.className.includes("fill-5") ? "85%" :

        bar.className.includes("fill-4") ? "10%" :

            bar.className.includes("fill-3") ? "3%" :

                bar.className.includes("fill-2") ? "1%" : "1%";

    bar.style.width = "0%";

    setTimeout(() => {

        bar.style.transition = "1.5s";

        bar.style.width = target;

    }, 300);

});

/*========================

SEARCH REVIEW

========================*/

const search = document.querySelector(".search-box input");

const reviews = document.querySelectorAll(".customer-card");

if (search) {

    search.addEventListener("keyup", () => {

        const value = search.value.toLowerCase();

        reviews.forEach(card => {

            card.style.display = card.innerText.toLowerCase().includes(value)

                ? "" : "none";

        });

    });

}
/*========================================

        REPLY BUTTON

========================================*/

document.querySelectorAll(".reply-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        showToast("Reply feature will be connected with backend.");

    });

});

/*========================

PAGINATION

========================*/

document.querySelectorAll(".page-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".page-btn").forEach(b => {

            b.classList.remove("active");

        });

        btn.classList.add("active");

    });

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

/*========================

CONSOLE

========================*/

console.log("✅ Worker Reviews Loaded Successfully");
