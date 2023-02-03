//Variables
let accion;
let producto;
let precioTv =43000;
let precioFreezer = 120500;
let precioLic = 22000;
let Interes = 1.25;
//Funciones
//Función n1 "Bienvenida" 
function bienvenida(){
    let usuario = prompt('Ingrese nombre de usuario:')
    alert('Hola ' + usuario + ', Gracias por visitar e-scodellaro. \n A continuación elegí tu producto de interes' )
}
//Función categoría de producto 
function categoria(){
    categ = prompt('¿Qué estás buscando?\n 1:Tv\n 2:Freezer\n 3:Licuadora\n ')
        if (categ === "1"){
            alert('Elegiste el producto ' + categ)}
        else if (categ === "2"){
            alert('Elegiste el producto ' + categ)}
        else if (categ === "3"){
            alert('Elegiste el producto ' + categ)
        }
}
//Función Fin de Compra
function compra(){
    if (categ === "1"){
        alert('Usted eligió el producto "Tv Smart 43" con un precio de ' + precioTv + ' en efectivo.')
    } else if (categ === "2"){
        alert('Usted eligió el producto "Freezer" con un precio de ' + precioFreezer + ' en efectivo.')
    }else if (categ === "1"){
        alert('Usted eligió el producto "Licuadora" con un precio de ' + precioLic + ' en efectivo.')
    }
}
//Función de cierre
function terminar(){
    accion = prompt ('¿Qué desea hacer? \n 1: Efectuar compra en efectivo\n 2: Efectuar pago con tarjeta de crédito \n 3: Salir')
while (accion !== "3"){
    if (accion === "1"){
    switch(categ){
        case "1":
            alert('Se efectuó la compra del producto "Tv Smart 43" con un precio de ' + precioTv + ' en efectivo.');
            accion = prompt('Ingrese: \n 3: Para Salir \n 4: Para seguir comprando')
            break;
        case "2":
            alert('Usted eligió el producto "Freezer" con un precio de ' + precioFreezer + ' en efectivo.');
            accion = prompt('Ingrese: \n 3: Para Salir \n 4: Para seguir comprando')
            break;
        case "3":
            alert('Usted eligió el producto "Licuadora" con un precio de ' + precioLic + ' en efectivo.') 
            accion = prompt('Ingrese: \n 3: Para Salir \n 4: Para seguir comprando')
            break;    
        default:
            break;   
    }}
     if (accion === "2"){
    switch(categ){
        case "1": 
            alert('Se efectuó la compra del producto "Tv Smart 43" con un precio de ' + precioTv*Interes + ' en 3 pagos con tarjeta.');
            accion = prompt('Ingrese: \n 3: Para Salir \n 4: Para seguir comprando')
            break;
        case "2":
            alert('Se efectuó la compra del producto "Freezer" con un precio de ' + precioFreezer*Interes  + ' en 3 pagos con tarjeta.');
            accion = prompt('Ingrese: \n 3: Para Salir \n 4: Para seguir comprando')
            break;
        case "3":
            alert('Se efectuó la compra del producto "Licuadora" con un precio de ' + precioLic*Interes + ' en 3 pagos con tarjeta.'); 
            accion = prompt('Ingrese: \n 3: Para Salir \n 4: Para seguir comprando')
            break;    
        default:
            break;   
    }
} else if (accion > "3"){
categoria();
compra();
terminar();
}
}
}


//LLamar funciones
bienvenida();
categoria();
compra();
terminar();







