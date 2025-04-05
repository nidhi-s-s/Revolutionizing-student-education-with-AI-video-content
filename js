// Show Page Function
function showPage(page) {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(page).style.display = "block";
}

// Login Function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "root" && pass === "root1") {
        alert("Login Successful!");
        document.getElementById("login-page").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Invalid Credentials!";
    }
}

// Logout Function
function logout() {
    alert("Logged out!");
    document.getElementById("main-content").style.display = "none";
    document.getElementById("login-page").style.display = "block";
}

// Dashboard Toggle
function toggleDashboard() {
    let dashboard = document.getElementById("dashboard");
    dashboard.classList.toggle("show");
}

// Close Dashboard When Clicking Outside
document.addEventListener("click", function(event) {
    let dashboard = document.getElementById("dashboard");
    let toggleBtn = document.querySelector(".toggle-btn");

    if (!dashboard.contains(event.target) && !toggleBtn.contains(event.target)) {
        dashboard.classList.remove("show");
    }
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}