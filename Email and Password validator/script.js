

let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailAns) {
        document.querySelector("#emailError").innerText = "Invalid email format!";
        isValid = false;
    } else {
        document.querySelector("#emailError").innerText = "";
    }

    if (!passwordAns) {
        document.querySelector("#passwordError").innerText =
            "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        isValid = false;

    } else {
        document.querySelector("#passwordError").innerText = "";
    }

    if(isValid){
        document.querySelector(".showresult").textContent = "Everything is Correct!"
    }
})