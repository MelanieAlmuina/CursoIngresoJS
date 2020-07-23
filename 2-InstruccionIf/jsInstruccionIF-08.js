//Almuina - Ejercicio A - (Se que puedo meter mas else, pero por ahora logre que me funcione así)

function mostrar()
{
	var edadIngresada;
	var elEstadoCivil;
	

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	elEstadoCivil=estadoCivil.value;//Nose como poner la variable SOLTERO CASADO DIVORCIAD
 	
 	if(edadIngresada>59)
 	{
	alert("Sos persona de riesgo");
	}

	if(edadIngresada>17)
	{
		alert("Sé responsable");
		 
		if (elEstadoCivil=="Soltero")
		{
		alert("A vivir la vida");
		}

		if(elEstadoCivil=="Divorciado")
		{
		alert("A intentarlo nuevamente");
		}
				
		if(elEstadoCivil=="Casado")
		{
		alert("A disfrutar la pareja");
		}			
	}	
					if(edadIngresada<18)
					{
					alert("Respeta a tus mayores");
					}

					if(edadIngresada<13)
					{
					alert("Hagan la tarea");
					}	
		
					if(edadIngresada<18 && elEstadoCivil!="Soltero")
					{
					alert("Sos muy joven para no ser soltero");
					}
					
		
}

//FIN DE LA FUNCIÓN