document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener("click", function() {
            mobileMenu.classList.toggle("active");
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll(".mobile-menu a").forEach(item => {
            item.addEventListener("click", function() {
                mobileMenu.classList.remove("active");
            });
        });
    } else {
        console.error("Menu icon or mobile menu not found.");
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                e.preventDefault(); // Only prevent default if target exists
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});