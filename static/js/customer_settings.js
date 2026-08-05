/* ==========================================
   TRUSTGRID
   CUSTOMER SETTINGS
   JAVASCRIPT
========================================== */

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

/* ==========================================
   HEADER SHADOW
========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.style.boxShadow = window.scrollY > 40

        ? "0 15px 35px rgba(0,0,0,.12)"

        : "0 5px 20px rgba(0,0,0,.08)";

});

/* ==========================================
   CHANGE PHOTO
========================================== */

const photoButton = document.querySelector(".change-photo-btn");

if (photoButton) {

    photoButton.addEventListener("click", () => {

        alert("Profile photo upload will be available after backend integration.");

    });

}

/* ==========================================
   SAVE CHANGES
========================================== */

const saveButton = document.querySelector(".save-btn");

if (saveButton) {

    saveButton.addEventListener("click", () => {

        alert("Your settings have been saved successfully.");

    });

}

/* ==========================================
   LOGOUT
========================================== */

const logoutButton = document.querySelector(".logout-btn");

if (logoutButton) {

    logoutButton.addEventListener("click", () => {

        if (confirm("Are you sure you want to logout?")) {

            window.location.href = "login.html";

        }

    });

}

/* ==========================================
   DELETE ACCOUNT
========================================== */

const deleteButton = document.querySelector(".delete-btn");

if (deleteButton) {

    deleteButton.addEventListener("click", () => {

        if (confirm("Delete your TrustGrid account permanently?")) {

            alert("Account deletion request submitted.");

        }

    });

}

/* ==========================================
   DARK MODE
========================================== */

const switches = document.querySelectorAll(".switch input");

switches.forEach(toggle => {

    toggle.addEventListener("change", () => {

        const title = toggle.closest(".setting-item")

            ?.querySelector("h3")?.textContent;

        console.log(title + " changed.");

    });

});

/* ==========================================
   FORM VALIDATION
========================================== */

const form = document.querySelector(".settings-form");

if (form) {

    const inputs = form.querySelectorAll("input");

    inputs.forEach(input => {

        input.addEventListener("blur", () => {

            if (input.value.trim() === "") {

                input.style.borderColor = "#EF4444";

            }

            else {

                input.style.borderColor = "#22C55E";

            }

        });

    });

}

/* ==========================================
   RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        ripple.classList.add("ripple");

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = e.offsetX - size / 2 + "px";

        ripple.style.top = e.offsetY - size / 2 + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const cards = document.querySelectorAll(

    ".settings-card,.setting-item"

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

    card.style.transition = ".6s ease";

    observer.observe(card);

});

/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("Customer Settings Loaded Successfully");

});

/* ==========================================
   END
========================================== */