document.addEventListener("DOMContentLoaded", () => {
    // ========================================
    // Triggers
    // ========================================
    const menuButton = document.querySelector(
        'button[aria-label="Menü öffnen"]'
    );
    const contactButton = document.querySelector(
        ".contact-trigger"
);
    // ========================================
    // Create overlay
    // ========================================
    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);
    // ========================================
    // Mobile Sidebar
    // ========================================
    const mobileSidebar = document.createElement("aside");
    mobileSidebar.className =
        "sidebar sidebar--mobile";
    mobileSidebar.innerHTML = `
        <div class="sidebar__header">
            <button
                type="button"
                class="sidebar__close"
                aria-label="Menü schließen"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                >
                    <line
                        x1="4"
                        y1="4"
                        x2="20"
                        y2="20"
                    ></line>
                    <line
                        x1="20"
                        y1="4"
                        x2="4"
                        y2="20"
                    ></line>
                </svg>
            </button>
        </div>
        <nav
            class="sidebar__nav"
            aria-label="Mobile Navigation"
        >
            <ul class="sidebar__list">
                <li>
                    <a href="">
                        DAMENSCHMUCK
                    </a>
                </li>
                <li>
                    <a href="">
                        HERRENSCHMUCK
                    </a>
                </li>
                <li>
                    <a href="">
                        KINDERSCHMUCK
                    </a>
                </li>
            </ul>
            <div class="sidebar__options">
                <!-- Language -->
                <button type="button">
                    DE
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <polyline
                            points="6 9 12 15 18 9"
                        ></polyline>
                    </svg>
                </button>
                <!-- Wishlist -->
                <a href="">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        ></path>
                    </svg>
                    FAVORITEN
                </a>
                <!-- Login -->
                <a href="">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        ></path>
                        <circle
                            cx="12"
                            cy="7"
                            r="4"
                        ></circle>
                    </svg>
                    LOGIN
                </a>
            </div>
        </nav>
        <!-- Mobile contact information -->
        <div class="sidebar__contact-grid">
            <a href="tel:+41582275020">
                <span>
                    Telefon
                </span>
                <small>
                    +41 58 227 50 20
                </small>
            </a>
            <a href="https://wa.me/41788505549">
                <span>
                    WhatsApp
                </span>
                <small>
                    +41 78 850 55 49
                </small>
            </a>
            <a href="mailto:info@muau.ch">
                <span>
                    E-Mail
                </span>
                <small>
                    info@muau.ch
                </small>
            </a>
            <a href="">
                <span>
                    Termin
                </span>
                <small>
                    Beratung buchen
                </small>
            </a>
        </div>
    `;
    document.body.appendChild(mobileSidebar);
    // ========================================
    // Contact Sidebar
    // ========================================
    const contactSidebar = document.createElement("aside");
    contactSidebar.className =
        "sidebar sidebar--contact";
    contactSidebar.innerHTML = `
        <div class="sidebar__header">
            <div>
                <h2>
                    WIR HELFEN IHNEN GERNE
                </h2>
                <p>
                    Kontaktieren Sie uns für eine persönliche Beratung.
                </p>
            </div>
            <button
                type="button"
                class="sidebar__close"
                aria-label="Menü schließen"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                >
                    <line
                        x1="4"
                        y1="4"
                        x2="20"
                        y2="20"
                    ></line>
                    <line
                        x1="20"
                        y1="4"
                        x2="4"
                        y2="20"
                    ></line>
                </svg>
            </button>
        </div>
        <div class="contact-sidebar__items">
            <a href="tel:+41582275020">
                <span>
                    Telefon
                </span>
                <small>
                    +41 58 227 50 20
                </small>
            </a>
            <a href="https://wa.me/41788505549">
                <span>
                    WhatsApp
                </span>
                <small>
                    +41 78 850 55 49
                </small>
            </a>
            <a href="mailto:info@muau.ch">
                <span>
                    E-Mail
                </span>
                <small>
                    info@muau.ch
                </small>
            </a>
            <a href="">
                <span>
                    Termin
                </span>
                <small>
                    Beratung buchen
                </small>
            </a>
        </div>
        <div class="contact-sidebar__logo">
            <img
                src="assets/images/logo.png"
                alt="MUAU Schmuck"
            >
        </div>
    `;
    document.body.appendChild(contactSidebar);
    // ========================================
    // Close buttons
    // ========================================
    const mobileClose = mobileSidebar.querySelector(
        ".sidebar__close"
    );
    const contactClose = contactSidebar.querySelector(
        ".sidebar__close"
    );
    // ========================================
    // Open Mobile Sidebar
    // ========================================
    function openMobileSidebar() {
        closeSidebars();
        mobileSidebar.classList.add("is-open");
        overlay.classList.add("is-visible");
        document.body.classList.add("sidebar-open");
        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    }
    // ========================================
    // Open Contact Sidebar
    // ========================================
    function openContactSidebar() {
        closeSidebars();
        contactSidebar.classList.add("is-open");
        overlay.classList.add("is-visible");
        document.body.classList.add("sidebar-open");
    }
    // ========================================
    // Close Sidebars
    // ========================================
    function closeSidebars() {
        mobileSidebar.classList.remove("is-open");
        contactSidebar.classList.remove("is-open");
        overlay.classList.remove("is-visible");
        document.body.classList.remove("sidebar-open");
        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }
    // ========================================
    // Events
    // ========================================
    if (menuButton) {
        menuButton.addEventListener(
            "click",
            openMobileSidebar
        );
    }
    if (contactButton) {
        contactButton.addEventListener(
            "click",
            (event) => {
                event.preventDefault();
                openContactSidebar();
            }
        );
    }
    if (mobileClose) {
        mobileClose.addEventListener(
            "click",
            closeSidebars
        );
    }
    if (contactClose) {
        contactClose.addEventListener(
            "click",
            closeSidebars
        );
    }
    overlay.addEventListener(
        "click",
        closeSidebars
    );
    // ========================================
    // ESC
    // ========================================
    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeSidebars();
            }
        }
    );
});

const searchForm = document.querySelector('.search');
const searchInput = searchForm.querySelector('input');
const searchResults = searchForm.querySelector('.search-results');
const links = [...document.querySelectorAll('a')];
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (searchValue === '') {
        searchResults.classList.remove('is-visible');
        return;
    }
    const matches = links
        .filter(link => {
            const text = link.textContent.trim().toLowerCase();
            return text.includes(searchValue);
        })
        .slice(0, 3);
    matches.forEach(link => {
        const result = document.createElement('a');
        result.href = link.href;
        result.textContent = link.textContent.trim();
        searchResults.appendChild(result);
    });
    if (matches.length > 0) {
        searchResults.classList.add('is-visible');
    } else {
        searchResults.classList.remove('is-visible');
    }
});