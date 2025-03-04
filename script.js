document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Responsive Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar"); // Corrected selector

    if (menuToggle && navMenu) { // Prevents errors if elements don't exist
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }
});