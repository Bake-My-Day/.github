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
        signup: "SIGN UP",
        loginTop: "LOG IN",
        registerForm: "Register",
        fullName: "Full Name",
        address: "Address",
        passwordPlaceholder: "Password",
        register: "Register",
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
        title: "Bake My Day!",
        description1: "Toko kue bebas gluten",
        description2: "Kami membuat kue bebas gluten yang memberikan solusi bagi orang-orang dengan sensitivitas gluten, sehingga mereka dapat dengan mudah menemukan dan membeli produk yang aman untuk kebutuhan mereka.",
        home: "Beranda",
        about: "Tentang",
        product: "Produk",
        contactus: "Hubungi Kami",
        signup: "DAFTAR",
        loginTop: "MASUK",
        registerForm: "Registrasi",
        fullName: "Nama Lengkap",
        address: "Alamat",
        passwordPlaceholder: "Kata Sandi",
        register:"Registrasi",
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
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description-1").innerText = translations[lang].description1;
    document.getElementById("description-2").innerText = translations[lang].description2;
    document.getElementById("home").innerText = translations[lang].home;
    document.getElementById("about").innerText = translations[lang].about;
    document.getElementById("product").innerText = translations[lang].product;
    document.getElementById("contactus").innerText = translations[lang].contactus;
    document.getElementById("signup").innerText = translations[lang].signup;
    document.getElementById("login-top").innerText = translations[lang].loginTop;
    document.getElementById("registerForm").innerText = translations[lang].registerForm;
    document.getElementById("fullName").placeholder = translations[lang].fullName;
    document.getElementById("address").placeholder = translations[lang].address;
    document.getElementById("password").placeholder = translations[lang].passwordPlaceholder;
    document.getElementById("register").innerText = translations[lang].register;
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
