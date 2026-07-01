// ===============================
// AGRISMART JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // WELCOME MESSAGE
    // =========================
    console.log("AgriSmart system loaded successfully");

    // =========================
    // CONTACT FORM VALIDATION
    // =========================
    const contactForm = document.querySelector(".form-card form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            const name = contactForm.querySelector("input[type='text']").value.trim();
            const email = contactForm.querySelector("input[type='email']").value.trim();
            const message = contactForm.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all required fields.");
                e.preventDefault();
            } else {
                alert("Message sent successfully. We will contact you soon!");
            }

        });
    }

    // =========================
    // LOGIN VALIDATION
    // =========================
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const role = document.getElementById("role").value;

            if (!email || !password || !role) {
                alert("Please fill all login fields.");
                e.preventDefault();
                return;
            }

            alert("Login successful!");

            // Simulated redirect
            if (role === "Farmer") {
                window.location.href = "user.html";
            } else if (role === "Administrator") {
                window.location.href = "admin.html";
            }

            e.preventDefault();
        });
    }

    // =========================
    // REGISTER VALIDATION
    // =========================
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {

            const inputs = registerForm.querySelectorAll("input[required], select[required]");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                }
            });

            const password = registerForm.querySelector("input[type='password']").value;
            const confirmPassword = registerForm.querySelectorAll("input[type='password']")[1].value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                e.preventDefault();
                return;
            }

            if (!valid) {
                alert("Please fill all required fields.");
                e.preventDefault();
                return;
            }

            alert("Account created successfully!");
            window.location.href = "login.html";

            e.preventDefault();
        });
    }

    // =========================
    // LOGOUT CONFIRMATION
    // =========================
    const logoutLinks = document.querySelectorAll("a[href='login.html']");

    logoutLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const confirmLogout = confirm("Are you sure you want to logout?");
            if (!confirmLogout) {
                e.preventDefault();
            }
        });
    });

    // =========================
    // DASHBOARD INTERACTION
    // =========================
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            console.log("Button clicked:", this.innerText);
        });
    });

    // =========================
    // LIVE CLOCK (OPTIONAL NICE FEATURE)
    // =========================
    const hero = document.querySelector(".hero");

    if (hero) {
        const clock = document.createElement("p");

        setInterval(() => {
            const now = new Date();
            clock.innerText = "Current Time: " + now.toLocaleTimeString();
        }, 1000);

        hero.appendChild(clock);
    }

});