//Version actualizada siin branch erroneo

//Incialización de Variables/ Constructores/ Declaracion de arrays.
let eleccion

class Usuario {
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apeliido = apellido;
        this.email = email;
    }
}
let productos = [
    {id: 1, tipo: 'Tv', descripcion:' TV 43" Smart ', precio:67000 },
    {id: 2, tipo: 'Frio', descripcion:'Heladera Patrick HPKMB1000B' ,precio:240000 },
    {id: 3, tipo: 'Electrodomestico', descripcion:'Licuadora Liliana LIP500' ,precio:7400 },
  
];
let financiacion = [
    {k: 1.25, descripcion: '3 cuotas'},
    {k: 1.40, descripcion: '6 cuotas'},
    {k: 1.70, descripcion: '12 cuotas'},
]
let arrayUsuarios = [];

let totalcompra = [];

function registro(){
    alert('Bienvenido a E-Scodellaro Tienda Online\n A continuación ingrese los datos para su registro');
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    let email = prompt('Ingrese su mail');
    const nuevoUsuario = new Usuario(nombre, apellido, email);
    arrayUsuarios.push(nuevoUsuario);
    console.log(arrayUsuarios[0]);
  
}
function bienvenida(){
    alert ('Hola ' + arrayUsuarios[0].nombre + ', Gracias por visitar e-scodellaro. \n A continuación elegí tu opcion de interes' );
}
function verOferta(){
    const ofertas = productos.filter((baratos) => baratos.precio < 25000);
    for(const oferta of ofertas){
        alert('la oferta de hoy es: ' + oferta.descripcion + ' a un precio de ' + oferta.precio);
    } 
}
function comprarOferta(){
    const ofertas = productos.filter((baratos) => baratos.precio < 25000);
    for(const oferta of ofertas){
        alert('Se añadió al carrito el producto: ' + oferta.descripcion + ' con un precio de ' + oferta.precio);
        totalcompra.push(oferta.precio);
    } 
}
function elegirProducto(){
    eleccion = prompt('Ingrese accion de interes: \n 1: Ver TV 43" Smart \n 2:Ver Heladera Patrick HPKMB1000B \n 3:Ver Licuadora Liliana LIP500 \n Hot: Ver Ofertas \n 0: Salir');
    while (eleccion !== "0"){
    if(eleccion === "1"){
        alert('elegiste ' + productos[0].descripcion);
        break;
    }
    if (eleccion === "2"){
        alert('elegiste ' + productos[1].descripcion);
        break;
    }
    if (eleccion === "3"){
        alert('elegiste ' + productos[2].descripcion);
        break;
    }
    if (eleccion = "Hot"){
        verOferta();
        break;
    }
}
}
function compra(){
    if (eleccion === "1"){
        alert('Usted eligió el producto' + productos[0].descripcion + 'con un precio de ' + productos[0].precio + ' en efectivo.')
    } else if (eleccion === "2"){
        alert('Usted eligió el producto' + productos[1].descripcion + 'con un precio de ' + productos[1].precio + ' en efectivo.')
    }else if (eleccion === "3"){
        alert('Usted eligió el producto' + productos[2].descripcion + 'con un precio de ' + productos[2].precio + ' en efectivo.')
    }
}

function terminar(){ 
    accion = prompt ('¿Qué desea hacer? \n 1: Efectuar compra en efectivo\n 2: Efectuar pago en 3 cuotas con tarjeta de crédito \n 3: Efectuar pago en 6 cuotas con tarjeta de crédito \n 0: Salir') 
        while (accion !== "0"){
        if (accion === "1"){
        switch(eleccion){
            case "1":
                alert('Se añadió al carrito el producto' +  productos[0].descripcion + 'con un precio de ' + productos[0].precio + ' en efectivo.');
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                totalcompra.push(productos[0].precio);
                break;
            case "2":
                alert('Se añadió al carrito el producto' + productos[1].descripcion + 'con un precio de ' + productos[1].precio + ' en efectivo.');
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                totalcompra.push(productos[1].precio);
                break;
            case "3":
                alert('Se añadió al carrito el producto' + productos[2].descripcion + 'con un precio de ' + productos[2].precio + ' en efectivo.') 
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando')
                totalcompra.push(productos[2].precio);
                break;
            case "Hot":
                comprarOferta();
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                break;
            default:
                break;   
        }}
        if (accion === "2"){
        switch(eleccion){
            case "1": 
                alert('Se añadió al carrito el producto' + productos[0].descripcion + 'con un precio de ' + productos[0].precio*financiacion[0].k + ' en 3 pagos con tarjeta.');
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                totalcompra.push(productos[0].precio*financiacion[0].k);
                break;
            case "2":
                alert('Se añadió al carrito el producto' + productos[1].descripcion + 'con un precio de ' + productos[1].precio*financiacion[0].k  + ' en 3 pagos con tarjeta.');
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                totalcompra.push(productos[1].precio*financiacion[0].k);
                break;
            case "3":
                alert('Se añadió al carrito el producto' + productos[2].descripcion + 'con un precio de ' + productos[2].precio*financiacion[0].k + ' en 3 pagos con tarjeta.'); 
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                totalcompra.push(productos[2].precio*financiacion[0].k);
                break; 
            case "Hot":
                comprarOferta();
                accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                break;   
            default:
                break;   
        }}if (accion === "3"){
            switch(eleccion){
                case "1": 
                    alert('Se añadió al carrito el producto' + productos[0].descripcion + 'con un precio de ' + productos[0].precio*financiacion[1].k + ' en 6 pagos con tarjeta.');
                    accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                    totalcompra.push(productos[0].precio*financiacion[1].k);
                    break;
                case "2":
                    alert('Se añadió al carrito el producto' + productos[1].descripcion + 'con un precio de ' + productos[1].precio*financiacion[1].k  + ' en 6 pagos con tarjeta.');
                    accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                    totalcompra.push(productos[1].precio*financiacion[1].k);
                    break;
                case "3":
                    alert('Se añadió al carrito el producto' + productos[2].descripcion + 'con un precio de ' + productos[2].precio*financiacion[1].k + ' en 6 pagos con tarjeta.'); 
                    accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                    totalcompra.push(productos[2].precio*financiacion[1].k);
                    break;
                case "Hot":
                    comprarOferta();
                    accion = prompt('Ingrese: \n 0: Para Salir \n 4: Para seguir comprando');
                    break;    
                default:
                    break;   
            }}else if (accion > "3"){
                    elegirProducto();
                    compra();
                    terminar();
                }}
}
    



function finalizarCompra() {
    const total = totalcompra.reduce((acumulador,elemento) => acumulador + elemento, 0);
    alert('Gracias por su compra, el total a pagar es de ' + total + '\n Su comprobante de pago será enviado a ' + arrayUsuarios[0].email);
    console.log(total);
    bienvenida();
    elegirProducto();
    compra();
    terminar();
    finalizarCompra();
}






console.log(totalcompra);
registro();
bienvenida();
elegirProducto();
compra();
if (eleccion !== 0){
    terminar();
}

finalizarCompra();
