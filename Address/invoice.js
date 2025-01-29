document.addEventListener("DOMContentLoaded", function () {
  // Retrieve data from localStorage
  const orderData = JSON.parse(localStorage.getItem("orderData"));

  if (orderData) {
    // Display product image
    const productImg = document.querySelector(".productImg img");
    productImg.src = orderData.image;

    // Display product name and price
    const namePrice = document.querySelector(".namePrice");
    namePrice.innerHTML = `<h4>${
      orderData.name
    }</h4><h4>IDR${orderData.price.toLocaleString()}</h4>`;

    // Display quantity
    const totalQty = document.querySelector(".totalQty h3");
    totalQty.innerText = orderData.quantity;

    // Calculate total price
    const totalPrice = orderData.price * orderData.quantity;
    const invoiceTotal = document.querySelector(
      ".invoice .right h4:last-child"
    );
    invoiceTotal.innerText = totalPrice.toLocaleString();

    // Set subtotal equal to order total
    const subtotal = document.querySelector(".invoice .right h4:first-child");
    subtotal.innerText = totalPrice.toLocaleString();
  }
});
