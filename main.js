const d = document;

import login from "./js/login.js";
import searchFilters from "./js/search-filter.js";
import hamburguerMenu from "./js/burguermenu.js";
import darkTheme from "./js/darkTheme.js";
import carritoCompras from "./js/shop-cart.js";
import carousel from "./js/banner-carousel.js";
import banner from "./js/banner-carousel.js";

d.addEventListener('DOMContentLoaded', e => {
    searchFilters("#card-filter",".product-card");
    hamburguerMenu(".panel-btn", ".panel", ".menu a");// Primer parametro: boton 2do: panel a ocultar. 3ro: link de las opciones del menu
    darkTheme('.dark-theme-btn','dark-mode');
    login('#user-icon');
    banner();
})

let productos = [];

fetch("./data.json")
  .then((res) => res.json())
  
  .then((data) => {
    cargarProductos(data);
  });

  const cargarProductos = (data) => {
    
    productos = data;
    const productsContainer = document.getElementById("productos");
    
    productos.map((product) => {
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
    };


  




















































































