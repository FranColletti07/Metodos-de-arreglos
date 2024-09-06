/* Consignas:
1) Dado un arreglo de notas de un alumno, utiliza el método reduce para calcular la
suma total de las notas y el promedio
2) Calcular el monto a pagar de una compra de componentes de una PC, teniendo
en cuenta que los valores se encuentran guardados en un arreglo de precios. 
3) Cargar la suma total de bolsas de manzanas por kg.
4) En este ejercicio, deberás calcular el total de ingresos mensuales a partir de un
arreglo que contenga los ingresos diarios. Utiliza el método reduce para sumar
todos los ingresos diarios y obtener el total mensual.
5) En una estación de servicios se necesita llevar un registro diario de los litros de
combustible que se ingresan en el tanque de almacenamiento. Utiliza el método
reduce y escribe un programa que calcule el total de combustible ingresado
durante una semana.
*/
var notas=[7.5, 8.5, 9.5, 6.5, 10];
var suma = notas.reduce( (acumulador, nota) => acumulador + nota, 0);
var promedio = suma/notas.length;
document.write("Actividad 1: <br>"); 
document.write("La suma de todas las notas da como resultado: " + suma + "<br>");
document.write("El promedio de todas las notas es de " + promedio + "<br>");
//=============================================================================
document.write("Actividad 2: <br>"); 
var preciosPC=[150548, 100147, 51254, 255500.45, 35.45, 78.8];
var totalPC = preciosPC.reduce((acumulador, precio) => (acumulador + precio));
document.write("En total deberá pagar: $" + totalPC + " por todos los componentes de la PC. <br>");
//=============================================================================
document.write("Actividad 3: <br>"); 
var preciosManzana = [3.34568, 2.45678, 4.8765, 1.548, 3.78, 7.74];
var totalManzana = preciosManzana.reduce((acumulador, precio)=> acumulador + precio);
document.write("La suma de todas las bolsas de manzanas da como resultado " + totalManzana.toFixed(2) +" kg <br>");
//=============================================================================
document.write("Actividad 4: <br>"); 
var ingresosDiarios = [10000, 15000, 17500, 20000, 25000];
var ingresosMensuales = ingresosDiarios.reduce((acumulador, ingresoDiario)=>(acumulador+ingresoDiario));
document.write("Los ingresos mensuales son de $" + ingresosMensuales +"<br>");
//=============================================================================
document.write("Actividad 5: <br>"); 
var litrosDiarios = [1200, 2500, 1500, 2544, 2846, 3521];
var litrosSemanales = litrosDiarios.reduce((acumulador, litros) => (acumulador + litros));
document.write("Durante una semana ingresaron " + litrosSemanales +" litros");