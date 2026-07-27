// ============================
// PRELODER EFFECT
// ============================
window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);

    }, 1500);

});
// ============================
// NAVBAR SCROLL EFFECT
// ============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.padding = "18px 10%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    } else {
        header.style.padding = "25px 10%";
        header.style.boxShadow = "none";
    }

});

// ============================
// HAMBURGER MENU TOGGLE
// ============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuBtn.classList.toggle("active");
});
// ============================
// SCROLL REVEAL ANIMATION
// ============================

const revealElements = document.querySelectorAll(
    ".collections, .story, .arrivals, .newsletter, footer"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ============================
// IMAGE HOVER PARALLAX
// ============================

const cards = document.querySelectorAll(
    ".collection-card, .product"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.transform =
            `rotateY(${x / 30 - 5}deg)
         rotateX(${y / -30 + 5}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

});

// ============================
// NEWSLETTER
// ============================

const newsletterForm =
    document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for subscribing to Aurelia."
        );

    });

}

// ============================
// SMOOTH BUTTON EFFECT
// ============================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px)";

    });

});


// ==========================
// BACK TO TOP 
//=============
const btn = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    }else {
        btn.style.display = "none";
    }
}


//Scroll to tp when clicked

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}