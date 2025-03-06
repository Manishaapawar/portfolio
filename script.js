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

    // Mobile menu toggle
    document.querySelector(".menu-icon").addEventListener("click", function() {
        document.getElementById("mobileMenu").classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".mobile-menu a").forEach(item => {
        item.addEventListener("click", function() {
            document.getElementById("mobileMenu").classList.remove("active");
        });
    });
});