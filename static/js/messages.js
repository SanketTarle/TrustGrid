/*==================================================

            TRUSTGRID MESSAGES

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
        SEARCH CHAT
=========================================*/

const searchInput = document.querySelector(".chat-search input");

const chatItems = document.querySelectorAll(".chat-item");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        chatItems.forEach(chat => {

            if (chat.innerText.toLowerCase().includes(value)) {

                chat.style.display = "flex";

            } else {

                chat.style.display = "none";

            }

        });

    });

}

/*=========================================
        SELECT CHAT
=========================================*/

chatItems.forEach(chat => {

    chat.addEventListener("click", () => {

        chatItems.forEach(item => item.classList.remove("active"));

        chat.classList.add("active");

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
/*==================================================

                PART 2

==================================================*/

/*=========================================
        SEND MESSAGE
=========================================*/

const messageInput = document.querySelector(".chat-input input");

const sendBtn = document.querySelector(".send-btn");

const chatBody = document.querySelector(".chat-body");

function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") return;

    const message = document.createElement("div");

    message.className = "message sent";

    message.innerHTML = `

<div class="message-text">

${text}

</div>

<span class="time">

${new Date().toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    })} ✔✔

</span>

`;

    chatBody.appendChild(message);

    messageInput.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;

}

if (sendBtn) {

    sendBtn.addEventListener("click", sendMessage);

}

/*=========================================
        ENTER KEY
=========================================*/

if (messageInput) {

    messageInput.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            sendMessage();

        }

    });

}

/*=========================================
        CHAT ACTION BUTTONS
=========================================*/

document.querySelectorAll(".chat-actions button").forEach(button => {

    button.addEventListener("click", () => {

        showToast("Feature coming soon 🚀");

    });

});

/*=========================================
        ICON BUTTONS
=========================================*/

document.querySelectorAll(".icon-btn").forEach(button => {

    button.addEventListener("click", () => {

        showToast("This feature will be available in backend.");

    });

});
/*==================================================

                PART 3

==================================================*/

/*=========================================
        PAGE LOAD ANIMATION
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".hero-card,.chat-sidebar,.chat-window"

    ).forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".6s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

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
    toast.style.color = "white";

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
        DEMO AUTO REPLY
=========================================*/

function autoReply() {

    const reply = document.createElement("div");

    reply.className = "message received";

    reply.innerHTML = `

<div class="message-text">

Thank you! I'll check and reply shortly. 😊

</div>

<span class="time">

${new Date().toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    })}

</span>

`;

    chatBody.appendChild(reply);

    chatBody.scrollTop = chatBody.scrollHeight;

}

if (sendBtn) {

    sendBtn.addEventListener("click", () => {

        setTimeout(autoReply, 1500);

    });

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