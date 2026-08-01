/*==================================================

            TRUSTGRID WALLET

==================================================*/

/*=========================================
        NAVIGATION HOVER
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-3px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0px)";

    });

});

/*=========================================
        LOGO SCROLL
=========================================*/

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
        WALLET BUTTONS
=========================================*/

const addMoneyBtn = document.querySelector(".add-money-btn");

const withdrawBtn = document.querySelector(".withdraw-btn");

if (addMoneyBtn) {

    addMoneyBtn.addEventListener("click", () => {

        showToast("Add Money feature coming soon 💰");

    });

}

if (withdrawBtn) {

    withdrawBtn.addEventListener("click", () => {

        showToast("Withdraw feature coming soon 💸");

    });

}
/*==================================================

                PART 2

====================================================*/

/*=========================================
        PAYMENT METHODS
=========================================*/

document.querySelectorAll(".edit-payment-btn").forEach(button => {

    button.addEventListener("click", () => {

        showToast("Payment method settings will be available in backend.");

    });

});

/*=========================================
        TRANSACTION CARDS
=========================================*/

document.querySelectorAll(".transaction-card").forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.98)";

        setTimeout(() => {

            card.style.transform = "translateY(-6px)";

        }, 150);

        showToast("Transaction details coming soon.");

    });

});

/*=========================================
        STAT CARDS
=========================================*/

document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.background = "#EEF8F2";

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#F8FAFC";

    });

});
/*==================================================

                PART 3

====================================================*/

/*=========================================
        PAGE LOAD
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.wallet-balance-card,.payment-card,.transaction-card"

    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});

/*=========================================
        TOAST
=========================================*/

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";

    toast.style.right = "25px";

    toast.style.bottom = "25px";

    toast.style.background = "#2ECC71";

    toast.style.color = "#fff";

    toast.style.padding = "15px 22px";

    toast.style.borderRadius = "12px";

    toast.style.fontWeight = "600";

    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";

    toast.style.zIndex = "9999";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

/*=========================================
        RIPPLE EFFECT
=========================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.style.position = "absolute";

        ripple.style.borderRadius = "50%";

        ripple.style.background = "rgba(255,255,255,.35)";

        ripple.style.transform = "scale(0)";

        ripple.style.animation = "ripple .6s linear";

        ripple.style.pointerEvents = "none";

        this.style.position = "relative";

        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});