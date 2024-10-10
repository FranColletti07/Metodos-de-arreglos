/*1- Crear un objeto literal que contenga datos de un álbum de temas de un artista musical.
Utilizar método get para mostrar los valores prioritarios. Luego por medio del método
set modifica los valores de algunas propiedades e imprime nuevamente los datos
actualizados.
2- Crear un objeto literal con datos de un jugador de fútbol de la selección argentina.
Utilizar método get para mostrar los datos relevantes. Luego aplica el método set para
calcular cuántos años tendrá dicho jugador en el año 2027.
3- Modifique el punto número tres del TP 7 para realizar la impresión de datos utilizando
GET y SET para la definición y utilización de métodos.*/
//Actividad 1
var album1 = {
    titulo: "Bicicleta",
    artistaMusical: "Serú Girán",
    añoPublicación: 1980,
    _numeroDeTemas: "8",
    nombresDeTemas: ["A los jovenes de ayer", "Cuanto tiempo mas llevara", "Cancion de Alicia en el pais", "La luna de Marzo", "Mientras miro las nuevas olas", "Desarma y Sangra", "Tema de Nayla", "Encuentro con el Diablo"],
    get numeroDeTemas() {
        return this._numeroDeTemas
    },
    set numeroDeTemas(nuevoNumeroDeTemas) {
        this._numeroDeTemas = nuevoNumeroDeTemas;
    }
}
console.log(album1.numeroDeTemas);
album1.numeroDeTemas = 9;
console.log(album1.numeroDeTemas);
//Actividad 2
var jugador1 = {
    nombre: "Lautaro",
    apellido: "Martínez",
    _edad: 28,
    posicion: "Delantero",
    get edad() {
        return this._edad;
    },
    set edad(nuevaEdad) {
        this._edad = nuevaEdad
    }
}
console.log(jugador1.edad);
jugador1.edad = jugador1.edad + 3;
console.log(jugador1.edad);
//Actividad 3
const libro1 = {
    titulo: "Operacion Masacre",
    autor: "Rodolfo Walsh",
    añoPublicacion: "1968",
    genero: "policial",
    _disponible: true,
    get disponible() {
        return this._disponible;
    },
    set disponible(nuevoDisponible) {
        this._disponible = nuevoDisponible;
    },
    mostrarInfo(){
        return console.log(`Titulo:${this.titulo}, Autor:${this.autor}, Año de Publicación:${this.añoPublicacion}, Genero:${this.genero}, Disponible:${this._disponible}`)
    }
}
libro1.mostrarInfo();
console.log(libro1.disponible);
libro1.disponible = false;
console.log(libro1.disponible);
libro1.mostrarInfo();