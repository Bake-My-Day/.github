function order(productName, productPrice, productImage) {
    // Encode the parameters to make them URL-safe
    const encodedName = encodeURIComponent(productName);
    const encodedPrice = encodeURIComponent(productPrice);
    const encodedImage = encodeURIComponent(productImage);
    
    // Redirect to addToChart.html with query parameters
    window.location.href = `order.html?name=${encodedName}&price=${encodedPrice}&image=${encodedImage}`;
}
