/*========================================

        TRUSTGRID WORKER MESSAGES

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

CUSTOMER SEARCH

========================*/

const searchInput = document.querySelector(".chat-search input");
const customers = document.querySelectorAll(".chat-user");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        customers.forEach(customer => {

            customer.style.display = customer.innerText.toLowerCase().includes(value)

                ? "flex"

                : "none";

        });

    });

}

/*========================

SELECT CHAT

========================*/

customers.forEach(customer => {

    customer.addEventListener("click", () => {

        customers.forEach(c => c.classList.remove("active"));

        customer.classList.add("active");

    });

});
/*========================================

        SEND MESSAGE

========================================*/

const sendBtn = document.querySelector(".send-btn");
const messageInput = document.querySelector(".message-box input");
const messages = document.querySelector(".messages");

function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") return;

    const msg = document.createElement("div");

    msg.className = "message sent";

    const now = new Date();

    const time = now.toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    });

    msg.innerHTML = `

        <p>${text}</p>

        <span>${time} ✔✔</span>

    `;

    messages.appendChild(msg);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;

}

if (sendBtn) {

    sendBtn.addEventListener("click", sendMessage);

}

messageInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        e.preventDefault();

        sendMessage();

    }

});

/*========================

AUTO SCROLL

========================*/

if (messages) {

    messages.scrollTop = messages.scrollHeight;

}
/*========================================

        EMOJI & ATTACHMENT

========================================*/

document.querySelector(".emoji-btn").addEventListener("click", () => {

    messageInput.value += " 😊";

    messageInput.focus();

});

document.querySelector(".attach-btn").addEventListener("click", () => {

    showToast("File upload will be connected with backend.");

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

console.log("✅ Worker Messages Loaded Successfully");
