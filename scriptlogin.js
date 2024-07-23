const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function register() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert('User already exists');
    } else {
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully');
        container.style.display = 'none';
        document.cookie = `loggedIn=${email}; path=/; max-age=3600`;
        window.location.href = 'dashboard.html';
    }
}

function login() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        document.cookie = `loggedIn=${user.name}; path=/; max-age=3600`;
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
}
