let producto = prompt("Ingresa el nombre del producto para ver el precio o escribe 'SALIR' para finalizar.");

debugger;
while (producto !== "SALIR") {
    switch (producto) {
        case "Tallarines":
            alert("El precio por kg de los Tallarines es $3700.");
            break;
        case "Ñoquis":
            alert("El precio por kg de los Ñoquis es $3800.");
            break;
        case "Ravioles":
            alert("El precio por kg de los Ravioles es $7500.");
            break;
        case "Tirabuzones":
            alert("El precio por kg de los Tirabuzones es $3700.");
            break;
        case "Sorrentinos":
            alert("El precio por kg de los Sorrentinos es $8500.");
            break;
        case "Canelones":
            alert("El precio por kg de los Canelones es $8500.");
            break;
        default:
            alert("No tenemos ese producto en el carrito.");
            break;
    }
    producto = prompt("Ingresa otro producto para ver el precio o escribe 'SALIR' para finalizar.");
}