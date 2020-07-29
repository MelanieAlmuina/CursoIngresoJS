function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	alert(estacionIngresada);
	var destino = txtIdDestino.value;
	alert(destino);
	var precio = 15000;
	var precioFinal;
	var descuento = 0;
	var aumento = 0 ;

	switch(estacionIngresada)
	{
		case"Invierno":

			switch(destino)
			{
				case"Bariloche":
					aumento = 20;	
				case "Cataratas"||"Cordoba":
					aumento = 10;	
				case"Mar del plata":
					descuento=20;
					break;
			}
	}	
	switch(estacionIngresada)
	{
		case"Verano":

			case"Bariloche":
				descuento=20;
				break
			case"Cataratas"&&"Cordoba":
				aumento=10;
				break
			case"Mar del plata":
				aumento = 20;
				break;
	}
	switch(estacionIngresada)
	{		
		case"Otoño"||"Primavera":
			
			case"Bariloche":
			aumento= 10;
				break
			case"Cataratas":
				aumento = 10
				break	
			case"Mar del plata":
				aumento=10;
				break
			case"Cordoba":
				break;
	}
		//no me funciona
	
		precioFinal= (precio+precio*aumento/100) || (precio-precio*descuento/100);
		alert("El precio total es $" +precioFinal);


}//FIN DE LA FUNCIÓN