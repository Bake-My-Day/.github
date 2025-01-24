function order(button) {

  const productName = button.getAttribute("data-name");
  const productPrice = button.getAttribute("data-price");
  const productImage = button.getAttribute("data-image");

  const productInfo = document.querySelector(".productInfo img");
  const productTitle = document.querySelector(".productDescription h1");
  const productPriceElement = document.querySelector(".productDescription h3");

  productInfo.src = productImage;
  productTitle.innerText = productName;
  productPriceElement.innerText = productPrice;
}
