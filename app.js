//Perímetro de un rectángulo

//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

const altura = Number(prompt("Por favor ingresa el valor de la altura del rectángulo"));
const ancho = Number(prompt("Por favor ingresa el valor del ancho del rectángulo"));

//alert("El perímetro del rectángulo es: " + (2 * altura + 2 * ancho));

const perimetroRectangulo = (2 * (altura + ancho));
alert(`El perímetro del rectángulo de altura ${altura} y ancho ${ancho} es: ${perimetroRectangulo}.`);