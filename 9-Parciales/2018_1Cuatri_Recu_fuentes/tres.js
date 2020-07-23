function mostrar()
{  
    var precioIngresado;
	var descuentoIngresado;
	var descuento
	var resultadoConDescuento;

	precioIngresado = prompt("Ingrese el precio.");
	precioIngresado = parseInt(precioIngresado);

	
	descuentoIngresado = prompt("Ingrese el descuento.");
	descuentoIngresado = parseInt(descuentoIngresado);

	
	descuento = precioIngresado*descuentoIngresado/100;

	resultadoConDescuento=(precioIngresado-descuento);


    elPrecioFinal.value = resultadoConDescuento;



}
