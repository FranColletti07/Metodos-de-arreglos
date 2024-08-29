/*Un empleado de un supermercado es el encargado de ajustar los precios de los productos en
una tienda. Tiene un arreglo con los precios actuales de los productos y necesita aplicar un
aumento del 15% a todos los precios. Luego, de obtener los nuevos valores por medio del
método MAP, filtrar los precios según diferentes criterios utilizando el método filter.*/
var precios = [150, 200, 450, 500, 650, 1000, 240, 220, 300, 210, 310, 320, 230];
var aumento = precios.map(precios => (((precios*15)/100) + precios));
//a. Recorrer el arreglo de precios y aplicar un aumento del 15%:
document.write("Precios con aumento del %15: " + aumento.join(" - "));
//b. Filtrar los precios que sean iguales a 230:
var b = precios.filter(ActB => ActB==230);
console.log(b);
//c. Filtrar los precios comprendidos entre 300 y 500:
var c = precios.filter(ActC => ActC>=300 && ActC<500);
console.log(c);
//d. Filtrar los precios mayores a 400:
var d = precios.filter(ActD => ActD>=400);
console.log(d);
//e. Filtrar los precios menores a 200:
var e = precios.filter(ActE => ActE<200);
console.log(e);
//f. Filtrar los precios distintos a 345:
var f = precios.filter(ActF => ActF!=345);
console.log(f);
//g. Filtrar los precios que no sean 460:
var g = precios.filter(ActG => ActG!=460);
console.log(g);
//h. Filtrar los precios con operador lógico O (mayores a 500 o menores a 200):
var h = precios.filter(ActH => ActH>500 || ActH<200);
console.log(h);
//i. Filtrar categorías de productos (por ejemplo, precios iguales a 345): 
var i = precios.filter(ActI => ActI==345);
console.log(i);