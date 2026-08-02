/*========================================

        TRUSTGRID WORKER PROFILE

========================================*/

/*========================================

ACTIVE SIDEBAR

========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar-menu a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/*========================================

SKILL PROGRESS ANIMATION

========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(".progress-fill").forEach(bar => {

        let width = "0%";

        if (bar.classList.contains("fill1")) width = "95%";

        if (bar.classList.contains("fill2")) width = "90%";

        if (bar.classList.contains("fill3")) width = "88%";

        if (bar.classList.contains("fill4")) width = "84%";

        bar.style.width = "0%";

        setTimeout(() => {

            bar.style.transition = "1.5s ease";

            bar.style.width = width;

        }, 300);

    });

});
/*========================================

EDIT PROFILE BUTTON

========================================*/

const editButton = document.querySelector(".edit-btn");

if (editButton) {

    editButton.addEventListener("click", () => {

        showToast("Edit Profile feature will be connected with Flask Backend.");

    });

}

/*========================================

UPLOAD PHOTO BUTTON

========================================*/

const uploadButton = document.querySelector(".upload-btn");

if (uploadButton) {

    uploadButton.addEventListener("click", () => {

        showToast("Photo Upload feature coming soon.");

    });

}

/*========================================

PORTFOLIO PREVIEW

========================================*/

document.querySelectorAll(".portfolio-item").forEach(item => {

    item.addEventListener("click", () => {

        showToast("Portfolio Preview will open here.");

    });

});
/*========================================

TOAST NOTIFICATION

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

/*========================================

CARD HOVER EFFECT

========================================*/

document.querySelectorAll(

    ".info-card,.experience-card,.certificate-card,.portfolio-item,.service-card"

).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/*========================================

CONSOLE

========================================*/

console.log("✅ TrustGrid Worker Profile Loaded Successfully");