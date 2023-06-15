document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector(".cart-items");
  const itemCount = document.getElementById("item-count");
  const totalAmount = document.getElementById("total-amount");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Sample data for demonstration
  const cartItems = [
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 9.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 14.99, quantity: 3 },
  ];

  // Function to render cart items
  function renderCartItems() {
    cartItemsContainer.innerHTML = "";

    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      totalItems += item.quantity;
      totalPrice += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: $${itemTotal.toFixed(2)}</p>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    itemCount.textContent = totalItems;
    totalAmount.textContent = totalPrice.toFixed(2);
  }

  // Event listener for checkout button
  checkoutBtn.addEventListener("click", () => {
    alert("Checkout functionality will be implemented here.");
  });

  // Initial rendering of cart items
  renderCartItems();
});
