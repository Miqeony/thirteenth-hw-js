

const header = document.createElement("header");


const headerContainer = document.createElement("div");
headerContainer.classList.add("header_container");

const generalDiv = document.createElement("div");
generalDiv.classList.add("general");


const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");


const logoLink = document.createElement("a");
logoLink.href = "/index.html";


const logoImg = document.createElement("img");
logoImg.src = "img/logo.svg"; 
logoImg.alt = "Logo";


logoLink.appendChild(logoImg);


logoDiv.appendChild(logoLink);


const nav = document.createElement("nav");
nav.classList.add("nav_menu");


const ul = document.createElement("ul");
ul.classList.add("site_nav_menu");


const menuItems = [
    "Electric Skateboards",
    "Electric Scooters",
    "Accessories",
    "Gift Card",
    "More Info"
];


menuItems.forEach(function(item) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "/newPage.html";
    a.classList.add("site-nav__link");
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
});


nav.appendChild(ul);


const personalNavDiv = document.createElement("div");
personalNavDiv.classList.add("personal_nav");


const personalLink = document.createElement("a");
personalLink.href = "/newPage.html";
personalLink.innerHTML = "<img src='img/pers2.svg' alt='Personal Cabinet'>";

const basketLink = document.createElement("a");
basketLink.href = "/newPage.html";
basketLink.innerHTML = "<img src='img/cart.svg' alt='Buyer Basket'>";


personalNavDiv.appendChild(personalLink);
personalNavDiv.appendChild(basketLink);


generalDiv.appendChild(logoDiv);
generalDiv.appendChild(nav);
generalDiv.appendChild(personalNavDiv);
headerContainer.appendChild(generalDiv);
header.appendChild(headerContainer);


document.body.insertBefore(header, document.body.firstChild);
