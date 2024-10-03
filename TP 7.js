/*
Crear un objeto literal que represente a una persona con las siguientes propiedades:
nombre, edad y profesión. Añade un método que imprima un saludo utilizando las
propiedades del objeto.
2. Crear un objeto que represente un coche con propiedades como marca, modelo y año.
Asignar un método que imprima la información del coche y otro método que actualice
las propiedades del objeto.
3. Crear un objeto que represente un libro, incluyendo propiedades y métodos.
El objeto debe tener las siguientes propiedades:
Definición del objeto:
 titulo: El título del libro.
 autor: El nombre del autor del libro.
 añoPublicacion: El año en que se publicó el libro.
 genero: El género literario del libro.
 disponible: Indica si el libro está disponible para préstamo.
Añade un método llamado mostrarInfo, que imprima en la consola la
información completa del libro.
 Añade un método llamado prestar que cambie el estado de la propiedad
disponible a false y muestre un mensaje indicando que el libro ha sido
prestado.
 Añade un método llamado devolver que cambie el estado de la
propiedad disponible a true y muestre un mensaje indicando que el
libro ha sido devuelto.
4) Crear un objeto literal que represente a un empleado
Definición de objeto:
 nombre: El nombre del empleado.
 edad: La edad del empleado.
 puesto: El puesto de trabajo del empleado.
 salario: El salario mensual del empleado.
Métodos del objeto:
Añade un método llamado mostrarInfo que imprima en la consola la información
completa del empleado.
Añade un método llamado aumentarSalario que reciba un porcentaje como parámetro
y aumente el salario del empleado en ese procentaje. Luego, muestre un mensaje
indicando el nuevo salario.
 */
//Actividad 1
const persona1 = {
    nombre:"Raúl",
    edad:25,
    profesión:"carpintero",
    saludo(){
        return console.log(`Buenos Dias, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesión}`)
    }
}
persona1.saludo()
//Actividad 2
const auto1 = {
    marca:"Fiat",
    modelo:"Polo",
    año:2024,
    imprimirInfo(){
        return console.log(`marca: ${this.marca} modelo:${this.modelo} año:${this.año}`)
    },
    actualizarPropiedades(){
        return this.marca="Toyota", this.modelo="Corolla", this.año="2018";
    }
}
auto1.imprimirInfo()
auto1.actualizarPropiedades()
auto1.imprimirInfo()
//Actividad 3
const libro1 = {
    titulo:"Operacion Masacre",
    autor:"Rodolfo Walsh",
    añoPublicacion:"1968",
    genero:"policial",
    disponible:true,
    mostrarInfo(){
        return console.log(`Titulo:${this.titulo}, Autor:${this.autor}, Año de Publicación:${this.añoPublicacion}, Genero${this.genero}, Disponible:${this.disponible}`)
    },
    prestar(){
        return this.disponible=false, console.log("El libro ha sido prestado");
    },
    devolver(){
        return this.disponible=true, console.log("El libro ha sido devuelto");
    }
}
libro1.mostrarInfo()
libro1.prestar()
libro1.mostrarInfo()
libro1.devolver()
libro1.mostrarInfo()
//Actividad 4
const empleado1 = {
    nombre:"Angelo Flores",
    edad:18,
    puesto:"Secretario",
    salario:1000,
    mostrarInfo(){
        return console.log(`Nombre:${this.nombre} Edad: ${this.edad} Puesto: ${this.puesto} Salario:${this.salario}`)
    },
    aumentarsalario(porcentaje){
        porcentaje=55;
        return this.salario=this.salario + ((this.salario*55)/100)
    }
}
empleado1.mostrarInfo()
empleado1.aumentarsalario()
empleado1.mostrarInfo()