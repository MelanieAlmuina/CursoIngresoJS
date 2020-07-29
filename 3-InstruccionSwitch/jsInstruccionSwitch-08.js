function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case"Bariloche":
			alert("Hace Frío.");
			break;
		case"Cataratas":
			alert("Hace Calor.");
			break;
		case"Mar del plata":
			alert("Hace Calor");
			break;
		case"Cordoba":
			alert("Hace frio");
			break;
	}


}//FIN DE LA FUNCIÓN