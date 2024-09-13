/*1) Cargar un arreglo de números desde 1 a 10. Luego recorrer el arreglo mediante el método
forEach, para luego obtener la tabla de multiplicar del número siete.
2) Modifique el ejercicio anterior para que podamos obtener la tabla de multiplicar de cualquier
valor ingresado. Utilice un título de nivel tres para imprimir: “Tabla del N°: x”
3) Anexar el prefijo Gerente. a un arreglo con cuatro nombres de personas.
4) En un arreglo se ha almacenado las edades de un grupo de personas. Utiliza el método forEach
para averiguar cuántos años tenían cada una de ellas seis años atrás.
5) Mencionar la diferencia entre map y forEach.*/

//Actividad 1: 
const arreglo1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arreglo1.forEach(num => document.write(`7 * ${num} = ${num * 7} <br>`));
//Actividad 2: 
const arreglo2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tabla = parseInt(prompt("Ingrese el número del que quiera obtener la tabla"));
var seleccionTitulo = document.getElementById("titulo");
document.write(`<h4>Tabla del N°: ${tabla}</h4>`);
arreglo2.forEach(numero => document.write(`${tabla} * ${numero} = ${numero * tabla} <br>`));
//Actividad 3: 
var arreglo3 = ["Carlos", "Nicole", "Lisandro", "Angelo"];
arreglo3.forEach(nombre => document.write(`Gerente ${nombre} <br>`));
//Actividad 4: 
var arreglo4 = [20, 40, 36, 38, 24, 20, 18, 33];
arreglo4.forEach(edad => document.write(`Edad hace 6 años: ${edad - 6} <br>`));
//Actividad 5: 
document.write("La principal diferencia entre el metodo map y el forEach es que el map crea un nuevo arreglo mientras que el forEach solo realiza una iteración.")