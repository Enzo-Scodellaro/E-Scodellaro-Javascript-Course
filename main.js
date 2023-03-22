//& 3ERA PRE-ENTREGA-------------------------------------
const d = document;
import login from "./js/login.js";
import searchFilters from "./js/search-filter.js";
import hamburguerMenu from "./js/burguermenu.js";
import darkTheme from "./js/darkTheme.js";
import carritoCompras from "./js/shop-cart.js";
// import hoverShadow from "./js/shadows.js";


d.addEventListener('DOMContentLoaded', e => {
    searchFilters("#card-filter",".product-card");
    hamburguerMenu(".panel-btn", ".panel", ".menu a");// Primer parametro: boton 2do: panel a ocultar. 3ro: link de las opciones del menu
    darkTheme('.dark-theme-btn','dark-mode');
    login('#user-icon')
    // hoverShadow('.product-card');
})


//TODO Datos de productos y función generadora de las cards de productos

const products = [
    {
        name: "Televisor Smart Led Philips 4K Android",
        price: "$75000",
        img:"./img/products/Tv.jpg"
    },
    {
        name: "Licuadora MABE MB120F 2000W",
        price: "$22000",
        img:"./img/products/Licuadora.jpg"
    },
    {
        name: "Heladera Patrick HPKMB1000B",
        price: "$169000",
        img:"./img/products/heladera.jpg"
    },
    {
        name: "Microondas BGH BG2FKJ 1200W",
        price: "$53000",
        img:"./img/products/microondas.jpg"

    },
    {
        name: "Aspiradora ATMA A120FP",
        price: "$29999",
        img:"./img/products/aspiradora.png"

    },
    {
        name: " Cafetera ATMA CA9196 automática negra y plata expreso 220V",
        price: "$63000",
        img:"./img/products/cafetera.png"

    },
    {
        name: "Heladera Patrick HPKMB1000B",
        price: "$169000",
        img:"./img/products/heladera.jpg"

    },
    {
        name: "Tostadora Philips Daily Collection HD4825/95",
        price: "$21000",
        img:"./img/products/tostadora.png"

    }
];

window.onload = () => {
    const productsContainer = document.getElementById("productos");
//!Generando cards de la tienda
    products.map((product) => {
        productsContainer.innerHTML +=
            `<div class="product-card"><img class="card-img" src="${product.img}" alt="${product.name}"/>
                <div class="card-text">
                    <h3 class="card-price">${product.price}</h3>
                    <p class="card-title">${product.name}</p>
                </div>
                <div id="card-button">
                <button type="button"  class="button btn btn-light"> Añadir </button>
                </div>
            </div>`
    });
    carritoCompras();
}


//todo--------------------------------------------------



    //!Alternativa Javascript para shadow y scale en hover de las cards
    // const cards = document.querySelectorAll('.product-card')
    // console.log(cards);
    // cards.forEach( card => {
    // card.addEventListener('mouseover', e => {
    //     card.classList.add('shadow');
    //     console.log('hola');
    //     console.log(origin);
    // })
    // card.addEventListener('mouseout', e => {
    //     card.classList.remove('shadow');
    //     console.log('hola');
    //     console.log(origin);
    // }) 




























































































