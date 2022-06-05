/* Este algoritmo simula el cálculo del precio final de los productos agregados a carrito
al no tener datos concretos, se utilizarán variables para simular los datos que se calcularían en carrito.*/

let precioMuscuosaEstampada = 1550;
let precioRemeraVolados = 1700;
let pulseraSimilCobre = 750;

let cantidadTotal = 0;

function calcularSubTotal(precioProducto, nombreProducto) {
    cantidad = +prompt("Ingrese cantidad de" + nombreProducto);
    cantidadTotal = cantidadTotal + cantidad;
    return precioProducto * cantidad;
}

function calcularTotal() {
    let subTotalMusculosaEstampada = calcularSubTotal(precioMuscuosaEstampada, "musculosa estampada");
    let subTotalRemeraVolados = calcularSubTotal(precioRemeraVolados, "remera volados");
    let subTotalPulseraSimilCobre = calcularSubTotal(pulseraSimilCobre, "pulsera simil cobre");
    console.log('cantidad :>> ', cantidad);
    if(cantidadTotal > 3){
        let descuento = 15;
        let descuentoTotal = (subTotalMusculosaEstampada + subTotalRemeraVolados + subTotalPulseraSimilCobre) * descuento / 100;
        console.log('descuentoTotal :>> ', descuentoTotal);
        return subTotalMusculosaEstampada + subTotalRemeraVolados + subTotalPulseraSimilCobre - descuentoTotal;
    }
    return subTotalMusculosaEstampada + subTotalRemeraVolados + subTotalPulseraSimilCobre;
}

console.log("El precio total es $", calcularTotal());



