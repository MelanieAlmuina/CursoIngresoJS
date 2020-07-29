//Almuina - Ejercicio A -
 /*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente" */
function mostrar()
{	
	var edadIngresada;
	var elEstadoCivil;
	

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	elEstadoCivil=estadoCivil.value;

	switch(edadIngresada)
	{	
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			alert("Hagan la tarea.");
			break;
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			alert("Respeta a tus mayores.");
				switch(elEstadoCivil)
				{
				case"Casado":
					alert("Sos muy joven para no ser soltero");
					break;
				case"Divorciado":
					alert("Sos muy joven para no ser soltero");
				}
			break;
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
		case 58:
		case 59:
		case 60:
			alert("Se responsable.");
			switch(elEstadoCivil)
			{	case "Soltero":
				alert("A vivir la vida");
					break;
				case"Casado":
					alert("A disfrutar la pareja.");
					break;
				case"Divorciado":
					alert("A intentarlo nuevamente");
					break;
			}
					break;
		default:
			alert("Se responsable.");
			alert("Sos persona de riesgo.");
			
			switch(elEstadoCivil)
			{
				case "Soltero":
				alert("A vivir la vida");
					break;
				case"Casado":
					alert("A disfrutar la pareja.");
					break;

				case"Divorciado":
					alert("A intentarlo nuevamente");
					break;
			}		
	}
}












































/*{
	var edadIngresada;
	var elEstadoCivil;
	

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	elEstadoCivil=estadoCivil.value;//Nose como poner la variable SOLTERO CASADO DIVORCIAD
 	
 	if(edadIngresada>59)
 	{
	alert("Sos persona de riesgo");
	}

	if(edadIngresada>17 && edadIngresada<60)
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
					
		
}*/

//FIN DE LA FUNCIÓN