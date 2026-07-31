const profileCard = document.querySelector(".profile-card");

profileCard.addEventListener("mouseenter", () => {

    profileCard.style.transform = "translateY(-8px)";

});

profileCard.addEventListener("mouseleave", () => {

    profileCard.style.transform = "translateY(0px)";

});
const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
const skills = document.querySelectorAll(".skills-grid span");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "scale(1.05)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "scale(1)";

    });

});
const certificates = document.querySelectorAll(".certificate-item");

certificates.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
const timeButtons = document.querySelectorAll(".time-grid button");

timeButtons.forEach(btn => {

    btn.onclick = () => {

        timeButtons.forEach(b => b.classList.remove("active-time"));

        btn.classList.add("active-time");

    };

});
const workerCards = document.querySelectorAll(".worker-card");

workerCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
const cta = document.querySelector(".cta-btn");

cta.addEventListener("mouseenter", () => {

    cta.style.transform = "translateY(-5px)";

});

cta.addEventListener("mouseleave", () => {

    cta.style.transform = "translateY(0px)";

});