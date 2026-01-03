
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validate();
})

function validate() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let pwd = document.getElementById("pwd").value;
    let cpwd = document.getElementById("cpwd").value;

    // clear previous errors
    document.getElementById("nameerr").innerText = "";
    document.getElementById("emailerr").innerText = "";
    document.getElementById("numerr").innerText = "";
    document.getElementById("pwderr").innerText = "";
    document.getElementById("cpwderr").innerText = "";

    let valid = true;

    if (name === ""){
        document.getElementById("nameerr").innerText="Name required";
        valid = false;
    }

    if (!email.includes('@')) {
        document.getElementById("emailerr").innerText="Invalid Format";
        valid = false;
    }

    if(contact.length != 10 ||isNaN(contact)) {
        document.getElementById("numerr").innerText = "Enter valid 10 digits";
        valid = false;
    }

    if (pwd.length < 6) {
        document.getElementById("pwderr").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (pwd !== cpwd) {
        document.getElementById("cpwderr").innerText = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        alert(`${name} is registered successfully`);
        window.location.href="Login.html";
        return false;
    }

    return valid;
}