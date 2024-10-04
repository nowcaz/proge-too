let cart = [];
let cartCount = 0;
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

function addToCart(productName, price, sizeId) {
    const selectedSize = document.getElementById(sizeId).value;
    

    let positionThisProductInCart = cart.findIndex(item => item.name === productName && item.size === selectedSize);
    

    if (positionThisProductInCart < 0) {
        cart.push({ name: productName, price: price, size: selectedSize, quantity: 1 });
    } else {
        cart[positionThisProductInCart].quantity++;
    }

    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    displayCartItems();
    addCartToMemory();
}

function displayCartItems() {
    listCartHTML.innerHTML = '<h3>Ostukorv</h3>';
    let total = 0;
    
    cart.forEach(item => {
        listCartHTML.innerHTML += `<p>${item.name} (Suurus: ${item.size}) - ${item.price}€ x ${item.quantity}</p>`;
        total += item.price * item.quantity;
    });
    
    listCartHTML.innerHTML += `<p><strong>Kokku: ${total}€</strong></p>`;
}

function addCartToMemory() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
