function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "habiba";
    let correctPassword = "12345";

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return false;
    }

    if (username === correctUsername && password === correctPassword) {
        alert("Login Succeeded");
        window.location.href = "menu.html";
        return false;
    } else {
        alert("Invalid Username or Password");
        return false;
    }
}