const translations = {
  en: {
    home: "Home",
    about: "About",
    product: "Product",
    contactus: "Contact Us",
    order: "ORDER",
    otherProducts: "Other Products",
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
    order: "PESAN",
    otherProducts: "Produk Lain",
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
    document.getElementById("order").innerText = translations[lang].order;
    document.getElementById("otherProducts").innerText = translations[lang].otherProducts;
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