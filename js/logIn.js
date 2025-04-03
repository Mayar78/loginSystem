var arrUser = [];
var emailLogin = document.getElementById('emailLogin');
var passwordLogin = document.getElementById('passwordLogin');
var alertMassage = document.getElementById('alertMassage');
var loginBtn = document.getElementById('loginBtn');
var eye = document.getElementById('eye');
var eyeIcon = document.querySelector(".eyeIcon");

eye.addEventListener("click", function () {
    if (passwordLogin.type == 'password') {
        passwordLogin.type = 'text';
        eyeIcon.classList.remove('fa-eye')
        eyeIcon.classList.add('fa-eye-slash');
    }
    else {
        passwordLogin.type = 'password';
        // eyeIcon.classList.replace('fa-eye-slash','fa-eye')
        eyeIcon.classList.add('fa-eye')
        eyeIcon.classList.remove('fa-eye-slash');
    }
})
document.addEventListener("keydown", function (e) {
    if (e.key == 'Enter') {
        enterLog();
    }
})
if (localStorage.getItem("user") != null) {
    arrUser = JSON.parse(localStorage.getItem("user"));

}
// console.log(arrUser);


loginBtn.addEventListener("click", function () {
    enterLog();
})

function enterLog() {
    if (emailLogin.value == '' || passwordLogin == '') {
        alertM('<i class="fa-solid fa-circle-exclamation pe-2"></i>All inputs is required', 'red')
    }
    else {
        if (checkAcc() == true) {
            location.href = "homePage.html";
        }
        else {
            alertM('<i class="fa-solid fa-circle-exclamation pe-2"></i>incorrect email or password', 'red')
        }
    }
}
function checkAcc() {
    for (var i = 0; i < arrUser.length; i++) {
        if (emailLogin.value == arrUser[i].email && passwordLogin.value == arrUser[i].pass) {
            var welcomeName = arrUser[i].name;
            localStorage.setItem("nameForWelcome", welcomeName);

            return true;
        }

    }
}
function alertM(txt, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = txt;
    alertMassage.style.color = color;
}