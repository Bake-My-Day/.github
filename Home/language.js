// Objek for storing translations
const translations = {
    en: {
        title: "ENJOY A VARIETY OF VIRAL BUT GLUTEN-FREE CAKES",
        description: "The solution for those of you who like today's viral unique cakes, but are lactose intolerant",
        orderNow1: "ORDER NOW",
        workHour: "WORK HOUR SERVICE",
        description2: "Menu recommendations, express delivery, and always available stocks.",
        orderNow2: "ORDER NOW",
        specificAmount: "Have any orders with a spesific amount?",
        contactus2: "CONTACT US",
        home: "Home",
        about: "About",
        product: "Product",
        contactus: "Contact Us",
        terms: "Terms & Condition",
        privacy: "Privacy Policy",
        footerHome: "Home",
        footerAbout: "About",
        footerReviews: "Reviews",
        footerAdvice: "Advice",
        footerContact: "Contact",
        footerLocation: "Location",
    },
    id: {
        title: "NIKMATI BERBAGAI KUE YANG VIRAL NAMUN BEBAS GLUTEN",
        description: "Solusi bagi anda yang menyukai kue-kue unik yang sedang viral saat ini, tetapi tidak toleran terhadap laktosa!",
        orderNow1: "PESAN SEKARANG!",
        workHour: "LAYANAN JAM KERJA",
        description2: "Rekomendasi menu, pengantaran cepat, dan stok yang selalu tersedia.",
        orderNow2: "PESAN SEKARANG!",
        specificAmount: "Punya pesanan dengan jumlah spesifik?",
        contactus2: "HUBUNGI KAMI",
        home: "Beranda",
        about: "Tentang",
        product: "Produk",
        contactus: "Hubungi Kami",
        terms: "Syarat & Ketentuan",
        privacy: "Kebijakan Privasi",
        footerHome: "Beranda",
        footerAbout: "Tentang",
        footerReviews: "Ulasan",
        footerAdvice: "Saran",
        footerContact: "Kontak",
        footerLocation: "Lokasi",
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
    document.getElementById("orderNow1").innerText = translations[lang].orderNow1;
    document.getElementById("workHour").innerText = translations[lang].workHour;
    document.getElementById("description2").innerText = translations[lang].description2;
    document.getElementById("orderNow2").innerText = translations[lang].orderNow2;
    document.getElementById("specificAmount").innerText = translations[lang].specificAmount;
    document.getElementById("contactus2").innerText = translations[lang].contactus2;
    document.getElementById("home").innerText = translations[lang].home;
    document.getElementById("about").innerText = translations[lang].about;
    document.getElementById("product").innerText = translations[lang].product;
    document.getElementById("contactus").innerText = translations[lang].contactus;
    document.getElementById("terms&condition").innerText = translations[lang].terms;
    document.getElementById("privacy-policy").innerText = translations[lang].privacy;
    document.getElementById("home-footer").innerText = translations[lang].footerHome;
    document.getElementById("about-footer").innerText = translations[lang].footerAbout;
    document.getElementById("reviews-footer").innerText = translations[lang].footerReviews;
    document.getElementById("advice-footer").innerText = translations[lang].footerAdvice;
    document.getElementById("contact-footer").innerText = translations[lang].footerContact;
    document.getElementById("location-footer").innerText = translations[lang].footerLocation;
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
