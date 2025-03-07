document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("sMdlgZcuzQehQIRpO"); // Initialize EmailJS
    console.log("EmailJS Initialized");

    let form = document.getElementById("contactForm");
    if (!form) {
        console.error("Form not found! Check your HTML.");
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page reload
        console.log("Attempting to send email with EmailJS...");

        let templateParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        console.log("Sending email with parameters:", templateParams);

        // Use `send()` instead of `sendForm()` when passing custom templateParams
        emailjs.send("service_s418ft7", "template_tdearo7", templateParams)
            .then(function(response) {
                console.log("Email sent successfully!", response);
                document.getElementById("responseMessage").innerText = "Message sent successfully!";
                form.reset(); // Clear form after successful submission
            })
            .catch(function(error) {
                console.error("Failed to send email:", error);
                document.getElementById("responseMessage").innerText = "Failed to send message. Please try again.";
            });
    });
});