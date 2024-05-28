const textInput = document.querySelectorAll("input[type='text']");
const emailInput = document.querySelectorAll("input[type='email']");
const pswInput = document.querySelector("#psw");
const pswConfirmationInput = document.querySelector("#psw-confirmation");
const submitBtn = document.querySelector("button[type='submit']");
const pswError = document.querySelector(".psw-error");




/* Password match confirmation */

let psw = ""; 
let pswConfirmation = ""

function confirmPsw(event) {
    if (psw !== pswConfirmation) {
        event.preventDefault();
        displayPswError();
    }
}


function displayPswError() {
    pswInput.classList.add("invalid");
    pswConfirmationInput.classList.add("invalid"); 
}

pswInput.addEventListener("input", event => {
    psw = event.target.value;
});


pswConfirmationInput.addEventListener("input", event => {
    pswConfirmation = event.target.value;
});

submitBtn.addEventListener("click", event => {
    confirmPsw(event);
    pswError.textContent = "Password confirmation doesn't match !";
});



