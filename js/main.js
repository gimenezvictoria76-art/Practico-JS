// 1. Datos iniciales del cliente
const nombre = prompt("Ingresá tu nombre:");
const apellido = prompt("Ingresá tu apellido:");
const anioNacimientoTexto = prompt("Ingresá tu año de nacimiento (ej: 1998):");

const anioNacimiento = parseInt(anioNacimientoTexto);
const anioActual = 2026;
const edad = anioActual - anioNacimiento;

const nombreCompleto = `${nombre} ${apellido}`;
alert(`¡Hola ${nombreCompleto}! Tenés ${edad} años. Bienvenido/a a Línea Vertical - Equipamiento de Escalada 🧗‍♂️`);

// 2. Acumuladores para el simulador de cotización y venta
let totalCompra = 0;
let cantidadProductos = 0;
let continuar = true;

// 3. BUCLE: Repite la consulta hasta que el usuario ingrese "FIN"
while (continuar) {
  let producto = prompt(
    "Seleccioná un equipo ingresando el número:\n1. Arnés Deportivo Regulable - $75.000\n2. Pedulas - $120.000\n3. Cuerda Dinámica 60m 9.8mm - $180.000\n4. Magnesiera + Magnesio 250g - $18.000\nEscribí 'FIN' para terminar la cotización."
  );

  // Confirmación de salida
  if (producto === null || producto.toUpperCase() === "FIN") {
    continuar = false;
    break;
  }

  // CONDICIONAL switch
  switch (producto) {
    case "1":
      totalCompra += 75000;
      cantidadProductos++;
      alert("✅ Agregaste: Arnés Deportivo Regulable ($75.000)");
      console.log("Equipo agregado: Arnés Deportivo Regulable ($75.000)");
      break;

    case "2":
      totalCompra += 120000;
      cantidadProductos++;
      alert("✅ Agregaste: Pies de Gato ($120.000)");
      console.log("Equipo agregado: Pies de Gato ($120.000)");
      break;

    case "3":
      totalCompra += 180000;
      cantidadProductos++;
      alert("✅ Agregaste: Cuerda Dinámica 60m ($180.000)");
      console.log("Equipo agregado: Cuerda Dinámica 60m ($180.000)");
      break;

    case "4":
      totalCompra += 18000;
      cantidadProductos++;
      alert("✅ Agregaste: Magnesiera + Magnesio 250g ($18.000)");
      console.log("Equipo agregado: Magnesiera + Magnesio 250g ($18.000)");
      break;

    default:
      alert("❌ Opción no válida. Elegí 1, 2, 3, 4 o escribí 'FIN'.");
      console.log("Opción inválida ingresada:", producto);
      break;
  }
}

// Resultados, formas de pago y salida
if (cantidadProductos > 0) {
  const metodoPago = prompt(
    `Subtotal del equipo: $${totalCompra} (${cantidadProductos} ítems)\n\n¿Cómo vas a abonar?\n1. Efectivo / Transferencia (10% OFF)\n2. Tarjeta de Crédito`
  );

  let totalFinal = totalCompra;

  if (metodoPago === "1") {
    const descuento = totalCompra * 0.1;
    totalFinal = totalCompra - descuento;
    alert(`🎉 ¡Tenés un 10% OFF por pago al contado!\nTotal final a pagar: $${totalFinal}`);
  } else {
    alert(`Total final a pagar: $${totalFinal}`);
  }

  // Muestra de datos
  console.log("--- RESUMEN DE COTIZACIÓN - LÍNEA VERTICAL ---");
  console.log("Escalador/a:", nombreCompleto);
  console.log("Edad:", edad);
  console.log("Cantidad de ítems de escalada:", cantidadProductos);
  console.log("Subtotal:", totalCompra);
  console.log("Total final abonado:", totalFinal);
} else {
  alert("No seleccionaste ningún equipo. ¡Nos vemos en la roca! 🧗‍♀️");
  console.log("El usuario finalizó sin cotizar productos.");
}

