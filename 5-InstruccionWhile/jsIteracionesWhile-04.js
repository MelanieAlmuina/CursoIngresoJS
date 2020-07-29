/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado=0
	numeroIngresado=prompt("Ingrese un numero entre 0 y 9.")
	
	while(numeroIngresado>9)
	{	
		alert("Error, vuelva a intentar.");
		numeroIngresado=prompt("Ingrese un numero entre 0 y 9.")
		
	}

  		alert("Su numero es "+numeroIngresado);
  		txtIdNumero.value=numeroIngresado;

}








	//numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	
//FIN DE LA FUNCIÓN