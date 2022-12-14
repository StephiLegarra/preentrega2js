// COMPRA ONLINE EN MERAKI 

// SALUDO DE BIENVENIDA
const local = "Meraki Online"
const Bienvenido = ("Bienvenid@ a " + local);

console.log (Bienvenido);
alert (Bienvenido);

// IDENTIFICACION INICIAL
let nombre = prompt("Ingrese su nombre").toLowerCase();
let apellido = prompt("Ingrese su apellido").toLowerCase();

// FUNCION SALUDO
function saludo() {
    alert("Bienvenid@ " + nombre + " "+ apellido + " Gracias por visitarnos. Todas las promociones y compras que hagas las recibirás en tu correo electrónico una vez que te registres");
    console.log ("Bienvenid@ " + nombre + " "+ apellido + " Gracias por visitarnos. Todas las promociones y compras que hagas las recibirás en tu correo electrónico una vez que te registres");
}
saludo();

// FUNCION MENU 
function menu() {
    let opcion = parseInt(prompt("Ingrese que desea hacer \n 1. Registrarme al newletter \n 2. Darme de baja \n 3. Consultar producto \n 4. Salir"));
    return opcion;
}

// 1 - REGISTRARSE
class Cliente {
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
}

const arrayClientes = [];
console.log (arrayClientes);

function altaCliente() {
    let nombre = prompt("Ingrese su nombre").toLowerCase();
    let apellido = prompt("Ingrese su apellido").toLowerCase();
    let edad = parseInt(prompt("Ingrese su edad"));
    let email = prompt("Ingrese su casilla de correo electrónico").toLowerCase();
    while (email.search("@") == -1) {
        console.log ("Ingrese un correo valido");
        alert ("Ingrese un correo valido");
      altaCliente();
        console.log (email);
    }
        alert ("Correo electronico registrado! Muchas gracias.")
        console.log (email);
    let cliente = new Cliente (nombre, apellido, edad, email);
    arrayClientes.push(cliente);
    console.log (arrayClientes);
    alert ("Gracias por registrarse a nuestro newletter, te estaremos enviando todas nuestras promociones al email registrado");
}

// 2 - DAR DE BAJA 
function bajaCliente() {
    let email = prompt("Ingrese su casilla de correo electrónico").toLowerCase();
    let cliente = arrayClientes.find(cliente => cliente.email === email);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice,1);
    console.log (arrayClientes);
    alert ("Has sido dado de baja y ya no recibirás nuestro newletter por correo");
}

// 3 - CONSULTAR PRODUCTO
class Producto {
    constructor(nombre,material,precio,list){
        this.nombre = nombre;
        this.material = material;
        this.precio = precio;
        this.list = list;
    }
  }
 
// PRODUCTOS EN VENTA
const mates = new Producto ("mate", "madera pintado a mano", 1500, 1);
const cuenco = new Producto ("cuenco", "madera pintado a mano", 950, 2);
const portasahumerio = new Producto ("portasahumerio", "Madera pintado a mano", 1200, 3);
const tabla = new Producto ("Tabla", "Madera pintado a mano", 1850, 4);

// ARRAY PRODUCTOS
const articulos = [mates, cuenco, portasahumerio, tabla];

const arrayProductos = [];

function elegirProducto () {
    let seleccionProducto = parseInt(prompt("Escriba el número del producto que desea comprar: \n 1. Mates  \n 2. Cuencos \n 3. Portasahumerios \n 4. Tabla "));
    let productosSeleccionados = articulos.find (el => el.list === seleccionProducto);
    console.log(productosSeleccionados);
    if (productosSeleccionados === undefined) {
      alert("Ingrese un número válido por favor");
      elegirProducto();
    }
    arrayProductos.push(productosSeleccionados.precio);
  }
  
  function finalizarCompra () {
    let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto, 0);
    alert("El total de su compra es $:" + totalPrecio);
    alert("Gracias por elegirnos y comprar en " + local);
  };


// 4 - SALIR
function salir() {
    alert ("Gracias por visitar nuestro sitio web de " + local);
}

// VOLVER AL MENU PRINCIPAL
function volver() {
    consulta = parseInt(prompt("¿Desea hacer otra consulta?: " + "\n\n" + ("1. Si, quiero volver al Inicio") + "\n" + ("2. No gracias, deseo salir")));
    switch (consulta) {
        case 1:
            menu();
            break;

        case 2:
            salir();
            break;

        default:
            console.log("Debes elegir una de las opciones");
            alert("Debes elegir una de las opciones");
            volver();
            break;
    }

} 

// EJECUTO EL PROGRAMA
let opcion = menu();
switch (opcion) {
    case 1: 
      altaCliente();
      volver();
      break;
    case 2:
        bajaCliente();
        volver();
      break;
    case 3:
        elegirProducto();
        finalizarCompra();
        volver();
        break;
    case 4:
        salir();
        volver();
        break;
    default: 
    alert ("opcion incorrecta");
    break;
}
