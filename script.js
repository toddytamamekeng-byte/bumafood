/* =======================================
   BUMA FOOD PREMIUM WEBSITE
   script.js v1.0
   Part 1
======================================= */

"use strict";

/* ===========================
   MENU TOGGLE
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

/* ===========================
   SMOOTH SCROLL
=========================== */

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});

/* ===========================
   HEADER SCROLL EFFECT
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 80){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});

/* ===========================
   ACTIVE MENU
=========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ===========================
   PRELOADER (OPTIONAL)
=========================== */

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});
/* =======================================
   BUMA FOOD PREMIUM WEBSITE
   script.js v1.0
   Part 2
======================================= */

/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

const revealItems = document.querySelectorAll(
".card, .product-card, .service-card, .gallery img, .testimonial-card, .faq-item"
);

const revealOnScroll = () => {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   BACK TO TOP BUTTON
=========================== */

const backTop = document.createElement("button");

backTop.className = "back-top";

backTop.innerHTML = "↑";

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   PRODUCT HOVER EFFECT
=========================== */

const products = document.querySelectorAll(".product-card");

products.forEach(product => {

    product.addEventListener("mouseenter", () => {

        product.style.transform = "translateY(-10px)";

    });

    product.addEventListener("mouseleave", () => {

        product.style.transform = "";

    });

});

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const section = document.querySelector(".counter");

    if (!section) return;

    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            let value = parseInt(counter.textContent);

            if (isNaN(value)) return;

            let start = 0;

            let speed = value / 80;

            const update = () => {

                start += speed;

                if (start < value) {

                    counter.textContent = Math.floor(start);

                    requestAnimationFrame(update);

                } else {

                    counter.textContent = value;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

startCounter();

/* ===========================
   IMAGE ZOOM
=========================== */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

/* ===========================
   CONSOLE INFO
=========================== */

console.log("================================");

console.log("BUMA FOOD Premium Website");

console.log("Version : 1.0");

console.log("Developer : Toddy Official");

console.log("================================");
/* =======================================
   BUMA FOOD PREMIUM WEBSITE
   script.js v1.0
   Part 3
=======================================*/

/* ===========================
   DARK MODE
=========================== */

const darkButton = document.createElement("button");

darkButton.className = "dark-mode";

darkButton.innerHTML = "🌙";

document.body.appendChild(darkButton);

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    darkButton.innerHTML = "☀️";

}

darkButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        darkButton.innerHTML="☀️";

    }else{

        localStorage.setItem("theme","light");

        darkButton.innerHTML="🌙";

    }

});

/* ===========================
   HERO TYPING EFFECT
=========================== */

const heroTitle = document.querySelector(".hero h2");

if(heroTitle){

    const originalText = heroTitle.textContent;

    heroTitle.textContent = "";

    let index = 0;

    function typing(){

        if(index < originalText.length){

            heroTitle.textContent += originalText.charAt(index);

            index++;

            setTimeout(typing,40);

        }

    }

    window.addEventListener("load",typing);

}

/* ===========================
   YEAR AUTO UPDATE
=========================== */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    "© " + year + " BUMA FOOD. Semua Hak Dilindungi.";

}

/* ===========================
   PRODUCT BUTTON
=========================== */

const orderButtons =
document.querySelectorAll(".btn-product");

orderButtons.forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const product =
        button.parentElement.querySelector("h3").textContent;

        const message =
        "Halo BUMA FOOD,%0ASaya ingin memesan:%0A%0A" +
        product;

        window.open(
        "https://wa.me/6281242011989?text="+message,
        "_blank");

    });

});

/* ===========================
   IMAGE LAZY LOADING
=========================== */

const images =
document.querySelectorAll("img");

images.forEach(image=>{

    image.loading="lazy";

});

/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* ===========================
   DISABLE RIGHT CLICK
=========================== */

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

/* ===========================
   DISABLE F12
=========================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="F12"){

        e.preventDefault();

    }

});

/* ===========================
   WEBSITE INFO
=========================== */

console.log("====================================");

console.log("BUMA FOOD Premium Website");

console.log("Version : 1.0");

console.log("Developer : Toddy Official");

console.log("Powered by HTML CSS JavaScript");

console.log("====================================");

/* ===========================
   END OF FILE
=========================== */