document.getElementById("signup").addEventListener("submit", function(e) {

    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value.trim();
    let pwd = document.getElementById("pwd").value.trim();
    let cpwd = document.getElementById("cpwd").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let state = document.getElementById('state').value;

    if (!name) {
        alert("Name required");
        return false;
    }


    if(!email.includes('@')) {
        alert("Email not in correct format");
        return false;
    }

    if (!pwd) {
        alert("Please enter the password");
        return false;
    }

    if (pwd.length<6) {
        alert("Password should be greater than 6 characters");
        return false;
    }

    if (!cpwd) {
        alert("Please confirm password");
        return false;
    }

    if (pwd!=cpwd) {
        alert("Please enter correct password");
        return false;
    }

    if (!gender) {
        alert("Please enter the gender");
        return false;
    }

    alert("Registration successful");
    return true;
})