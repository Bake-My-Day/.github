// Object for storing translations
const translations = {
    en: {
        home: "Home",
        about: "About",
        product: "Product",
        contactus: "Contact Us",
        searchBox: "Search",
        title: "The Cakes We Made",
        description: "Our products are made with natural and fresh ingredients, maintaining high quality and gluten free",
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
        searchBox: "Cari",
        title: "Kue yang Kami Buat",
        description: "Produk kami dibuat dengan bahan-bahan alami dan segar, menjaga kualitas tinggi dan bebas gluten",
        homeFooter: "Beranda",
        aboutFooter: "Tentang",
        reviewsFooter: "Ulasan",
        adviceFooter: "Saran",
        contactFooter: "Kontak",
        locationFooter: "Lokasi",
        terms: "Syarat & Ketentuan",
        privacy: "Kebijakan Privasi",
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("home").innerText = translations[lang].home;
    document.getElementById("about").innerText = translations[lang].about;
    document.getElementById("product").innerText = translations[lang].product;
    document.getElementById("contactus").innerText = translations[lang].contactus;
    document.getElementById("searchBox").placeholder = translations[lang].searchBox;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
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
