const loginBox = document.querySelector('.login-box');

const loginlink = document.querySelector('.login-link');

const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click',() => {
    loginBox.classList.add('active');
});

loginlink.addEventListener('click',() => {
    loginBox.classList.remove('active');
});
