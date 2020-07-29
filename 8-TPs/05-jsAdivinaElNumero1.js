/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

function comenzar()
{	var numeroSecreto; 
	var contadorIntentos;
	var numeroRandom;


	numeroRandom= Math.floor(Math.random() * 10) + 1;
	
	txtIdNumero.value= numeroSecreto;
	
	contadorIntentos=0;

	if(numeroSecreto!=numeroRandom)
	{
		if(numeroSecreto<numeroRandom)
		{
			alert("Falta.");
		}
		else
		{
			alert("Se pasó…");
		}

		contadorIntentos=contadorIntentos+1
	}

	
	/*if (contadorIntentos<10)
	{	
		console.log(numero);
		numero=numero+1;
		alert("Usted es un ganador!!");
		alert("El numero secreto era " + numeroRandom);
	}
	*/


function verificar()
{
	
	
}