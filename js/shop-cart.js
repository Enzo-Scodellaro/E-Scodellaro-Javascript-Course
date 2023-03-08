const d = document;
let carrito = [];
const tbody = d.querySelector('.tbody');

export default function carritoCompras(){

const clickButton = d.querySelectorAll('.button');
    
console.log(clickButton);

    clickButton.forEach(btn => {
        btn.addEventListener('click', addToCarritoItem)
    })

    function addToCarritoItem(e){
        const button = e.target;
        // console.log(button)
        const item = button.closest('.product-card');
        // console.log(item)
        const itemTitle = item.querySelector('.card-title').textContent;
        console.log(itemTitle);
        const itemPrice = item.querySelector('.card-price').textContent;
        console.log(itemPrice);
        const itemImg = item.querySelector('.card-img').src;
        console.log(itemImg);

        const newItem = {
            title: itemTitle,
            price: itemPrice,
            img: itemImg,
            cantidad: 1,
        };
        addItemCarrito(newItem);
    }


    function addItemCarrito(newItem){

        const inputElemento = tbody.getElementsByClassName('input__element')
        for(let i = 0; i < carrito.length; i++){
            if(carrito[i].title.trim() === newItem.title.trim()){
                carrito[i].cantidad ++;
                const inputValue = inputElemento[i];
                inputValue.value++;
                return null;
            }
        }


        carrito.push(newItem);
        renderCarrito();
    }


    function renderCarrito(){
        tbody.innerHTML = '';
        console.log(carrito)
         carrito.map(item => {
             const tr = d.createElement('tr');
             tr.classList.add('ItemCarrito');
             const content = `
             <th class=" align-middle text-bg-dark"scope="row">1</th>
                 <td class="table-productos text-bg-dark">
                   <img src=${item.img}>
                 </td>
                 <td class="align-middle tabletitle text-bg-dark">
                     <h6 class="title">${item.title}</h6>
                 </td>
                 <td class="align-middle table-price text-bg-dark">
                     <p class="price">${item.price}</p>
                 </td>
                 <td class="align-middle table-cantidad text-bg-dark">
                    <div class="d-flex justify-content-center">
                        <input type="number" min="1" class="input__element" value=${item.cantidad}>
                        <button class="delete btn btn-danger">x</button>
                    </div>
                 </td>`;
        
         tr.innerHTML = content;
         tbody.appendChild(tr);
         }); 
     }
}

