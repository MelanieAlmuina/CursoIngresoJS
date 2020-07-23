


/*                                          MI SOLUCIÓN
Se pide un importe y un porcentaje descuento por prompt, y se muestra el importe con el descuento por
 alert con el mensaje " el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, 
 gracias por su compra"*/
{    
    var importe; 
    var porcentajeDeDescuento;
    var importeConDescuento;
    var precioFinal;


    importe =prompt ("Ingrese su importe ");
    importe =parseInt(importe);

    porcentajeDeDescuento = prompt ("Ingrese el porcentaje de descuento ");
    porcentajeDeDescuento = parseInt (porcentajeDeDescuento);

    importeConDescuento = importe*porcentajeDeDescuento/100;

    precioFinal = importe - importeConDescuento;
 

    alert ("El importe es $"+ importe + ", el total de descuento es de %"+ porcentajeDeDescuento+", y el precio final es $"+precioFinal+" gracias por su compra.");



}

/*
                                        SOLUCION DEL PROFESOR
function mostrarAumento()
{
  var importeIngresado;
  var porcentajeIngresado;
  var porcentajeCalculado;
  var precioFinal;

  importeIngresado=prompt("Ingrese el importeIngresado ");
  importeIngresado=parseInt(importeIngresado);
  /*
  porcentajeIngresado=prompt("Ingrese el porcentajeCalculado ");
  porcentajeIngresado=parseInt(porcentajeIngresado);
  
  porcentajeIngresado=10;
  porcentajeCalculado=importeIngresado*porcentajeIngresado/100;//importeIngresado*0.9

  precioFinal=importeIngresado+porcentajeCalculado;

  alert("El importeIngresado es $"+importeIngresado+ " el total de descuento es $"+Descuento+" y el precio final es $"+precioFinal+", gracias por su compra.");

}
/*

















/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	
  var sueldo;
  var porcentaje;
  var resultado;

  sueldo = txtIdImporte.value;
  sueldo = parseInt (sueldo);

  porcentaje = sueldo*25/100 ;

  resultado = txtIdResultado.value;
  resultado = sueldo - porcentaje;

  txtIdResultado.value = resultado;

}
*/