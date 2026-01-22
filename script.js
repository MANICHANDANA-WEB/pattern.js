document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "admin";
    let correctPassword = "12345";

    if (password == correctPassword) {
        console.log("Password matched using ==");
    } else {
        console.log("Password did NOT match using ==");
    }

    if (username === correctUsername && password === correctPassword) {
        console.log("Login Successful using ===");
    } else {
        console.log("Login Failed using ===");
    }

    console.log("Entered Username:", username);
    console.log("Entered Password:", password);
});
