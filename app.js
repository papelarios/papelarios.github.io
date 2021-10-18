var home = document.getElementById("container-home")
var products = document.getElementById("container-products")
var about = document.getElementById("container-about")
var contact = document.getElementById("container-contact")

var homeNav = document.getElementById("home-nav")
var productsNav = document.getElementById("products-nav")
var aboutNav = document.getElementById("about-nav")
var contactNav = document.getElementById("contact-nav")

var header = document.getElementById("header")
var iconMedia = document.getElementById("icon-media")
var navigationMedia = document.getElementById("navigation-media")
var closeNav = document.getElementById("close")
var mediaProducts = document.getElementById("media-products")
var mediaAbout = document.getElementById("media-about")
var mediaContact = document.getElementById("media-contact")

var titleProductsHome = document.getElementById("title-products-home")
var titleAboutHome = document.getElementById("title-about-home")

var cardProducts = document.getElementById("card-products")
var left = document.getElementById("left")
var right = document.getElementById("right")

// PRODUCTS
const productsList = [{
    name: "variedad",
    description: "Variedad de papel",
    image: "variedad.jpg",
    price: 200,
    stock: true
}, {
    name: "variedad2",
    description: "Variedad 2 de papel",
    image: "variedad2.jpg",
    price: 300,
    stock: true
}, {
    name: "variedad3",
    description: "Variedad 3 de papel",
    image: "variedad3.jpg",
    price: 400,
    stock: true
}, {
    name: "Tazones",
    description: "Tazones de papel",
    image: "tazones.jpg",
    price: 500,
    stock: true
}, {
    name: "Lamparas",
    description: "Lamparas de papel",
    image: "lamparas.jpg",
    price: 150,
    stock: true
}, {
    name: "Corazón",
    description: "Corazón de papel",
    image: "corazon.jpg",
    price: 100,
    stock: true
},{
    name: "Portavaso",
    description: "Pato de papel",
    image: "pato.jpg",
    price: 300,
    stock: true
}]

// Products

var imageLength = 0;

function showProductos(lengthImage) {
    if (lengthImage == 0) {
        left.style.color = "#7f7";
        left.style.cursor = "default"
    } else {
        left.style.color = "#0f0";
        left.style.cursor = "pointer"
    }
    if (lengthImage == productsList.length - 3) {
        right.style.color = "#7f7";
        right.style.cursor = "default"
    } else {
        right.style.color = "#0f0";
        right.style.cursor = "pointer"
    }
    for (var i = lengthImage; i < 3 + lengthImage; i++) {
        cardProducts.innerHTML += `
            <div>
                <h1 class="name-products">${productsList[i].name}</h1>
                <p class="description-products">${productsList[i].description}</p>
                <img class="image-products" src=images/${productsList[i].image} alt=${productsList[i].name}>
                <p class="price-products">$${productsList[i].price}</p>
            </div>
        `;
    }
}
showProductos(imageLength);

// EVENTS

// Navigation

iconMedia.addEventListener("click", () => {
    navigationMedia.style.display = "flex"
    navigationMedia.style.top = 0
    header.style.background = "#fff"
})
closeNav.addEventListener("click", () => {
    navigationMedia.style.display = "none"
    navigationMedia.style.top = -350
    header.style.background = "#f23"
})

homeNav.addEventListener("click", () => {
    home.style.display = "flex"
    products.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    aboutNav.className = "not-focus-navigation"
    productsNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
    mediaProducts.className = "not-focus-navigation-media"
    mediaAbout.className = "not-focus-navigation-media"
    mediaContact.className = "not-focus-navigation-media"
})
productsNav.addEventListener("click", () => {
    home.style.display = "none";
    products.style.display = "flex";
    about.style.display = "none";
    contact.style.display = "none";

    productsNav.className = "focus-navigation"
    aboutNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
    mediaProducts.className = "focus-navigation-media"
    mediaAbout.className = "not-focus-navigation-media"
    mediaContact.className = "not-focus-navigation-media"
})
mediaProducts.addEventListener("click", () => {
    navigationMedia.style.display = "none"
    navigationMedia.style.top = -350
    header.style.background = "#f23"

    home.style.display = "none";
    products.style.display = "flex";
    about.style.display = "none";
    contact.style.display = "none";

    productsNav.className = "focus-navigation"
    aboutNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
    mediaProducts.className = "focus-navigation-media"
    mediaAbout.className = "not-focus-navigation-media"
    mediaContact.className = "not-focus-navigation-media"
})
titleProductsHome.addEventListener("click", () => {
    home.style.display = "none";
    products.style.display = "flex";
    about.style.display = "none";
    contact.style.display = "none";

    productsNav.className = "focus-navigation"
    aboutNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
})
aboutNav.addEventListener("click", () => {
    home.style.display = "none";
    products.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";

    mediaAbout.className = "focus-navigation-media"
    mediaProducts.className = "not-focus-navigation-media"
    mediaContact.className = "not-focus-navigation-media"
    aboutNav.className = "focus-navigation"
    productsNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
})
mediaAbout.addEventListener("click", () => {
    navigationMedia.style.display = "none"
    navigationMedia.style.top = -350
    header.style.background = "#f23"

    home.style.display = "none";
    products.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";

    mediaAbout.className = "focus-navigation-media"
    mediaProducts.className = "not-focus-navigation-media"
    mediaContact.className = "not-focus-navigation-media"
    aboutNav.className = "focus-navigation"
    productsNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
})
titleAboutHome.addEventListener("click", () => {
    home.style.display = "none";
    products.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";

    aboutNav.className = "focus-navigation"
    productsNav.className = "not-focus-navigation"
    contactNav.className = "not-focus-navigation"
})
contactNav.addEventListener("click", () => {
    home.style.display = "none";
    products.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    contactNav.className = "focus-navigation"
    aboutNav.className = "not-focus-navigation"
    productsNav.className = "not-focus-navigation"
    mediaContact.className = "focus-navigation-media"
    mediaAbout.className = "not-focus-navigation-media"
    mediaProducts.className = "not-focus-navigation-media"
})
mediaContact.addEventListener("click", () => {
    navigationMedia.style.display = "none"
    navigationMedia.style.top = -350
    header.style.background = "#f23"
    
    home.style.display = "none";
    products.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    contactNav.className = "focus-navigation"
    aboutNav.className = "not-focus-navigation"
    productsNav.className = "not-focus-navigation"
    mediaContact.className = "focus-navigation-media"
    mediaAbout.className = "not-focus-navigation-media"
    mediaProducts.className = "not-focus-navigation-media"
})

right.addEventListener("click", () => {
    if (imageLength != productsList.length - 3) {
        cardProducts.innerHTML = "";
        imageLength++;
        showProductos(imageLength);
    }
})
left.addEventListener("click", () => {
    if (imageLength != 0) {
        cardProducts.innerHTML = "";
        imageLength--;
        showProductos(imageLength);
    }
})

