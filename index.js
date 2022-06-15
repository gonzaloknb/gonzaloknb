/* Este algoritmo simula el cálculo del precio final de los productos agregados a carrito
al no tener datos concretos, se utilizarán variables para simular los datos que se calcularían en carrito.*/

let precioMuscuosaEstampada = 1550;
let precioRemeraVolados = 1700;
let pulseraSimilCobre = 750;

let cantidadTotal = 0;

let producto1 = {
    id: 1,
    nombre: "musculosa estampada",
    precio: 1550
};

let productos = [
    {   
        id: 2,
        nombre: "remera volados",
        precio: 1700,
    },
    {
        id: 3,
        nombre: "pulsera simil cobre",
        precio: 750,
    },
];

productos.push(producto1);

function calcularSubTotal(precioProducto, nombreProducto) {
    cantidad = +prompt("Ingrese cantidad de" + nombreProducto);
    cantidadTotal = cantidadTotal + cantidad;
    return precioProducto * cantidad;
}

function calcularTotal() {
//    let subTotalMusculosaEstampada = calcularSubTotal(precioMuscuosaEstampada, "musculosa estampada");
//   let subTotalRemeraVolados = calcularSubTotal(precioRemeraVolados, "remera volados");
//   let subTotalPulseraSimilCobre = calcularSubTotal(pulseraSimilCobre, "pulsera simil cobre");
    let total = 0;


    for(const item of productos){
        let subtotal = calcularSubTotal(item.precio, item.nombre);
        total = total + subtotal;
        console.log("subtotal de $" + subtotal);
        let mostrarSubTotal = "SUBTOTAL DE " + item.nombre + ": $" + subtotal;
        alert(mostrarSubTotal);
    }

    if(cantidadTotal > 3){
        let descuento = 15;
        let descuentoTotal = total * descuento / 100;
        let mostrarTotal = "El precio total con descuento de $" + descuentoTotal + " es de $" + (total - descuentoTotal);
        alert(mostrarTotal);
        return total - descuentoTotal;
    }

    alert("El precio total es $", total );
    return total;
}
calcularTotal();






