/*1- Desarrolla un programa en JavaScript que permita al usuario ingresar 10
nombres de estudiantes y los almacene en un arreglo. Luego, ordena los
nombres alfabéticamente utilizando el método sort y muestra la lista ordenada en
la consola.
2- Crear un arreglo que permita cargar 15 números y los ordene de menor a mayor.
3- Crear un arreglo que permita cargar 10 números en forma aleatoria y los ordene
de menor a mayor.
*/
//1
var estudiantes = [];
for (i = 0; i < 10; i++) {
    let nombre = prompt("Ingrese el nombre del estudiante n°" + (i + 1));
    estudiantes.push(nombre);
}
console.log(estudiantes.sort());
//2
var arreglo2 = [];
for (i = 0; i < 15; i++) {
    let numero = parseFloat(prompt("Ingrese un numero"));
    arreglo2.push(numero);
}
console.log(arreglo2.sort((a, b) => a - b));
//3
var arreglo3 = [];
for (i = 0; i < 10; i++) {
    arreglo3[i] = Math.floor(Math.random() * 100);
}
console.log(arreglo3.sort((a, b) => a - b));
