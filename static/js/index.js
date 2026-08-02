/*====================================================

            TRUSTGRID HOME PAGE

====================================================*/

/*==============================

HERO SLIDER

==============================*/

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));

    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});

setInterval(nextSlide, 5000);
/*====================================================

            PART 2

====================================================*/

/*==============================

COUNTER ANIMATION

==============================*/

const counters = document.querySelectorAll(".stat-card h2");

const speed = 120;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = counter.innerText.replace(/\D/g, '');

        const value = +counter.innerText.replace(/\D/g, '');

        const increment = Math.ceil(target / speed);

        if (value < target) {

            counter.innerText = value + increment;

            setTimeout(updateCounter, 20);

        } else {

            if (counter.innerHTML.includes("K")) {

                counter.innerHTML = target + "K+";

            }

            else if (counter.innerHTML.includes("★")) {

                counter.innerHTML = "4.9★";

            }

            else {

                counter.innerHTML = target + "+";

            }

        }

    };

    updateCounter();

});

/*==============================

SMOOTH SCROLL

==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/*====================================================

            PART 3

====================================================*/

/*==============================

SCROLL REVEAL

==============================*/

const revealItems = document.querySelectorAll(

    ".stat-card,.service-card,.step-card,.worker-card,.why-card,.testimonial-card,.mobile-preview,.cta-card"

);

function revealOnScroll() {

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".6s";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*==============================

BUTTON RIPPLE

==============================*/

document.querySelectorAll("button,a").forEach(btn => {

    btn.addEventListener("click", function (e) {

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
/*====================================================

            PART 3

====================================================*/

/*==============================

SCROLL REVEAL

==============================*/

const revealItems = document.querySelectorAll(

    ".stat-card,.service-card,.step-card,.worker-card,.why-card,.testimonial-card,.mobile-preview,.cta-card"

);

function revealOnScroll() {

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".6s";

});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*==============================

BUTTON RIPPLE

==============================*/

document.querySelectorAll("button,a").forEach(btn => {

    btn.addEventListener("click", function (e) {

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
/*====================================================

            PART 5

====================================================*/

/*==============================

LOADING ANIMATION

==============================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/*==============================

TOAST MESSAGE

==============================*/

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";

    toast.style.bottom = "25px";

    toast.style.right = "25px";

    toast.style.background = "#2ECC71";

    toast.style.color = "#fff";

    toast.style.padding = "15px 25px";

    toast.style.borderRadius = "12px";

    toast.style.boxShadow = "0 15px 35px rgba(0,0,0,.25)";

    toast.style.zIndex = "9999";

    toast.style.opacity = "0";

    toast.style.transition = ".4s";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "1";

    }, 100);

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 2500);

}

/*==============================

BUTTON EVENTS

==============================*/

document.querySelectorAll(

    ".primary-btn,.register-btn,.worker-btn"

).forEach(button => {

    button.addEventListener("click", () => {

        showToast("Redirecting...");

    });

});

/*==============================

COPYRIGHT YEAR

==============================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*==============================

CONSOLE

==============================*/

console.log("🚀 TrustGrid Home Page Loaded Successfully");

console.log("💙 Developed by Founder Sanket");
