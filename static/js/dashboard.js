/* ===========================================
   TrustGrid Dashboard JS
   Part 1D
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ TrustGrid Dashboard Loaded");

    /* =====================================
            ACTIVE SIDEBAR MENU
    ===================================== */

    const menuItems = document.querySelectorAll(".sidebar-menu li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(menu => {
                menu.classList.remove("active");
            });

            item.classList.add("active");

        });

    });

    /* =====================================
            SEARCH BOX EFFECT
    ===================================== */

    const searchInput = document.querySelector(".search-box input");
    const searchBox = document.querySelector(".search-box");

    if (searchInput) {

        searchInput.addEventListener("focus", () => {

            searchBox.style.boxShadow =
                "0 0 18px rgba(46,204,113,.35)";

            searchBox.style.borderColor = "#2ECC71";

        });

        searchInput.addEventListener("blur", () => {

            searchBox.style.boxShadow = "none";

            searchBox.style.borderColor = "#E5E7EB";

        });

    }

    /* =====================================
        PROFILE HOVER
    ===================================== */

    const profile = document.querySelector(".profile");

    if (profile) {

        profile.addEventListener("mouseenter", () => {

            profile.style.transform = "translateY(-2px)";

        });

        profile.addEventListener("mouseleave", () => {

            profile.style.transform = "translateY(0)";

        });

    }

    /* =====================================
        NOTIFICATION BUTTON
    ===================================== */

    const bell = document.querySelector(".notification-btn");

    if (bell) {

        bell.addEventListener("click", () => {

            bell.style.transform = "scale(.90)";

            setTimeout(() => {

                bell.style.transform = "scale(1)";

            }, 120);

        });

    }

    /* =====================================
        GREETING
    ===================================== */

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {

        greeting = "Good Morning ☀️";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon 🌤️";

    }

    else {

        greeting = "Good Evening 🌙";

    }

    console.log(greeting);

});