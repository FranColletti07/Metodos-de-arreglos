/* Cargar arreglos */
// var arreglo=["Te","Cafe","Yerba","Azucar"];
// for(let i=0;i<arreglo.length;i++){
//     document.write(arreglo[i] + " ");
// }
// var arreglo=[];
// for(let i=0;i<5;i++){
//     arreglo[i]=prompt("Ingrese el nombre n°" + (i+1));
// }
// document.write(arreglo.join(" "));
// var arregloFloat=[];
// for(let i=0;i<5;i++){
//     arregloFloat[i]=parseFloat(prompt("Ingrese el decimal n°" + (i+1)));
// }
// document.write(arregloFloat.join(" "));
// var arregloInt=[];
// for(let i=0;i<5;i++){
//     arregloInt[i]=parseFloat(prompt("Ingrese el entero n°" + (i+1)));
// }
// document.write(arregloInt.join(" "));
var arregloUtiles=["lapiz", "tijera", "marcador", "regla", "ayuda", "corrector"];
document.write(arregloUtiles.join("<br>"));
//agrego un elemento al principio del arreglo
arregloUtiles.unshift("Hoja A4");
document.write("<br> ------------------------------------------------------------------- <br>");
document.write(arregloUtiles.join("<br>"));
//agrego un elemento al fin del arreglo
arregloUtiles.push("sacapuntas");
document.write("<br> ------------------------------------------------------------------- <br>");
document.write(arregloUtiles.join("<br>"));
//elimino un elemento al final del arreglo
arregloUtiles.pop();
document.write("<br> ------------------------------------------------------------------- <br>");
document.write(arregloUtiles.join("<br>"));
//elimino un elemento al principio del arreglo
arregloUtiles.shift();
document.write("<br> ------------------------------------------------------------------- <br>");
document.write(arregloUtiles.join("<br>"));