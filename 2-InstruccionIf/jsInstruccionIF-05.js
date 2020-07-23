//Almuina - Ejercicio 5

function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

 
	if(edadIngresada<13)
	{
		alert("Usted no es adolescente");	
	}

    if(edadIngresada>17)
	{
		alert("Usted no es adolescente");
	}
//Buscamos los numeros que sean menores que 13 O mayores a 17 para crear la alerta.
  
  /*   if(edadIngresada<13 || edadIngresada>17)
    {
    	alert("Usted no es adolescente")

    }*/ //Posible solución.


// No hay un numero que sea menor a 13 Y mayor a 17, por eso va ||.
	/*
    if(edadIngresada<13 && edadIngresada>17)
    {
    	alert("Usted no es adolescente")

    }*/ //No soluciona este problema.


}//FIN DE LA FUNCIÓN