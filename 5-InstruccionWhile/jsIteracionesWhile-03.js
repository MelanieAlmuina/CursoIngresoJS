/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese la clave.");
	
	while(claveIngresada!="utn750")
	{	
		alert("Error, vuelva a intentar.");
		claveIngresada = prompt("ingrese la clave.");
	}

	alert("Bienvenido!");
	
}//FIN DE LA FUNCIÓN
