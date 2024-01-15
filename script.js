const form = document.getElementById('forma');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('click', e => {
    e.preventDefault();
    validateForm();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateForm = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Please provide a username')
    } else {
        setSuccess(username)
    }
    if(emailValue === '') {
        setError(email, 'Please provide an email address')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is not valid!!!')
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Please provide a password')
    } else if (passwordValue.length < 8) {
        setError(password, 'Password has to be longer than 8 characters')
    } else {
        setSuccess(password)
    }
    if(password2Value === '') {
        setError(password2, 'please provide a password')
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Passwords not matching')
    } else {
        setSuccess(password2)
    }
}