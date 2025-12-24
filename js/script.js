// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", () => {

    /* ---------- THEME TOGGLE ---------- */
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            themeToggle.textContent =
                document.body.classList.contains("dark") ? "☀️" : "🌙";
        });
    }

    /* ---------- HAMBURGER MENU ---------- */
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent immediate close
            navLinks.classList.toggle("active");
        });

        // Close menu on link click (mobile UX)
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove("active");
            }
        });
    }

    /* ---------- IMAGE GALLERY MODAL ---------- */
    const openGallery = document.getElementById("open-gallery");
    const closeGallery = document.getElementById("close-gallery");
    const gallery = document.getElementById("gallery");

    if (openGallery && closeGallery && gallery) {

        // Open gallery
        openGallery.addEventListener("click", () => {
            gallery.style.display = "flex";
            document.body.style.overflow = "hidden"; // prevent background scroll
        });

        // Close gallery
        const closeModal = () => {
            gallery.style.display = "none";
            document.body.style.overflow = "auto";
        };

        closeGallery.addEventListener("click", closeModal);

        // Close when clicking outside content
        gallery.addEventListener("click", (e) => {
            if (e.target === gallery) {
                closeModal();
            }
        });

        // Close on ESC key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && gallery.style.display === "flex") {
                closeModal();
            }
        });
    }

});
