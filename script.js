// Cart Counter
let cartCounter = 0;
const cartBadge = document.querySelector('.cart-badge');

function updateCartCounter() {
  cartBadge.textContent = cartCounter;
}

// Add to Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCounter++;
    updateCartCounter();
  });
});
