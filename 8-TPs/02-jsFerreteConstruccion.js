/*2.	Para el departamento de Construcción:
A.  mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ var largoDelTerreno;
  var anchoDelTerreno;
  var perimetro;
  var cantidadDeAlambre;
  var resultadoFinal;

  largoDelTerreno = txtIdLargo.value;
  largoDelTerreno = parseInt (largoDelTerreno);

  anchoDelTerreno = txtIdLargo.value;	
  anchoDelTerreno = parseInt (largoDelTerreno);

  perimetro = (largoDelTerreno + anchoDelTerreno)*2;

  cantidadDeAlambre = perimetro*3; //*3 (el alambre)

//aca nose si es SOLO EL ANCHO o es BASE POR ALTURA;

  resultadoFinal = cantidadDeAlambre;
  
 alert ("Usted tiene que comprar una cantidad de "+ resultadoFinal +" metros de alambre" );


}
function Circulo () 
{//3,14 = pi

    var radioDelTerreno;
    var cantidadDeAlambre;
      

	radioDelTerreno = txtIdRadio.value;
	radioDelTerreno = parseInt(radioDelTerreno);
	
	cantidadDeAlambre = (((radioDelTerreno)*2)*3.14159265359)*3; //*3 VUELTAS DE ALAMBRE

	alert ("Cantidad de alambre a comprar: " + cantidadDeAlambre + " metros.");
}
function Materiales () 
{  
	var cantidadDeCemento;
	var cantidadDeCal;
	var largoDelTerreno;
	var anchoDelTerreno;
	var area;

	
	largoDelTerreno = txtIdLargo.value;
	largoDelTerreno = parseInt(largoDelTerreno);

	anchoDelTerreno = txtIdAncho.value;
	anchoDelTerreno = parseInt(anchoDelTerreno);


    area = (anchoDelTerreno * largoDelTerreno);
	
	cantidadDeCemento = 2 * area;

	cantidadDeCal = 3 * area;

   alert ("Usted necesita "+ cantidadDeCemento+ " bolsas de cemento y "+ cantidadDeCal+" bolsas de cal.");
    


	
}