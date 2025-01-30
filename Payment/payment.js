document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from local storage
  const productImg = localStorage.getItem("productImg");
  const productName = localStorage.getItem("productName");
  const productPrice = localStorage.getItem("productPrice");
  const productQty = localStorage.getItem("productQty");
  const subtotal = localStorage.getItem("subtotal");

  // Update payment page with product data
  document.querySelector(".productImg img").src = productImg;
  document.querySelector(".namePrice h4:first-child").textContent = productName;
  document.querySelector(".namePrice h4:last-child").textContent = productPrice;
  document.querySelector(".totalQty h3").textContent = productQty;

  // Update invoice
  const invoiceRightElements = document.querySelectorAll(".invoice .right h4");
  invoiceRightElements[0].textContent = subtotal;
  invoiceRightElements[2].textContent = subtotal;

  // Delete local storage data after use
  localStorage.removeItem("productImg");
  localStorage.removeItem("productName");
  localStorage.removeItem("productPrice");
  localStorage.removeItem("productQty");
  localStorage.removeItem("subtotal");
});
