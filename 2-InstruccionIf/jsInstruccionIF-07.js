//Almuina - Ejercicio 7
function mostrar()
{	
	var edadIngresada;
	var elEstadoCivil;


	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	elEstadoCivil=estadoCivil.value;//Nose como poner la variable SOLTERO CASADO DIVORCIAD
 	
	if(edadIngresada<18 && elEstadoCivil!="Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero.");
	}
	else 
	{

	}
	
}//FIN DE LA FUNCIÓN