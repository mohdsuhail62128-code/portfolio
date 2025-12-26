document.addEventListener("DOMContentLoaded", () => {

    /* ===== Theme Toggle ===== */
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle?.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        themeToggle.textContent =
            document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    /* ===== Mobile Menu ===== */
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle?.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    /* ===== Gallery Modal ===== */
    const openGallery = document.getElementById("open-gallery");
    const closeGallery = document.getElementById("close-gallery");
    const gallery = document.getElementById("gallery");

    openGallery?.addEventListener("click", () => {
        gallery.style.display = "flex";
    });

    closeGallery?.addEventListener("click", () => {
        gallery.style.display = "none";
    });

    gallery?.addEventListener("click", (e) => {
        if (e.target === gallery) {
            gallery.style.display = "none";
        }
    });

});
// ------------------ SMOOTH TYPEWRITER ------------------
document.addEventListener("DOMContentLoaded", () => {
    const text = "Mohd Suhail";
    const target = document.getElementById("typewriter");
    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 120);
        }
    }

    setTimeout(type, 500); // slight delay for smooth start
});
