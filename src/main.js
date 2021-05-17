const form = getElementById('form');
const username = getElementById('username');
const email = getElementById('email');
const password = getElementById('password');
const confirmPassword = getElementById('confirm-password')

form.addEventListener('submit', e => {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, '用户名不能为空')
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, '邮箱地址不能为空');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, '不正确的邮箱地址');
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, '密码不能为空');
    } else {
        setSuccessFor(password)
    }

    if (confirmPasswordValue === '') {
        setErrorFor(confirmPassword, '确认密码不能为空')
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, '两次密码不匹配')
    } else {
        setSuccessFor(confirmPassword)
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getElementById(id) {
    return document.getElementById(id)
}

function isEmail(email) {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
}