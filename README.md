# MoSu2 - E-commerce Website

MoSu2 is a modern, user-friendly e-commerce platform designed to provide a seamless shopping experience. This project showcases the implementation of various essential features such as user authentication, product management, shopping cart functionality, and a personalized user dashboard.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Core Algorithms](#core-algorithms)
- [Project Journey](#project-journey)
- [Challenges Overcome](#challenges-overcome)
- [Future Improvements](#future-improvements)
- [License](#license)

## Project Description
MoSu2 is an e-commerce website developed to provide a seamless and efficient shopping experience. The platform integrates modern web technologies to ensure a smooth and intuitive interface for users, allowing them to browse, manage, and purchase products effortlessly.

## Features
- **User Authentication**: Secure user registration and login functionality.
- **Product Management**: Ability to browse and search for products.
- **Shopping Cart**: Add, remove, and manage products in the cart.
- **User Dashboard**: Personalized dashboard displaying user information and purchase history.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Local Storage, Cookies
- **Libraries and Tools**: VS Code Live Server, Git/GitHub
- **Deployment**: GitHub Pages

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mosu2.git
2. Navigate to the project directory:
   ```bash
   cd mosu2
   ```
3. Open the project in Visual Studio Code.
4. Use the Live Server extension to launch the website:
   - Right-click on `index.html` and select "Open with Live Server".

## Usage
1. Register a new user or log in with existing credentials.
2. Browse through the products and add desired items to the cart.
3. Proceed to checkout to complete the purchase.
4. Access the user dashboard to view personal information and purchase history.

## Core Algorithms
### User Authentication
The login function validates user credentials stored in local storage and redirects to the dashboard upon successful login.
```javascript
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
```

### Shopping Cart Management
The following function allows users to add items to their shopping cart and stores the cart data in local storage.
```javascript
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(product => product.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}
```

## Project Journey
1. **Ideation and Planning**:
   - Conceptualized the idea and identified key features.
   - Created a project roadmap outlining major milestones and deliverables.

2. **Design and Prototyping**:
   - Developed wireframes and prototypes to visualize the user interface.

3. **Development**:
   - Implemented frontend and backend functionalities.
   - Conducted thorough testing and debugging to ensure reliability.

4. **Deployment**:
   - Deployed the website on GitHub Pages for easy access and sharing.

## Challenges Overcome
- Implementing secure user authentication and managing user sessions.
- Ensuring data persistence and consistency across different pages and sessions.
- Debugging and optimizing performance for a smooth user experience.

## Future Improvements
- Enhance security measures for user data and authentication.
- Implement a more robust backend using a database and server-side technologies.
- Add more features such as product reviews, user profiles, and advanced search functionality.
- Improve the user interface for better accessibility and responsiveness.
