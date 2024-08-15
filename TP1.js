/*1- Cargar un arreglo con diez estaturas de personas.
a. Agregar una estatura en la última posición.
b. Mostrar el arreglo, con el nuevo valor asignado
2- Cargar un arreglo que permita cargar a cinco jugadores de la selección.
a. Agregar un jugador en la primera posición.
b. Mostrar el arreglo, con el nuevo valor asignado.
3- Eliminar el último elemento del segundo arreglo.
4- Eliminar los tres últimos elementos del primer arreglo
5- Cargar un arreglo con las edades de una cantidad N de personas. Luego eliminar las
primeras cinco.
6-Desarrolla un programa que permita al usuario ingresar nombres de frutas y clasificarlas
en dos categorías: frutas cítricas y frutas con pepitas. El programa debe solicitar al usuario
que ingrese el nombre de una fruta y su tipo (cítrico o pepita) cinco veces. Dependiendo
del tipo de fruta ingresada, el programa debe agregar la fruta a la lista correspondiente
utilizando diferentes métodos de array. Finalmente, el programa debe mostrar las frutas
clasificadas en cada categoría.
*/ 
//1
var estaturas=[190, 186, 178, 179, 170, 158, 180, 175, 176, 168];
estaturas.push(201);
document.write(estaturas.join("<br>"));
document.write("<br>-------------------------------------------------------------------------------- <br>");
//2
var jugadores=[];
for(let i=0;i<5;i++){
    jugadores[i] = prompt("Ingese el nombre de 5 jugadores");
}
jugadores.unshift("Julian Alvarez");
document.write(jugadores.join("<br>"));
document.write("<br>-------------------------------------------------------------------------------- <br>");
//3
jugadores.pop();
document.write(jugadores.join("<br>"));
document.write("<br>-------------------------------------------------------------------------------- <br>");
//4
for(let i=0;i<3;i++){
    estaturas.pop();
}
document.write(estaturas.join("<br>"));
document.write("<br>-------------------------------------------------------------------------------- <br>");
//5
var edades=[];
var n = parseInt(prompt("Ingrese el numero de personas"));
for(let i=0;i<n;i++){
    edades[i]=parseInt(prompt("Ingrese la edad de la persona n°" + (i+1)));
}
for(let i=0;i<5;i++){
edades.shift();
}
document.write(edades.join("<br>"));
//6
document.write("<br>-------------------------------------------------------------------------------- <br>");
var citrico=[];
var pepita=[];
for(i=0;i<5;i++){
    let fruta = prompt("Ingrese el nombre de la fruta");
    let tipo = parseInt(prompt("Ingrese 1 si la futa es de tipo citrica y 2 si es del tipo pepita"))
    if(tipo==1){
    citrico.push(fruta);
} else if(tipo==2){
    pepita.push(fruta);
} else{
    alert("Intentelo de nuevo");
    i--;
}
}
document.write("Frutas citricas: " + citrico.join(", ") + "<br>");
document.write("Frutas pepitas: " + pepita.join(", ") + "<br>");