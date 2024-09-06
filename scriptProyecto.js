/*Selector Individual: get elementById("")
1° Paso: seleccionamos mediante el método y luego guardamos en una variable
*/
/*2° Paso: Mencionar a la variable y luego asignar un nuevo valor al elemento; 
utilizando innerHTML*/
var botonPulsado1 = document.getElementById("funcionEscribir");
var seleccionParrafo2 = document.getElementById("parrafo2");
var arregloSort = ["Jorge", "Lautaro", "Camila", "Estela", "Carlos"];
var seleccionParrafo3 = document.getElementById("parrafo3");
var arreglosNombres = ["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel","Elena", "Raúl"];
var listado = arreglosNombres.map(arreglosNombres => ("5°4°: " + arreglosNombres));
var seleccionParrafo4 = document.getElementById("parrafo4");
var seleccionParrafo5 = document.getElementById("parrafo5");
seleccionParrafo2.innerHTML=`${arregloSort.join(" - ")}`;
function funcionEscribir(){
    seleccionParrafo3.innerHTML=`${arregloSort.sort().join(" - ")}`;
    seleccionParrafo5.innerHTML=`${listado.join(" - ")}`;
}
function funcionPintar(){
    document.getElementById("parrafo1").style.background='#43ff5d';
    document.getElementById("parrafo2").style.background='#43ff5d';
    document.getElementById("parrafo3").style.background='#43ff5d';
    document.getElementById("parrafo4").style.background='#43ff5d';
    document.getElementById("parrafo5").style.background='#43ff5d';
}
seleccionParrafo4.innerHTML=`${arreglosNombres.join(" - ")}`;
