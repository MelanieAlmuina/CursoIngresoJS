function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case"Bariloche":
			alert("Oeste.");
			break;
		case"Cataratas":
			alert("Noreste");
			break;
		case"Mar del plata": 
			alert("Sureste");
			break;
		case"Cordoba":
			alert("Sur");
			break;
	}



}//FIN DE LA FUNCIÓN