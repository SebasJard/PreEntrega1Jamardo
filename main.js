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
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo si o no")
}

if (seleccion == "si") {
    alert("a continuación nuestra lista de productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert((todoslosProductos).join(" - "));
} else if (seleccion == "no") {
    alert("gracias por venir, hasta pronto!")
}

while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "harina" || producto == "galletitas" || producto == "cerveza" ||
        producto == "leche" || producto == "gaseosa") {
        switch (producto) {
            case "harina":
                precio = 50;
                break;
            case "galletitas":
                precio = 100;
                break;
            case "cerveza":
                precio = 150;
                break;
            case "leche":
                precio = 200;
                break;
            case "gaseosa":
                precio = 250;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades quieres llevar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando")

    while (seleccion === "no") {
        alert("gracias por la compra! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades},
             total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)
