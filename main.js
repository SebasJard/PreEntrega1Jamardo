const productos = [
    { nombre: "harina", precio: 50 },
    { nombre: "galletitas", precio: 100 },
    { nombre: "cerveza", precio: 150 },
    { nombre: "leche", precio: 200 },
    { nombre: "gaseosa", precio: 250 },
];
let carrito = []

let seleccion = prompt("Hola desea comprar algun producto si o no")

while (seleccion != "si" && seleccion != "no") {
    alert ("por favor ingresa si o no")
    seleccion = prompt ("Hola desea comprar algo si o no")
}

if(seleccion == "si") {
    alert("a continuación nuestra lista de productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert((todoslosProductos).join(" - "));
} 