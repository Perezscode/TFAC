/* ========================= */
/* JAVASCRIPT INTERACTIVITY */
/* ========================= */


/* === DROPDOWN TOGGLE (ABOUT PAGE NAV) === */
const dropbtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown-content');

if (dropbtn && dropdown) {
    dropbtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent closing immediately
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
        dropdown.style.display = 'none';
        }
    });
}


/* === FAQ EXPAND/COLLAPSE FUNCTIONALITY === */
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Close all other items
        faqItems.forEach((other) => {
            if (other !== item) other.classList.remove('active');
        });
        // Toggle this item
        item.classList.toggle('active');
        });
    });
});


/* === MOBILE MENU TOGGLE === */
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
}


/* === SCROLL-IN ANIMATION (REVEAL ON SCROLL) === */
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    for (let el of reveals) {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add('active');
        }
    }
});

// ========== TYPEWRITER ANIMATION ==========
// Typewriter function
function typeWriter(elementId, text, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    function typing() {
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
    }
    if (element) typing();
}

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;

    if (path.includes("index.html") || path === "/" || path === "/index.html") {
        typeWriter("typewriter-index", "Ever Wondered... What is art trying to say, and why now?");
    } else if (path.includes("Programs.html")) {
        typeWriter("typewriter-programs", "Explore Programs That Bring Art to Life");
    } else if (path.includes("News.html")) {
        typeWriter("typewriter-news", "Latest Highlights From The Frame Community");
    } else if (path.includes("Register.html")) {
        typeWriter("typewriter-register", "Ready to Join? Let’s Make Art Together");
    }
});


// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ========== QUOTE GENERATOR ENHANCED ==========
const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote");

const quotes = [
    "Art enables us to find ourselves and lose ourselves at the same time.",
    "Every artist was first an amateur.",
    "The purpose of art is washing the dust of daily life off our souls.",
    "Creativity takes courage.",
    "Art speaks where words are unable to explain."
];

if (newQuoteBtn && quoteText) {
    newQuoteBtn.addEventListener("click", () => {
        quoteText.classList.remove("fade");
        void quoteText.offsetWidth; // restart animation
        quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.classList.add("fade");
    });
}

// ========== Toast Notification on Page Load ==========

window.addEventListener("load", () => {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Welcome to The Frame Art Club!";
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 500);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 8000);
});

// ========== FORM VALIDATION & SUBMIT FEEDBACK ==========

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".join-form");

    if (form) {
        const submitBtn = form.querySelector("button");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.querySelector("#name").value.trim();
            const email = form.querySelector("#email").value.trim();
            const reason = form.querySelector("#reason").value.trim();

            if (!name || !email || !reason) {
                showToast("Please fill out all required fields.");
                return;
            }

            showToast("Thanks for joining! We'll be in touch. 🎨");

            form.reset();
        });
    }
});

// ========== TOAST FEEDBACK FUNCTION ==========

function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}


