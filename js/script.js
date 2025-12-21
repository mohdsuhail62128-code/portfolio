// Wait for DOM to load 
document.addEventListener("DOMContentLoaded", () => {

    // ------------------ THEME TOGGLE ------------------
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
        });
    }

    // ------------------ HAMBURGER MENU ------------------
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Optional: Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove("active");
            }
        });
    }

    // ------------------ IMAGE GALLERY ------------------
    const openGallery = document.getElementById("open-gallery");
    const closeGallery = document.getElementById("close-gallery");
    const gallery = document.getElementById("gallery");

    if (openGallery && closeGallery && gallery) {
        // Open gallery modal
        openGallery.addEventListener("click", () => {
            gallery.style.display = "flex";
        });

        // Close gallery modal
        closeGallery.addEventListener("click", () => {
            gallery.style.display = "none";
        });

        // Optional: Close gallery when clicking outside content
        gallery.addEventListener("click", (e) => {
            if (e.target === gallery) {
                gallery.style.display = "none";
            }
        });
    }

});

