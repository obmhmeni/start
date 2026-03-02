function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name == "" || email == "" || password == "") {
        document.getElementById("result").innerHTML = "All fields are required!";
        return false;
    }

    document.getElementById("result").innerHTML =
        "Welcome " + name + "! Form Submitted Successfully 🚀";

    return false; // prevents page refresh
}
