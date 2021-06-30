function toogleToGood(selector) {
    selector.classList.add('good');
    selector.classList.remove('bad');
}

function toogleToBad(selector) {
    selector.classList.add('bad');
    selector.classList.remove('good');
}

// Validate Name field
const name1 = document.getElementById('name');
const nameReq = document.getElementById('nameAlert');
name1.addEventListener('input', (data) => {
    if (name1.value == "") {
        nameReq.innerText = "Name is required"
        toogleToBad(nameReq);
        toogleToBad(name1);
    } else {
        nameReq.innerText = "Looks Good!"
        toogleToGood(nameReq);
        toogleToGood(name1);
    }
});


// Validate Username field
const uname = document.getElementById('username');
const unameReq = document.getElementById('usernameAlert');
uname.addEventListener('input', (data) => {
    if (uname.value == "") {
        unameReq.innerText = "Name is required"
        toogleToBad(unameReq);
        toogleToBad(uname);
    } else {
        unameReq.innerText = "Looks Good!"
        toogleToGood(unameReq);
        toogleToGood(uname);
    }
});


// Email validation
const email = document.getElementById('email');
const emailReq = document.getElementById('emailAlert');
email.addEventListener('input', (data) => {
    if (email.value == "") {
        emailReq.innerText = "Email is required"
        toogleToBad(emailReq);
        toogleToBad(email);
    } else {
        const regex = /^([_0-9\.\-A-Za-z]+)@([_0-9\.\-A-Za-z]+)\.([a-zA-Z]){2,7}$/;
        if (regex.test(email.value)) {
            emailReq.innerText = "Looks Good!"
            toogleToGood(emailReq);
            toogleToGood(email);
        } else {
            emailReq.innerText = "Please enter correct email"
            toogleToBad(emailReq);
            toogleToBad(email);
        }
    }
});

// Password validation
const password = document.getElementById('password');
const passwordReq = document.getElementById('passwordAlert');
password.addEventListener('input', (data) => {
    if (password.value == "") {
        passwordReq.innerText = "Password is required"
        toogleToBad(passwordReq);
        toogleToBad(password);
    } else {
        const pass = password.value;
        if (pass.length >= 7) {
            passwordReq.innerText = "Looks Good!"
            toogleToGood(passwordReq);
            toogleToGood(password);
        } else {
            passwordReq.innerText = "Password must have minimum 7 characters"
            toogleToBad(passwordReq);
            toogleToBad(password);
        }
    }
});

// Password Confirmation
const cPassword = document.getElementById('confirmPassword');
const cPasswordReq = document.getElementById('cPasswordAlert');
cPassword.addEventListener('input', (data) => {
    if (cPassword.value == "") {
        cPasswordReq.innerText = "Password is required"
        toogleToBad(cPasswordReq);
        toogleToBad(cPassword);
    } else {
        if (cPassword.value == password.value) {
            cPasswordReq.innerText = "Looks Good!"
            toogleToGood(cPasswordReq);
            toogleToGood(cPassword);
        } else {
            cPasswordReq.innerText = "Password doesn't match"
            toogleToBad(cPasswordReq);
            toogleToBad(cPassword);
        }
    }
});

// enabling button
// const button = document.getElementById('btn2');
// const formAlert = document.getElementById('formAlert');

// button.addEventListener('click', (e) => {
//     // e.preventDefault();
//     if (formFilled()) {
//         console.log('Okayy');
//         formAlert.innerHTML = "Thank you";
//         toogleToGood(formAlert);
//     } else {
//         formAlert.innerHTML = "Please Fill form correctly";
//         toogleToBad(formAlert);
//     }
// })

// function formFilled() {
//     if (name1.classList.value == 'good' && uname.classList.value == 'good' && email.classList.value == 'good' && password.classList.value == 'good' && cPassword.classList.value == 'good') {
//         return true;
//     } else {
//         return false;
//     }
// }