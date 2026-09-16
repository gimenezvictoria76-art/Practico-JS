const nombre = prompt("Ingresá tu nombre:");
const apellido = prompt("Ingresá tu apellido:");
const anioNacimientoTexto = prompt("Ingresá tu año de nacimiento (ej: 1998):");


const anioNacimiento = parseInt(anioNacimientoTexto);


const anioActual = 2026;
const edad = anioActual - anioNacimiento;

// Concatenación / Template Literals 
const nombreCompleto = nombre + " " + apellido;
const mensajeFinal = `¡Hola ${nombreCompleto}! Tenés ${edad} años.`;


alert(mensajeFinal);
console.log("Nombre del usuario:", nombreCompleto);
console.log("Año de nacimiento:", anioNacimiento);
console.log("Edad calculada:", edad);



