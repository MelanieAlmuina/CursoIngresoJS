//Almuina - Ejercicio 4 Ferrete Illuminación.
//Ambos funcionan.

//                                                    INTENTO REDUCIDO
function CalcularPrecio ()
{
	var cantidadDeLamparas;
	var marcaDeLamparas;
	var precioBruto;
	var descuento;
	var precioConDescuento
	var impuesto= 0;
	var precioMasImpuesto;
	var precioTotal;
	var precioFinal;

//Variables

	cantidadDeLamparas=txtIdCantidad.value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);

    marcaDeLamparas=Marca.value;

    precioBruto= cantidadDeLamparas*35;

    descuento=0;

    switch(marcaDeLamparas)
    {	
    	case"ArgentinaLuz":

    		switch(cantidadDeLamparas)
    		{

    			case 5: 
    				descuento=40;
    				break;

    			case 4:
    				descuento=25;
    				break;

    			case 3:
    				descuento=15;
    				break;
    		}

    		break;

    	case"FelipeLamparas":

    	 	switch(cantidadDeLamparas)
    	 	{
    	 		case 4:
    	 			descuento=25;
    	 			break;
    	 		case 3:
    	 			descuento=10;
    	 			break;

    	 	}
    	 	break;

    }
  		
  	if(cantidadDeLamparas>5)
	{ 
		descuento=50;
	}
			

			precioConDescuento=precioBruto*descuento/100;
			precioFinal = precioBruto - precioConDescuento;

	if(precioFinal>120)
	{
		impuesto=precioFinal*10/100;
		precioMasImpuesto= precioFinal+impuesto;

		alert( "Usted pagó " + impuesto +"$ de IIBB.");
		
		txtIdprecioDescuento.value=precioMasImpuesto;
	}
		
        txtIdprecioDescuento.value=precioFinal;

}











/*
	var cantidadDeLamparas
	var marcaDeLamparas
	var precioBruto
	var precioTotalSinDescuento
	var descuento
	var precioConDescuento
	var impuesto
	var precioMasImpuesto
	var precioTotal


//Variables

	cantidadDeLamparas=txtIdCantidad.value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);

    marcaDeLamparas=Marca.value;

    precioBruto= 35;

    precioTotalSinDescuento=precioBruto*cantidadDeLamparas;

    descuento=0;

//IF

	if(cantidadDeLamparas>5)
	{ 
		descuento=50;
	}
		else
		{

			if(cantidadDeLamparas==5)
 			{     
 		 		if( marcaDeLamparas=="ArgentinaLuz")
				{
					descuento=40;
				}else
				{
					descuento=30;
				}	
			}
	}

	if(cantidadDeLamparas==4)
	{
		if(marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="“FelipeLamparas”")
		{	
			descuento=25;
		}else
		{
			descuento=20;
		}
	}

	if(cantidadDeLamparas==3)
	{
		if(marcaDeLamparas=="ArgentinaLuz")
		{	
			descuento=15;
		}

		if(marcaDeLamparas=="“FelipeLamparas”")
			{
				descuento=10;
		}else
		{	
				descuento=5;			
		}	
	}
	else
	{	
	}
//Precio Final
	
		precioConDescuento=precioTotalSinDescuento-(precioTotalSinDescuento*descuento/100)
		

		if(precioConDescuento>120)
		{
		
		impuesto=precioConDescuento*10/100;
		precioMasImpuesto= precioConDescuento+impuesto;
		precioTotal=precioMasImpuesto;

		alert( "Usted pagó " + precioTotal +"$ de IIBB., siendo "+impuesto+"$ el impuesto que se pagó.");
		
		txtIdprecioDescuento.value=precioTotal;

		}else
		{
          txtIdprecioDescuento.value=precioConDescuento;  
		}

}

/*                                                  INTENTO SIN REDUCIR
{ 
	var cantidadDeLamparas
	var marcaDeLamparas
	var precioBruto
	var precioTotalSinDescuento
	var descuento
	var precioConDescuento
	var impuesto
	var precioMasImpuesto
	var precioTotal


//Variables
	cantidadDeLamparas=txtIdCantidad.value
    cantidadDeLamparas=parseInt(cantidadDeLamparas)

    marcaDeLamparas=Marca.value

    precioBruto= 35

    precioConDescuento=txtIdprecioDescuento.value

    descuento=0
//IF

	if(cantidadDeLamparas>5)
	{ 
		precioTotalSinDescuento=cantidadDeLamparas*precioBruto
		descuento=precioTotalSinDescuento*50/100
		precioConDescuento=precioTotalSinDescuento-descuento

	}

	if(cantidadDeLamparas==5)
 	{     
 		 if( marcaDeLamparas=="ArgentinaLuz")
		{
			precioTotalSinDescuento=cantidadDeLamparas*precioBruto
			descuento=precioTotalSinDescuento*40/100
			precioConDescuento=precioTotalSinDescuento-descuento
		}
		else
		{
				precioTotalSinDescuento=cantidadDeLamparas*precioBruto
				descuento=precioTotalSinDescuento*30/100
				precioConDescuento=precioTotalSinDescuento-descuento
		}
			
	}
	if(cantidadDeLamparas==4)
	{
		if(marcaDeLamparas=="ArgentinaLuz" || marcaDeLamparas=="“FelipeLamparas”")
		{	
			precioTotalSinDescuento=cantidadDeLamparas*precioBruto
			descuento=precioTotalSinDescuento*25/100
			precioConDescuento=precioTotalSinDescuento-descuento
		}
		else
		{
			precioTotalSinDescuento=cantidadDeLamparas*precioBruto
			descuento=precioTotalSinDescuento*20/100
			precioConDescuento=precioTotalSinDescuento-descuento
		}

	}

	if(cantidadDeLamparas==3)
	{
		if(marcaDeLamparas=="ArgentinaLuz")
		{	
			precioTotalSinDescuento=cantidadDeLamparas*precioBruto
			descuento=precioTotalSinDescuento*15/100
			precioConDescuento=precioTotalSinDescuento-descuento
		}
		if(marcaDeLamparas=="“FelipeLamparas”")
		{
			precioTotalSinDescuento=cantidadDeLamparas*precioBruto
			descuento=precioTotalSinDescuento*10/100
			precioConDescuento=precioTotalSinDescuento-descuento
		}

		else
		{
			precioTotalSinDescuento=cantidadDeLamparas*precioBruto
			descuento=precioTotalSinDescuento*5/100
			precioConDescuento=precioTotalSinDescuento-descuento
		}

	}
	if(cantidadDeLamparas<3)
	{ 
		precioTotalSinDescuento=cantidadDeLamparas*precioBruto
		precioConDescuento=precioTotalSinDescuento
	}
		
		if(precioConDescuento>120)
		{
		impuesto=precioConDescuento*10/100
		precioMasImpuesto= precioConDescuento+impuesto
		precioTotal=precioMasImpuesto

		alert( "Usted pagó" + precioTotal +"$ de IIBB., siendo"+impuesto+"$ el impuesto que se pagó.")
		txtIdprecioDescuento.value=precioTotal
		}
		else
		{
          txtIdprecioDescuento.value=precioConDescuento  
		}
}*/
	

 	 

