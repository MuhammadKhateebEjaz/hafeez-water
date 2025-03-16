let cart = [
    { name: "Item 1", price: 0 }, // Example prices
    { name: "Item 2", price: 0 }
];
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Rs ${item.name} - Rs ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

document.getElementById('checkout-button').addEventListener('click', () => {
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked').value;
    let deliveryCost = 100;

    switch (selectedDelivery) {
        case 'home-Delivery':
            Home-delivery-Cost = 100;
            break;
        case 'store-pickup':
            store-delivery-Cost = 0;
            break;
        case 'overnight-delivery':
            Overnight-Cost = 200;
            break;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0) + deliveryCost;
    const summaryDetails = `Total Items Cost: Rs ${total.toFixed(2)}\nDelivery Method: ${selectedDelivery.replace(/-/g, ' ').toUpperCase()}\nDelivery Cost: Rs ${deliveryCost.toFixed(2)}\nTotal Cost: Rs ${total.toFixed(2)}`;
    
    document.getElementById('summary-details').textContent = summaryDetails;
    document.getElementById('order-summary').style.display = 'block';
});

// Initial cart display
updateCartDisplay();