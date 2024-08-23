/*1. Dado el siguiente listado de nombres de alumnos y el curso al cual pertenecen,
utiliza el método map de los arreglos en JavaScript para agregar el nombre del 
curso antes de cada nombre de alumno. 
Asegúrate de que el resultado final sea un nuevo arreglo con los nombres actualizados.
"Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel","Elena",“Raúl”
2. Dado el siguiente listado de notas de 12 alumnos, utiliza el método map de los 
arreglos en JavaScript para sumar 2.50 puntos a cada una de las notas.
Asegúrate de que el resultado final sea un nuevo arreglo con las notas actualizadas.
7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5, 6.0, 7.8, 8.2, 6.9, 7.3
3. Crea un arreglo de 10 números aleatorios utilizando la función Math.random(). Luego,
utiliza el método map y la función Math.pow para obtener el cubo de todos los valores
en el arreglo. Asegúrate de que el resultado final sea un nuevo arreglo con los valores
elevados al cubo.
4. Crea un arreglo con 15 precios de productos. Luego, utiliza el método map de los
arreglos en JavaScript para calcular un aumento del 10% para cada uno de los precios.
Asegúrate de que el resultado final sea un nuevo arreglo con los precios actualizados */
//1
var nombres = ["Juan", "María", "Lucía", "Carlos", "Ana", "Luis", "Sofía", "Miguel","Elena", "Raúl"]
var listado = nombres.map(nombres => ("5°4°: " + nombres));
document.write(listado.join(" <br> "));
document.write("<br> ========================================================================================== <br>");
//2
var alumnos = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5, 6.0, 7.8, 8.2, 6.9, 7.3]
var notasActualizadas = alumnos.map(alumnos => (alumnos + 2.5));
document.write(notasActualizadas.join(" - "));
document.write("<br> ========================================================================================== <br>");
//3
var aleatorio = [];
for (i = 0; i < 10; i++) {
    aleatorio[i] = Math.floor(Math.random() * 10);
}
var cubo = aleatorio.map(aleatorio => Math.pow(aleatorio, 3));
document.write(cubo.join("<br>"));
document.write("<br> ========================================================================================== <br>");
//4
var productos = [150, 200, 250, 300, 100, 1000, 2000, 2500, 3000, 110, 330, 440, 650, 10000, 15000];
var aumento = productos.map(productos => (((productos*10)/100) + productos));
document.write(aumento.join("<br>"));