/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//( °F − 32) × 5/9 =  °C  farenheit a celcius
	var temperatura; 
	var temperaturaF;
	var temperaturaC;

   
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt (temperatura);

    temperaturaC = (temperatura -32)*5/9;



    alert (temperatura +" grados Fahrenheit son "+ temperaturaC+ " grados Centígrados.");

}

function CentigradosFahrenheit () 
{ //( °C × 9/5) + 32 =  °F   celcius a farenheit
	var temperatura; 
	var temperaturaF;
	var temperaturaC;

   
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt (temperatura);

    temperaturaF = (temperatura*9/5) +32 ;



    alert (temperatura +" grados Fahrenheit son "+ temperaturaF+ " grados Centígrados.");

}
