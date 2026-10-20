//Ejercicio 1
const mi_nombre = "Irene";
const edad = 34;
const carnet_conducir = true;

//Ejercicio 2
const gastos_mes = [20, 46, 18];

//Ejercicio 3
const personaje = {
  alias: "Bruna",
  nivel: 19,
  vidas: 3,
};

//Ejercicio 4
const base = 12;
const altura = 23;

const Area = base * altura;

//Ejercicio 5

const Mi_total = 350;
const Mi_parte = 350 / 2;
console.log(Mi_parte);

// Ejercicio 6
const temperatura = 25;

if (temperatura > 30) {
  console.log("Hace calor");
} else {
  console.log("Clima agradable");
}

//Ejercicio 7

const peaje = true;

if (peaje == true) {
  console.log("Pagas 5 dolares");
} else {
  console.log("Pagas 10 dolares");
}

//Ejercicio 8

const dinero = 80;
let gasto = 20;
let regalo = 10;

if (dinero > 100) {
  console.log(dinero - gasto);
} else {
  console.log(dinero + regalo);
}

//Ejercicio 9
const edad_actual = 12;
const va_acompanado = true;

if ((edad_actual <= 12) & (va_acompanado != true)) {
  console.log("Lo siento, no puedes montar");
}
if ((edad_actual <= 12) & (va_acompanado == true)) {
  console.log("Apto para montar acompanado");
} else {
  ("No necesitas acompanante para montar");
}

//Ejercicio 10
const nota = 9;

if (nota >= 8) {
  console.log("Notable");
}
if ((nota < 7) & (nota > 5)) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

//Ejercicio 11
const sum_gastos = gastos_mes[0] + gastos_mes[2];
console.log(sum_gastos);

//Ejercicio 12
const add_vida = personaje.vidas + 50;
console.log(add_vida);

//Ejercicio 13
let num_arr = [4, 7, 9];

num_arr[1] = num_arr[1] * 2;

console.log(num_arr);

//Ejercicio 14
const coche = {
  Marca: "Mercedes-Benz",
  Year: 2023,
  motor: {
    Caballos: 150,
    Es_electrico: true,
  },
};

//Ejercicio 15
const bro_age = [19, 27];
if (bro_age[0] > bro_age[1]) {
  console.log("Soy mayor");
} else {
  console.log("Mi hermano es mayor");
}

//******  Ejercicios Grupo B ******

//Ejercicio 1
const pin = 2873;
const caja_abierta = false;

//Ejercicio 2
const notas = [6, 3, 8, 10];

//Ejercicio 3
const producto = {
  Name: "Harry",
  Price: 27,
  En_stock: true,
};

//Ejercicio 4
const ano_nacimiento = 1991;
const ano_actual = 2026;

const anos_pasados = ano_nacimiento - ano_actual;
console.log(anos_pasados);

//Ejercicio 5
const cajon_sastre = ["Lorena", 36, false];

//Ejercicio 6
const dia = 5;

switch (dia) {
  case "1":
    console.log("Es Lunes");
    break;
  case "2":
    console.log("Es Martes");
    break;
  case "3":
    console.log("Es Miercoles");
    break;
  case "4":
    console.log("Es Jueves");
    break;
  case "5":
    console.log("Es Viernes");
    break;
  case "6":
    console.log("Es Sabado");
    break;
  case "7":
    console.log("Es Domingo");
}

//Ejercicio 7
const operacion = "suma";
const numero1 = 10;
const numero2 = 5;

switch (operacion) {
  case "suma":
    console.log(numero1 + numero2);
    break;

  case "resta":
    console.log(numero1 - numero2);
    break;

  default:
    console.log("Operación no válida");
}

//Ejercicio 8
if (producto.Price >= 100) {
  producto.Price - 15;
} else {
  producto.Price + 5;
}

//Ejercicio 9
const piso = 3;

if (piso < 0) {
  console.log("Estas en el sotano");
}
if (piso == 0) {
  console.log("Planta baja");
} else {
  console.log("Pisos superiores");
}

//Ejercicio 10
const option = "B";

switch (option) {
  case "A":
    console.log("Iniciando");
    break;
  case "B":
    console.log("Cargando");
    break;
  default:
    console.log("Opcion no valida");
}

//Ejercicio 11
const res_notas = notas[0] + notas[3];
console.log(res_notas);

//Ejercicio 12

producto.En_stock = false;
console.log(producto);

//Ejercicio 13
const array1 = [10, 20];

const multi = array1[0] * array1[1];
console.log(multi);

//Ejercicio 14
const ajustes = {
  Volumen: 16,
  Controles: [1, 2],
};

//Ejercicio 15
const edades = [10, 25, 40];

const dif_edades = edades[1] - edades[0];
console.log(dif_edades);
