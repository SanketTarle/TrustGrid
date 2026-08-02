/*========================================

        TRUSTGRID WORKER SETTINGS

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

TOGGLE SWITCHES

========================================*/

document.querySelectorAll(".switch input").forEach(toggle => {

    toggle.addEventListener("change", () => {

        if (toggle.checked) {

            showToast("Setting Enabled");

        }

        else {

            showToast("Setting Disabled");

        }

    });

});
/*========================================

SAVE SETTINGS

========================================*/

const saveButton = document.querySelector(".save-btn");

if (saveButton) {

    saveButton.addEventListener("click", () => {

        showToast("Settings Saved Successfully.");

    });

}

/*========================================

UPLOAD BUTTONS

========================================*/

document.querySelectorAll(".upload-btn").forEach(button => {

    button.addEventListener("click", () => {

        showToast("Upload feature will be connected with backend.");

    });

});

/*========================================

LOGOUT BUTTON

========================================*/

const logoutButton = document.querySelector(".logout-btn-settings");

if (logoutButton) {

    logoutButton.addEventListener("click", () => {

        showToast("Logout feature coming soon.");

    });

}

/*========================================

DELETE ACCOUNT

========================================*/

const deleteButton = document.querySelector(".delete-btn");

if (deleteButton) {

    deleteButton.addEventListener("click", () => {

        const confirmDelete = confirm(

            "Are you sure you want to delete your account?"

        );

        if (confirmDelete) {

            showToast("Delete request submitted.");

        }

    });

}
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

CARD HOVER

========================================*/

document.querySelectorAll(".settings-card").forEach(card => {

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

console.log("✅ TrustGrid Worker Settings Loaded Successfully");
