function orderProduct() {
  const productName = document.querySelector(
    ".productDescription h1"
  ).innerText;
  const productPrice = parseInt(
    document
      .querySelector(".productDescription h3")
      .innerText.replace("IDR", "")
      .replace(".", "")
  );
  const quantity = document.querySelector('input[type="number"]').value;
  const productImage = document.querySelector(".productInfo img").src;

  const orderData = {
    name: productName,
    price: productPrice,
    quantity: quantity,
    image: productImage,
  };

  // Store order data in local storage
  localStorage.setItem("orderData", JSON.stringify(orderData));

  // Redirect to address.html
  window.location.href = "address.html";
}
