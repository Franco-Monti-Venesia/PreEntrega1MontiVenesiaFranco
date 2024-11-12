let producto = prompt("Ingresa el nombre del producto para ver el precio o escribe 'salir' para finalizar.").toLowerCase();

debugger;
while (producto !== "salir") {
    switch (producto) {
        case "tallarines":
            alert("El precio por kg de los Tallarines es $3700.");
            break;
        case "ñoquis":
            alert("El precio por kg de los Ñoquis es $3800.");
            break;
        case "ravioles":
            alert("El precio por kg de los Ravioles es $7500.");
            break;
        case "tirabuzones":
            alert("El precio por kg de los Tirabuzones es $3700.");
            break;
        case "sorrentinos":
            alert("El precio por kg de los Sorrentinos es $8500.");
            break;
        case "canelones":
            alert("El precio por kg de los Canelones es $8500.");
            break;
        default:
            alert("No tenemos ese producto en el carrito.");
            break;
    }
    producto = prompt("Ingresa otro producto para ver el precio o escribe 'SALIR' para finalizar.").toLowerCase();
}
