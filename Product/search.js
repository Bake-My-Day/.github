document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const wrapper = document.querySelector(".wrapper");

  searchBox.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const products = wrapper.querySelectorAll(
      ".product1, .product2, .product3, .product4, .product5, .product6, .product7, .product8, .product9, .product10, .product11, .product12, .product13, .product14, .product15"
    );

    if (searchTerm === "") {
      // If search box is empty, display all products
      products.forEach((product) => {
        product.style.display = "block";
        product.style.position = ""; // Reset posisition
        product.style.transform = ""; // Reset transformation
        product.style.width = ""; // Reset width
        product.style.margin = ""; // Reset margin
      });
    } else {
      let visibleProducts = 0; // Count visible products

      products.forEach((product) => {
        const productName = product
          .querySelector(".nameAndPrice span:first-child")
          .textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
          product.style.display = "block";
          product.style.position = "relative"; // Use relative to set the distance
          product.style.margin = "10px"; // Add margin for distance between products
          visibleProducts++;
        } else {
          product.style.display = "none";
        }
      });
    }
  });
});
