// Object for storing translations
const translations = {
    en: {
        title: "Bake My Day!",
        description1: "Gluten-Free cake shop",
        description2: "We created Gluten-Free cakes that provide a solution for people with gluten sensitivities, so they can easily find and purchase safe products for their needs.",
        home: "Home",
        about: "About",
        product: "Product",
        contactus: "Contact Us",
        register: "Register",
        registerForm: "Register",
        fullName: "Full Name",
        address: "Address",
        passwordPlaceholder: "Password",
        submitSignUp: "Register",
        footerHome: "Home",
        footerAbout: "About",
        footerReviews: "Reviews",
        footerAdvice: "Advice",
        footerContact: "Contact",
        footerLocation: "Location",
        terms: "Terms & Condition",
        privacy: "Privacy Policy",
    },
    id: {
        title: "Bake My Day!",
        description1: "Toko kue bebas gluten",
        description2: "Kami membuat kue bebas gluten yang memberikan solusi bagi orang-orang dengan sensitivitas gluten, sehingga mereka dapat dengan mudah menemukan dan membeli produk yang aman untuk kebutuhan mereka.",
        home: "Beranda",
        about: "Tentang",
        product: "Produk",
        contactus: "Hubungi Kami",
        register: "Registrasi",
        registerForm: "Registrasi",
        fullName: "Nama Lengkap",
        address: "Alamat",
        passwordPlaceholder: "Kata Sandi",
        submitSignUp:"Registrasi",
        footerHome: "Beranda",
        footerAbout: "Tentang",
        footerReviews: "Ulasan",
        footerAdvice: "Saran",
        footerContact: "Kontak",
        footerLocation: "Lokasi",
        terms: "Syarat & Ketentuan",
        privacy: "Kebijakan Privasi",
    }
};

// Function to change the language
function changeLanguage(lang) {
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description-1").innerText = translations[lang].description1;
    document.getElementById("description-2").innerText = translations[lang].description2;
    document.getElementById("home").innerText = translations[lang].home;
    document.getElementById("about").innerText = translations[lang].about;
    document.getElementById("product").innerText = translations[lang].product;
    document.getElementById("contactus").innerText = translations[lang].contactus;
    document.getElementById("register").innerText = translations[lang].register;
    document.getElementById("registerForm").innerText = translations[lang].registerForm;
    document.getElementById("fullName").placeholder = translations[lang].fullName;
    document.getElementById("address").placeholder = translations[lang].address;
    document.getElementById("password").placeholder = translations[lang].passwordPlaceholder;
    document.getElementById("submitSignUp").innerText = translations[lang].submitSignUp;
    document.getElementById("home-footer").innerText = translations[lang].footerHome;
    document.getElementById("about-footer").innerText = translations[lang].footerAbout;
    document.getElementById("reviews-footer").innerText = translations[lang].footerReviews;
    document.getElementById("advice-footer").innerText = translations[lang].footerAdvice;
    document.getElementById("contact-footer").innerText = translations[lang].footerContact;
    document.getElementById("location-footer").innerText = translations[lang].footerLocation;
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
