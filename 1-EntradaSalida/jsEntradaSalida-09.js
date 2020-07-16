/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 
  var sueldo;
  var porcentaje;
  var resultado;

  sueldo = txtIdSueldo.value;
  sueldo = parseInt (sueldo);

  porcentaje = sueldo*10/100 ;

  resultado = txtIdResultado.value;
  resultado = sueldo + porcentaje; 

  txtIdResultado.value = resultado;

/*                 FORMA DEL PROFE
   var importeIngresado
   var aumento
   var importeConAumento

   importeIngresado= twxIdSueldo.value
   importeIngresado=paseInt (importeIngresado)

   aumento=importeIngresado*10/100

   importeConAumento = importeIntresado + aumento

   txrIdResultado.value= importeConAumento

                PORCENTAJE DINÁMICO
   porcentaje = prompt("Ingrese Porcentaje")
   porcentaje = parseInt (porcentaje)


*/
}
