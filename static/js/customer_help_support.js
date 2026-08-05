/*==================================================

        TRUSTGRID HELP & SUPPORT

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

        link.style.transform = "translateY(0)";

    });

});

/*=========================================
        FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    const icon = item.querySelector("i");

    question.addEventListener("click", () => {

        const open = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(a => {

            a.style.display = "none";

        });

        document.querySelectorAll(".faq-question i").forEach(i => {

            i.className = "bi bi-plus-lg";

        });

        if (!open) {

            answer.style.display = "block";

            icon.className = "bi bi-dash-lg";

        }

    });

});

/*=========================================
        SEARCH HELP
=========================================*/

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        faqItems.forEach(item => {

            const text = item.innerText.toLowerCase();

            item.style.display = text.includes(value) ? "block" : "none";

        });

    });

}
/*==================================================

                PART 2

==================================================*/

/*=========================================
        LIVE CHAT
=========================================*/

const chatBtn = document.querySelector(".chat-btn");

if (chatBtn) {

    chatBtn.addEventListener("click", () => {

        showToast("Live Chat will be available soon 💬");

    });

}

/*=========================================
        TICKET FORM
=========================================*/

const ticketForm = document.querySelector(".ticket-form");

if (ticketForm) {

    ticketForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const subject = ticketForm.querySelector("input").value.trim();

        const description = ticketForm.querySelector("textarea").value.trim();

        if (subject === "" || description === "") {

            showToast("Please fill all required fields.");

            return;

        }

        showToast("Support ticket submitted successfully 🎉");

        ticketForm.reset();

    });

}
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.help-search,.faq-section,.support-card,.support-ticket"

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