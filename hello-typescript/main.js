var minhaVar = 'minha viriável'; //var em JS puro
function minhaFunction(x, y) {
    return x + y;
}
console.log(minhaFunction(10, 15));
//ES6 OU ES 2015
var num = 5;
var pi = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//Arrow functions
numeros.map(function (valor) { return valor * 2; });
