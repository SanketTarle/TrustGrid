/* ==========================================
   TRUSTGRID
   CUSTOMER MESSAGES
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
   CHAT SELECTION
========================================== */

document.querySelectorAll(".chat-item").forEach(item => {

    item.addEventListener("click", () => {

        document.querySelectorAll(".chat-item").forEach(chat => {

            chat.classList.remove("active");

        });

        item.classList.add("active");

    });

});

/* ==========================================
   SEND MESSAGE
========================================== */

const messageInput = document.querySelector(".chat-input input");

const sendButton = document.querySelector(".send-btn");

const chatBox = document.querySelector(".chat-messages");

function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") return;

    const message = document.createElement("div");

    message.className = "message sent";

    message.innerHTML = `

        <div class="message-content">

            <p>${text}</p>

            <span>${new Date().toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    })}</span>

        </div>

    `;

    chatBox.appendChild(message);

    messageInput.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;

    autoReply();

}

sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {

        e.preventDefault();

        sendMessage();

    }

});

/* ==========================================
   AUTO REPLY DEMO
========================================== */

function autoReply() {

    setTimeout(() => {

        const reply = document.createElement("div");

        reply.className = "message received";

        reply.innerHTML = `

            <div class="message-content">

                <p>Thank you! I'll get back to you shortly.</p>

                <span>${new Date().toLocaleTimeString([], {

            hour: "2-digit",

            minute: "2-digit"

        })}</span>

            </div>

        `;

        chatBox.appendChild(reply);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1500);

}

/* ==========================================
   SEARCH CHAT
========================================== */

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".chat-item").forEach(item => {

        const name = item.querySelector("h3").textContent.toLowerCase();

        item.style.display = name.includes(value) ? "flex" : "none";

    });

});

/* ==========================================
   CHAT ACTION BUTTONS
========================================== */

document.querySelectorAll(".chat-actions button").forEach(button => {

    button.addEventListener("click", () => {

        alert("This feature will be available after backend integration.");

    });

});

/* ==========================================
   ATTACHMENT
========================================== */

document.querySelector(".attach-btn").addEventListener("click", () => {

    alert("File attachment feature coming soon.");

});

/* ==========================================
   EMOJI
========================================== */

document.querySelector(".emoji-btn").addEventListener("click", () => {

    messageInput.value += "😊 ";

    messageInput.focus();

});

/* ==========================================
   RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

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
   SCROLL TO LATEST MESSAGE
========================================== */

window.addEventListener("load", () => {

    chatBox.scrollTop = chatBox.scrollHeight;

});

/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("Customer Messages Loaded Successfully");

});

/* ==========================================
   END
========================================== */