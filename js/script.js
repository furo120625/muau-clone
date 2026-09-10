const overlay = document.querySelector(".sidebar-overlay");
const mobileSidebar = document.querySelector(".sidebar--mobile");
const contactSidebar = document.querySelector(".sidebar--contact");

const mobileMenuButton = document.querySelector(
    'button[aria-label="Menü öffnen"]'
);
const contactButton = document.querySelector(".contact-trigger");
const mobileCloseButton = mobileSidebar.querySelector(".sidebar__close");
const contactCloseButton = contactSidebar.querySelector(".sidebar__close");
function openMobileSidebar() {
    mobileSidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
    document.body.classList.add("sidebar-open");

    mobileMenuButton.setAttribute("aria-expanded", "true");
}

function openContactSidebar() {
    contactSidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
    document.body.classList.add("sidebar-open");
}

function closeSidebars() {
    mobileSidebar.classList.remove("is-open");
    contactSidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    document.body.classList.remove("sidebar-open");

    mobileMenuButton.setAttribute("aria-expanded", "false");
}
mobileMenuButton.addEventListener("click", openMobileSidebar);

contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    openContactSidebar();
});

mobileCloseButton.addEventListener("click", closeSidebars);
contactCloseButton.addEventListener("click", closeSidebars);
overlay.addEventListener("click", closeSidebars);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSidebars();
    }
});