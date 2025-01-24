const translations = {
  en: {
    home: "Home",
    about: "About",
    product: "Product",
    contactus: "Contact Us",
    productTitle: "Product",
    order: "ORDER",
    displayProduct: "Display Product",
    otherProducts: "Other Products",
    strawberryBreakfastDanish: "Strawberry Breakfast Danish",
    cheeseScone: "Cheese Scone",
    sweetBananaBread: "Sweet Banana Bread",
    product12order: "ORDER",
    product8order: "ORDER",
    product6order: "ORDER",
    product7order: "ORDER",
    homeFooter: "Home",
    aboutFooter: "About",
    reviewsFooter: "Reviews",
    adviceFooter: "Advice",
    contactFooter: "Contact",
    locationFooter: "Location",
    terms: "Terms & Condition",
    privacy: "Privacy Policy",
  },
  id: {
    home: "Beranda",
    about: "Tentang",
    product: "Produk",
    contactus: "Hubungi Kami",
    productTitle: "Produk",
    displayProduct: "Produk Ditampilkan",
    strawberryBreakfastDanish: "Stroberi Denmark",
    cheeseScone: "Scone Keju",
    sweetBananaBread: "Roti Pisang Manis",
    order: "PESAN",
    otherProducts: "Produk Lain",
    product12order: "PESAN",
    product8order: "PESAN",
    product6order: "PESAN",
    product7order: "PESAN",
    homeFooter: "Beranda",
    aboutFooter: "Tentang",
    reviewsFooter: "Ulasan",
    adviceFooter: "Saran",
    contactFooter: "Kontak",
    locationFooter: "Lokasi",
    terms: "Syarat & Ketentuan",
    privacy: "Kebijakan Privasi",
  },
};
// Function to change the language
function changeLanguage(lang) {
    document.getElementById("home").innerText = translations[lang].home;
    document.getElementById("about").innerText = translations[lang].about;
    document.getElementById("product").innerText = translations[lang].product;
    document.getElementById("contactus").innerText = translations[lang].contactus;
    document.getElementById("productTitle").innerText = translations[lang].productTitle;
    document.getElementById("displayProduct").innerText = translations[lang].displayProduct;
    document.getElementById("order").innerText = translations[lang].order;
    document.getElementById("otherProducts").innerText = translations[lang].otherProducts;
    document.getElementById("strawberryBreakfastDanish").innerText = translations[lang].strawberryBreakfastDanish;
    document.getElementById("cheeseScone").innerText = translations[lang].cheeseScone;
    document.getElementById("sweetBananaBread").innerText = translations[lang].sweetBananaBread;
    document.getElementById("product12order").innerText = translations[lang].product12order;
    document.getElementById("product8order").innerText = translations[lang].product8order;
    document.getElementById("product6order").innerText = translations[lang].product6order;
    document.getElementById("product7order").innerText = translations[lang].product7order
    document.getElementById("home-footer").innerText = translations[lang].homeFooter;
    document.getElementById("about-footer").innerText = translations[lang].aboutFooter;
    document.getElementById("reviews-footer").innerText = translations[lang].reviewsFooter;
    document.getElementById("advice-footer").innerText = translations[lang].adviceFooter;
    document.getElementById("contact-footer").innerText = translations[lang].contactFooter;
    document.getElementById("location-footer").innerText = translations[lang].locationFooter;
    document.getElementById("terms&condition").innerText = translations[lang].terms;
    document.getElementById("privacy-policy").innerText = translations[lang].privacy;
}
// Event listener for language button
document.getElementById("idn-btn").addEventListener("click", function(event) {
    event.preventDefault(); // prevents the default link action
    changeLanguage('id'); // change to Indonesian
});

document.getElementById("eng-btn").addEventListener("click", function(event) {
    event.preventDefault(); // prevents the default link action
    changeLanguage('en'); // change to English 
});