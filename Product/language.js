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
    sausageRoll: "Sausage Roll",
    garlicBread: "Garlic Bread",
    spicyBeefFlossBread: "Spicy Beef Floss Bread",
    blueberryBread: "Blueberry Bread",
    sweetBananaBread: "Sweet Banana Bread",
    cheeseScone: "Cheese Scone",
    potatoCurryPuff: "Potato Curry Puff",
    meatBun: "Meat Bun",
    chocolateCroissant: "Chocolate Croissant",
    strawberryBreakfastDanish: "Strawberry Breakfast Danish",
    mushroomFlatbread: "Mushroom Flatbread",
    brocolliBread: "Brocolli Bread",
    appleBread: "Apple Bread",
    product1order: "ORDER",
    product2order: "ORDER",
    product3order: "ORDER",
    product4order: "ORDER",
    product5order: "ORDER",
    product6order: "ORDER",
    product7order: "ORDER",
    product8order: "ORDER",
    product9order: "ORDER",
    product10order: "ORDER",
    product11order: "ORDER",
    product12order: "ORDER",
    product13order: "ORDER",
    product14order: "ORDER",
    product15order: "ORDER",
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
    sausageRoll: "Sosis Gulung",
    garlicBread: "Roti Garlic",
    spicyBeefFlossBread: "Roti Abon Sapi Pedas",
    blueberryBread: "Roti Blueberry",
    sweetBananaBread: "Roti Pisang Manis",
    cheeseScone: "Scone Keju",
    potatoCurryPuff: "Puff Kari Kentang",
    meatBun: "Roti Daging",
    chocolateCroissant: "Croissant Cokelat",
    strawberryBreakfastDanish: "Stroberi Denmark",
    mushroomFlatbread: "Roti Pipih Jamur",
    brocolliBread: "Roti Brokoli",
    appleBread: "Roti Apel",
    product1order: "PESAN",
    product2order: "PESAN",
    product3order: "PESAN",
    product4order: "PESAN",
    product5order: "PESAN",
    product6order: "PESAN",
    product7order: "PESAN",
    product8order: "PESAN",
    product9order: "PESAN",
    product10order: "PESAN",
    product11order: "PESAN",
    product12order: "PESAN",
    product13order: "PESAN",
    product14order: "PESAN",
    product15order: "PESAN",
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
    document.getElementById("searchBox").placeholder = translations[lang].searchBox;
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
    document.getElementById("sausageRoll").innerText = translations[lang].sausageRoll;
    document.getElementById("garlicBread").innerText = translations[lang].garlicBread;
    document.getElementById("spicyBeefFlossBread").innerText = translations[lang].spicyBeefFlossBread;
    document.getElementById("blueberryBread").innerText = translations[lang].blueberryBread;
    document.getElementById("sweetBananaBread").innerText = translations[lang].sweetBananaBread;
    document.getElementById("cheeseScone").innerText = translations[lang].cheeseScone;
    document.getElementById("potatoCurryPuff").innerText = translations[lang].potatoCurryPuff;
    document.getElementById("meatBun").innerText = translations[lang].meatBun;
    document.getElementById("chocolateCroissant").innerText = translations[lang].chocolateCroissant;
    document.getElementById("strawberryBreakfastDanish").innerText = translations[lang].strawberryBreakfastDanish;
    document.getElementById("mushroomFlatbread").innerText = translations[lang].mushroomFlatbread;
    document.getElementById("brocolliBread").innerText = translations[lang].brocolliBread;
    document.getElementById("appleBread").innerText = translations[lang].appleBread;
    document.getElementById("product1order").innerText = translations[lang].product1order;
    document.getElementById("product2order").innerText = translations[lang].product2order;
    document.getElementById("product3order").innerText = translations[lang].product3order;
    document.getElementById("product4order").innerText = translations[lang].product4order;
    document.getElementById("product5order").innerText = translations[lang].product5order;
    document.getElementById("product6order").innerText = translations[lang].product6order;
    document.getElementById("product7order").innerText = translations[lang].product7order;
    document.getElementById("product8order").innerText = translations[lang].product8order;
    document.getElementById("product9order").innerText = translations[lang].product9order;
    document.getElementById("product10order").innerText = translations[lang].product10order;
    document.getElementById("product11order").innerText = translations[lang].product11order;
    document.getElementById("product12order").innerText = translations[lang].product12order;
    document.getElementById("product13order").innerText = translations[lang].product13order;
    document.getElementById("product14order").innerText = translations[lang].product14order;
    document.getElementById("product15order").innerText = translations[lang].product15order;
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
