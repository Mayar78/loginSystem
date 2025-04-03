var userNameSign = document.getElementById("userNameSign");
var emailSign = document.getElementById("emailSign");
var passwordSign = document.getElementById("passwordSign");
var alertMassage = document.getElementById("alertMassage");
var signUpBtn = document.getElementById("signUpBtn");
var alertEmail = document.getElementById("alertEmail");
var alertPass = document.getElementById("alertPass");
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var userNameRegex = /^[A-Za-z0-9]{3,12}$/;
var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
var arrUser;
var passIcon = document.querySelector(".passIcon");
var eye = document.getElementById("eye");
var eyeIcon = document.querySelector(".eyeIcon");
alertPass.classList.add("d-none");

/NOte/;
var nameErrorMessage = document.getElementById("nameErrorMessage");

eye.addEventListener("click", function () {
    if (passwordSign.type == "password") {
        passwordSign.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordSign.type = "password";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }
});

userNameSign.addEventListener("input", function () {
    validation(userNameRegex, this);
});
emailSign.addEventListener("input", function () {
    validation(emailRegex, this);
});
passwordSign.addEventListener("input", function () {
    validation(passRegex, this);
});

signUpBtn.addEventListener("click", function () {
    success();
});

if (localStorage.getItem("user") == null) {
    var arrUser = [];
} else {
    arrUser = JSON.parse(localStorage.getItem("user"));
}

function success() {

    if (isEmpty() == true) {
        alertM(
            '<i class="fa-solid fa-circle-exclamation pe-2"></i>All inputs is required', "red"
        );

    } else {
        alertMassage.classList.replace("d-block", "d-none");
        if (isExists() == true) {
            alertM(
                '<i class="fa-solid fa-circle-exclamation pe-2"></i>This email is already taken, try another one!',
                "red"
            );

        } else {
            if (
                validation(userNameRegex, userNameSign, nameErrorMessage) == true &&
                validation(emailRegex, emailSign, alertEmail) == true &&
                validation(passRegex, passwordSign, alertPass) == true
            ) {
                var account = {
                    name: userNameSign.value,
                    email: emailSign.value,
                    pass: passwordSign.value,
                };
                arrUser.push(account);
                alertM('<i class="fa-regular fa-circle-check"></i> Success', "green");
                setTimeout(goToLogin, 2000);
                localStorage.setItem("user", JSON.stringify(arrUser));
            }
        }
    }
}

function isEmpty() {
    if (
        userNameSign.value == "" ||
        emailSign.value == "" ||
        passwordSign.value == ""
    ) {
        return true;
    }
}
function isExists() {
    for (var i = 0; i < arrUser.length; i++) {
        if (emailSign.value == arrUser[i].email) {
            return true;
        }
    }
}

function validation(regex, element, errorElement) {
    if (regex.test(element.value) == true) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");

        errorElement?.classList.replace("d-block", "d-none"); // لما يجي يدوس تاني الايرور هيروح

        return true;
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        errorElement?.classList.replace("d-none", "d-block"); // Show the error if invalid الايرورز هتطلع بالترتيب في انهي input مش مع بعض
        return false;
    }
}

function goToLogin() {
    location.href = "../index.html";
}
function alertM(txt, color) {
    alertMassage.classList.replace("d-none", "d-block");
    alertMassage.innerHTML = txt;
    alertMassage.style.color = color;

    /Note/

    nameErrorMessage.classList.replace("d-block", "d-none")
    alertEmail.classList.replace("d-block", "d-none")
    alertPass.classList.replace("d-block", "d-none")
}
