/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numerosIngresados;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si")
	{	 
		numerosIngresados=prompt("Ingrese un número.");
		numerosIngresados=parseInt(numerosIngresados);

		acumulador=acumulador+numerosIngresados;
		contador=contador+1;
	
		respuesta= prompt("¿Quiere seguir si o no?")
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador; // <---PROMEDIO

}//FIN DE LA FUNCIÓN