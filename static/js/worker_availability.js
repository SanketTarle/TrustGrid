/*========================================

        TRUSTGRID WORKER AVAILABILITY

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

ONLINE / OFFLINE

========================*/

const onlineSwitch = document.querySelector(".availability-settings .setting-card:first-child input");

const statusText = document.querySelector(".online-status");

if (onlineSwitch) {

    onlineSwitch.addEventListener("change", () => {

        if (onlineSwitch.checked) {

            statusText.innerHTML = "🟢 Online";

            statusText.style.background = "#D9F8E8";

            statusText.style.color = "#16A34A";

        }

        else {

            statusText.innerHTML = "🔴 Offline";

            statusText.style.background = "#FEE2E2";

            statusText.style.color = "#DC2626";

        }

    });

}
/*========================================

        AUTO ACCEPT

========================================*/

const autoSwitch = document.querySelector(".availability-settings .setting-card:last-child input");

const autoStatus = document.querySelector(".auto-status");

if (autoSwitch) {

    autoSwitch.addEventListener("change", () => {

        if (autoSwitch.checked) {

            autoStatus.innerHTML = "Enabled";

            autoStatus.style.background = "#D9F8E8";

            autoStatus.style.color = "#16A34A";

        }

        else {

            autoStatus.innerHTML = "Disabled";

            autoStatus.style.background = "#FEE2E2";

            autoStatus.style.color = "#DC2626";

        }

    });

}

/*========================

CARD HOVER

========================*/

document.querySelectorAll(

    ".status-card,.setting-card,.working-hours,.service-area,.weekly-schedule,.leave-management,.upcoming-leaves"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});
/*========================================

        SAVE SETTINGS

========================================*/

const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        showToast("Availability settings saved successfully.");

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

console.log("✅ Worker Availability Loaded Successfully");