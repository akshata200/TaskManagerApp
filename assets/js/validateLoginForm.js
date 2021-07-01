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


// email validation
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
const show = document.getElementById('showPassword');
const hide = document.getElementById('hidePassword');
password.addEventListener('input', (data) => {
    if (password.value == "") {
        passwordReq.innerText = "Password is required";
        toogleToBad(passwordReq);
        toogleToBad(password);
        toogleToBad(hide);
        toogleToBad(show);
    } else {
        const pass = password.value;
        if (pass.length >= 7) {
            passwordReq.innerText = "Looks Good!"
            toogleToGood(passwordReq);
            toogleToGood(password);
            toogleToGood(hide);
            toogleToGood(show);
        } else {
            // passwordReq.innerText = "Password must have minimum 7 characters"
            toogleToBad(passwordReq);
            toogleToBad(password);
            toogleToBad(hide);
            toogleToBad(show);
        }
    }
});

// enabling show and hide password button
show.addEventListener('click', (e) => {
    e.preventDefault();
    show.classList.remove('active');
    hide.classList.add('active');
    password.type = "text";
})
hide.addEventListener('click', (e) => {
    F
    e.preventDefault();
    hide.classList.remove('active');
    show.classList.add('active');
    password.type = "password";
})