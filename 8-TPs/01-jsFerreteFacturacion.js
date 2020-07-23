/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  
    var precioUno;
	var precioDos;	
	var precioTres;	
	var resultadoDeLaSuma;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    resultadoDeLaSuma = precioUno + precioDos + precioTres;

    alert ("La suma de sus productos es de $" + resultadoDeLaSuma);




}

function Promedio () 
{   
	var precioUno;
	var precioDos;	
	var precioTres;	
	var resultadoDelPromedio;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    resultadoDelPromedio = (precioUno + precioDos + precioTres)/3 ;

    alert ("El promedio es de " + resultadoDelPromedio);

	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;	
	var precioTres;
	var resultado; 	
	var iva;
    var resultadoFinal;

    //le pongo ID a las variables y las paso a Numero con el parseInt
	precioUno = txtIdPrecioUno.value;
	precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);
    //sumo las variables y armo un resultado
    resultado = (precioUno + precioDos + precioTres);
    //armo la variable del resultado 
     iva = (resultado*21)/100;
    
    resultadoFinal = resultado + iva;

    alert ("El total es de " + resultadoFinal);

}