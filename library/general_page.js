// ----------------------
// HEADER
// ----------------------
function renderHeader() {
    const target = document.querySelector(".main-header");
    if (!target) return;

    target.innerHTML = `
        <nav class="navbar">
            <ul class="nav-menu">
                <li>
                    <a href="home.html">
                        <img class="logo" src="img/logo-2.png" alt="Khoo Family Library Logo">
                    </a>
                </li>

                <li class="dropdown">
                    <a href="our-mission.html">Our Vision</a>
                    <ul class="dropdown-menu">
                        <li><a href="our-mission.html">Our Mission</a></li>
                        <li><a href="who-we-are.html">Who We Are</a></li>
                    </ul>
                </li>

                <li><a href="explore-library.html">Explore Library</a></li>

                <li class="dropdown">
                    <a href="contact-us.html">Contact Us</a>
                    <ul class="dropdown-menu">
                        <li><a href="contact-us.html">Contact Us</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>

                <li>
                    <a id="login" href="login.html">Login/Sign Up</a>
                </li>
            </ul>
        </nav>
    `;
}

// ----------------------
// SCROLL
// ----------------------
function initScrollHeader() {
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.scrollbarWidth = "none"; // Firefox
    document.documentElement.style.msOverflowStyle = "none"; // IE 10+
    
    const style = document.createElement('style');
    style.textContent = `
        ::-webkit-scrollbar { display: none; }
    `;
    document.head.appendChild(style);
});

// ----------------------
// WAITLIST
// ----------------------
function renderWaitlist() {
    const target = document.querySelector(".waitlist");
    if (!target) return; // If the page doesn't have a waitlist, do nothing

    target.innerHTML = `
        <section class="waitlist-hero">
            <div class="waitlist-container">
                <h2>Join the Waitlist</h2>
                <p>Be the first to know when new books get added to the catalogue. 
                Get early access and exclusive updates.</p>

                <form class="waitlist-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">Join Now</button>
                </form>
            </div>
        </section>
    `;
}

// ----------------------
// FOOTER
// ----------------------

function renderFooter(){
    const target = document.querySelector(".site-footer");
    if (!target) return;
    
    target.innerHTML = `
    <p>&copy; 2025 Khoo Family Library. All rights reserved.</p>
    <div class="footer-links">
        <a href="Privacy_policy.html">Privacy Policy</a>
        <a href="Terms_of_service.html">Terms of Service</a>
        <a href="Mobile_app.html">Download Mobile App</a>
    </div>`;
}

// ----------------------
// INITIALIZE
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    initScrollHeader();
    renderWaitlist();
    renderFooter();
});
