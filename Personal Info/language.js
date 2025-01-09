// Object for storing translations
const translations = {
  en: {
    home: "Home",
    about: "About",
    product: "Product",
    contactus: "Contact Us",
    nameforTitle: "NAME",
    userID: "USER ID",
    personal_information: "Personal Information",
    my_order: "My Order",
    address: "Addresses",
    need_help: "Need Help",
    signout: "Sign Out",
    personalInformationHeading: "Personal Information",
    firstNameLabel: "First Name:",
    lastNameLabel: "Last Name:",
    phoneNumberLabel: "Phone Number:",
    instruction: "In order to access some features of our services, you will have to fill out your account detail. You may using it for buying or shipping the product to your address.",
    save: "SAVE",
    cancel: "CANCEL",
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
    home: "Beranda",
    about: "Tentang",
    product: "Produk",
    contactus: "Hubungi Kami",
    nameforTitle: "NAMA",
    userID: "ID PENGGUNA",
    personal_information: "Informasi Pribadi",
    my_order: "Pesanan Saya",
    address: "Alamat",
    need_help: "Bantuan",
    signout: "Keluar",
    personalInformationHeading: "Informasi Pribadi",
    firstNameLabel: "Nama Depan:",
    lastNameLabel: "Nama Belakang:",
    phoneNumberLabel: "Nomor Telepon:",
    instruction: "Untuk mengakses beberapa fitur layanan kami, anda harus mengisi detail akun anda. Anda dapat menggunakannya untuk membeli atau mengirimkan produk ke alamat anda.",
    save: "SIMPAN",
    cancel: "BATALKAN",
    footerHome: "Beranda",
    footerAbout: "Tentang",
    footerReviews: "Ulasan",
    footerAdvice: "Saran",
    footerContact: "Kontak",
    footerLocation: "Lokasi",
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
  document.getElementById("nameforTitle").innerText = translations[lang].nameforTitle;
  document.getElementById("userID").innerText = translations[lang].userID;
  document.getElementById("personal_information").innerText = translations[lang].personal_information;
  document.getElementById("my_order").innerText = translations[lang].my_order;
  document.getElementById("address").innerText = translations[lang].address;
  document.getElementById("need_help").innerText = translations[lang].need_help;
  document.getElementById("signout").innerText = translations[lang].signout;
  document.getElementById("firstNameLabel").innerText = translations[lang].firstNameLabel;
  document.getElementById("lastNameLabel").innerText = translations[lang].lastNameLabel;
  document.getElementById("phoneNumberLabel").innerText = translations[lang].phoneNumberLabel;
  document.getElementById("instruction").innerText = translations[lang].instruction;
  document.getElementById("save").innerText = translations[lang].save;
  document.getElementById("cancel").innerText = translations[lang].cancel;
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
document.getElementById("idn-btn").addEventListener("click", function (event) {
  event.preventDefault(); // prevents the default link action
  changeLanguage("id"); // change to Indonesian
});

document.getElementById("eng-btn").addEventListener("click", function (event) {
  event.preventDefault(); // prevents the default link action
  changeLanguage("en"); // change to English
});
