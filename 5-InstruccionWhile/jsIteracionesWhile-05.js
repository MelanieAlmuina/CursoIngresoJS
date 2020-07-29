/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese femenino ó masculino .");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{	
		alert("A ingresado un término incorrecto.");
		sexoIngresado= prompt("ingrese f ó m .");
		
	}
	alert("Su sexo es "+sexoIngresado);
	txtIdSexo.value=sexoIngresado;

}//FIN DE LA FUNCIÓN