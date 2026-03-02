function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name === "" || email === "" || password === "") {
        document.getElementById("result").innerHTML = "All fields are required!";
        return false;
    }

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = data.message;
    });

    return false;
}
