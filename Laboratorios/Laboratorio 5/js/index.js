//ejercicio 1
var arreglox = new Array(1, 2, 3, "hi", true);

function ejercicio1(arreglo) {
  var booleano = 0;
  var numero = 0;
  var string = 0;
  var otro = 0;
  for (var i = 0; i < arreglo.length; i++) {
    //console.log(typeof arreglo[i])
    if (typeof arreglo[i] === "Boolean") booleano = booleano + 1;
    if (typeof arreglo[i] === "Number") numero = numero + 1;
    if (typeof arreglo[i] === "String") string = string + 1;
    else otro = otro + 1;
  }
  console.log(
    "booleano = " +
      booleano +
      "numero =" +
      numero +
      "string = " +
      string +
      "otro =" +
      otro
  );
}

//ejercicio 2
var arreglo2 = new Array(1, 2, 3);
function ejercicio2(arreglo) {
  var suma = 0;
  var promedio = 0;

  for (var i = 0; i < arreglo.length; i++) {
    suma = arreglo[i] + suma;
  }
  console.log(suma);
  promedio = suma / arreglo.length;
  console.log(promedio);
}

//ejercicio 3
var arreglo3 = new Array("a", "b", "a", "c", "a", "d");
function ejercicio3(valor, arreglo) {
  var ocurrencias = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == valor) ocurrencias = ocurrencias + 1;
  }
  console.log(ocurrencias);
}

//ejercicio 4
function ejercicio4(numero) {
  valores = [];
  var numero_aleatorio;

  for (var i = 0; i < 20; i++) {
    numero_aleatorio = Math.floor(Math.random() * 100) + 1;
    valores.push(numero_aleatorio);
  }
  for (var j = 0; j < 20; j++) {
    if (numero === valores[j]) {
      console.log("ganaste");
    } else {
      console.log("perdiste");
    }
  }
  return valores;
}

//ejercicio 5

function ejercicio5(palabra) {
  var alreves = "";

  alreves = palabra
    .split("")
    .reverse()
    .toString();

  for (var i = 0; i < alreves.length - 1; i++) {
    alreves = alreves.replace(",", "");
  }

  if (palabra == alreves) {
    resultado = "es  Palindromo";
  } else {
    resultado = "no es Palindromo";
  }

  console.log(resultado);
}

//ejercicio 6
var arreglo6 = [4, 2, 5, 1, 3];

function ejercicio6(arreglo) {
  arreglo.sort(function(a, b) {
    return a - b;
  });
  console.log(arreglo);
}

//ejercicio 7
function ejercicio7(n) {
  var a = 0;
  var b = 1;

  for (i = 0; i < n; i++) {
    var primero = a;
    a = b;
    b = primero + b;

    console.log(a + " ");
  }
}

//ejercicio 8

function ejercicio8(n) {
  alert(n.toString(2));
}
