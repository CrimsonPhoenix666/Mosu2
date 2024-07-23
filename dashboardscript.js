const loggedInUser = document.cookie.split('; ').find(row => row.startsWith('loggedIn='));
if (!loggedInUser) {
    window.location.href = 'login.html';
}

// Get the logged-in user's name
const userName = loggedInUser.split('=')[1];
document.getElementById('userName').innerText = userName;

// Function to log out
function logout() {
    document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = 'login.html';
}

// Function to display purchase history
function displayPurchaseHistory() {
    const purchaseHistoryCookie = document.cookie.split('; ').find(row => row.startsWith('purchaseHistory='));
    const purchaseHistoryContainer = document.getElementById('purchaseHistory');

    if (purchaseHistoryCookie) {
        const purchases = JSON.parse(purchaseHistoryCookie.split('=')[1]);

        purchases.forEach(purchase => {
            const purchaseElement = document.createElement('div');
            purchaseElement.classList.add('purchase-item');
            purchaseElement.innerHTML = `
                <img src="${purchase.image}" alt="${purchase.name}" class="product-image">
                <h3>${purchase.name}</h3>
                <p>Price: $${purchase.price}</p>
                <p>Quantity: ${purchase.quantity}</p>
                <p>Total: $${purchase.total}</p>
            `;
            purchaseHistoryContainer.appendChild(purchaseElement);
        });
    } else {
        purchaseHistoryContainer.innerHTML = '<p>No purchase history found.</p>';
    }
}

displayPurchaseHistory();