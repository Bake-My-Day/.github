function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

window.onload = function() {
    const params = getQueryParams();
    
    // Set the product information in the HTML
    document.querySelector('.productInfo img').src = params.image;
    document.querySelector('.productDescription h1').innerText = params.name;
    document.querySelector('.productDescription h3').innerText = params.price;
    // You can also add more details if needed
};
