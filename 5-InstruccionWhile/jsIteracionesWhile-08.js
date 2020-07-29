/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numerosIngresados
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta ='si';

	while(respuesta=="si")
	{	
		numerosIngresados=prompt("Ingrese un número");
		numerosIngresados=parseInt(numerosIngresados);

		if(numerosIngresados>-1)
		{
			sumaPositivos=sumaPositivos+numerosIngresados;
		}else
		{ 
			if(numerosIngresados<0)
			{
				multiplicacionNegativos=multiplicacionNegativos*numerosIngresados;
			}
		}

		respuesta=prompt("¿Quiere seguir si o no?"); //vuelve a validar el nuevo valor de respuesta con el que ya estaba

	}
		

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN