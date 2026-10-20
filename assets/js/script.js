// const numero = 8465;
// const character = "texto cualquiera";
// const booleano = true;
// const arreglo = [1, false, "hola", 3.14, [""], {}];
// const objeto = {
//   forma: "circular",
//   color: "dorado",
//   numero,
//   arreglo,
//   booleano,
// };

// console.log(objeto);
// console.log(arreglo);

//Variables
const lista = ["Lola", "Javier", "Maria", "Juan"];

//Variables de etiquetas
const nombre = document.getElementById("nombre");
const numero = document.getElementById("contador");
const btn_contador = document.getElementById("contar");

btn_contador.addEventListener("click", () => {
  let contador = parseInt(numero.textContent);
  nombre.textContent = lista[contador];
  if (contador >= 3) {
    contador = 0;
  } else {
    contador++;
  }
  numero.textContent = contador;

  switch (nombre.textContent) {
    case "Lola":
      console.log("Es hijo de Sonia");
      break;
    case "Javier":
      console.log("Es hijo de Vicenta");
      break;
    case " Maria":
      console.log("Es hijo de Pepa");
    case "Juan":
      console.log("Es hijo de Olga");
    default:
      console.log("Es huerfano");
  }
});

//Manejo de characteres

const palabra = document.getElementById("palabra");

palabra.textContent += "mundo";

const firstP = palabra.textContent;

console.log(firstP);
