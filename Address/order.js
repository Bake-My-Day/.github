document.querySelector(".continueBtn button").addEventListener("click", function (event) {
event.preventDefault(); // Prevent default submit form

    // Retrieve product data from the page
    const productImg = document.querySelector(".productImg img").src;
    const productName = document.querySelector(".namePrice h4:first-child").textContent;
    const productPrice = document.querySelector(".namePrice h4:last-child").textContent;
    const productQty = document.querySelector(".totalQty h3").textContent;
    const subtotal = document.querySelector(".invoice .right h4:first-child").textContent;

    // Save data to local storage
    localStorage.setItem("productImg", productImg);
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    localStorage.setItem("productQty", productQty);
    localStorage.setItem("subtotal", subtotal);

    // Redirect to payment page
    window.location.href = "payment.html";
});
