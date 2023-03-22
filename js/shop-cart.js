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
        // console.log(itemTitle);
        const itemPrice = item.querySelector('.card-price').textContent;
        // console.log(itemPrice);
        const itemImg = item.querySelector('.card-img').src;
        // console.log(itemImg);

        const newItem = {
            title: itemTitle,
            price: itemPrice,
            img: itemImg,
            cantidad: 1,
        }
        addItemCarrito(newItem);
    }


    function addItemCarrito(newItem){

        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Producto añadido al carrito',
            showConfirmButton: false,
            timer: 1500,
            toast: true,

          })


        const inputElemento = tbody.getElementsByClassName('input__element')
        for(let i = 0; i < carrito.length; i++){
             if(carrito[i].title.trim() === newItem.title.trim()){
                 carrito[i].cantidad ++;
                 const inputValue = inputElemento[i];
                 inputValue.value ++;
                 carritoTotal();
                 return null;
             }
         }
        carrito.push(newItem);      
        renderCarrito();
        addLocalStorage();
    }


    function renderCarrito(){     
        console.log(carrito);
        tbody.innerHTML = '';
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
                  </td>`
        
            tr.innerHTML = content;
            tbody.appendChild(tr);
            tr.querySelector(".delete").addEventListener("click",removeItemCarrito);
            tr.querySelector(".input__element").addEventListener("change",sumaCantidad);
        
        });
          carritoTotal();
     }


      function carritoTotal(){
         let total = 0;
         const itemCartTotal = d.querySelector('.itemCartTotal');
         carrito.forEach((item) => {
             const precio = Number(item.price.replace("$",''))
             total = total + precio*item.cantidad;
         })
         itemCartTotal.innerHTML = `Total $${total}`;
         addLocalStorage();
      }



     function removeItemCarrito(e){ 
        
        Swal.fire({
            title: 'Eliminar producto del carrito?',
            text: "",
            icon: 'warning',
            position: 'center',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            reverseButtons: true,
            confirmButtonColor:'#FF8300',
          }).then((result) => {
                if (result.isConfirmed) {
                const buttonDelete = e.target;
                const tr = buttonDelete.closest('.ItemCarrito');
                const title = tr.querySelector('.title').textContent;
                for(let i=0; i < carrito.length; i++){
                    if(carrito[i].title.trim() === title.trim()){
                    carrito.splice(i,1);
                        }
                    }
                tr.remove();
                carritoTotal()
                Swal.fire({
                    title:'Producto eliminado del carrito',
                    icon:'warning',
                    toast: true,
                    timer: 1500,
                    showConfirmButton: false,
                    position: 'top-right',
                })
                 }
                }) 
    }
        


        //  const buttonDelete = e.target;
        //  const tr = buttonDelete.closest('.ItemCarrito');
        //  const title = tr.querySelector('.title').textContent;
        //  for(let i=0; i < carrito.length; i++){
        //      if(carrito[i].title.trim() === title.trim()){
        //          carrito.splice(i,1);
        //      }
        //  }
        //  tr.remove();
         //carritoTotal()
      

      function sumaCantidad(e){
         const sumaInput = e.target;
         const tr = sumaInput.closest(".ItemCarrito");
         const title = tr.querySelector('.title').textContent;
         carrito.forEach(item => {
             if(item.title.trim() === title){
                 sumaInput.value < 1
                 ? (sumaInput.value = 1)
                 : sumaInput.value;
                 item.cantidad = sumaInput.value;
                 carritoTotal()
             }
         })
      }

      function addLocalStorage(){
         localStorage.setItem('carrito',JSON.stringify(carrito));
      }
     
//      function verificarCarrito(){
//         let localSt = JSON.parse(localStorage.getItem('carrito'));
//         if((carrito !== undefined)||(carrito !== null)){  
//             carrito = localSt;
//         } 
//      }
// }
    }