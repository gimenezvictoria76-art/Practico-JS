// Cálculo edad del cliente
function calcularEdad(anioNacimientoText) {
  const anioNacimiento = parseInt(anioNacimientoText);
  const anioActual = 2026;
  return anioActual - anioNacimiento;
}

// Calculo de descuento sobre un subtotal con return
const calcularDescuento = (monto, porcentaje) => monto * (porcentaje / 100);

function procesarProducto(opcion) {
  let precio = 0;

  switch (opcion) {
    case "1":
      alert("✅ Agregaste: Arnés Deportivo Regulable ($75.000)");
      console.log("Equipo agregado: Arnés Deportivo Regulable ($75.000)");
      precio = 75000;
      break;
    case "2":
      alert("✅ Agregaste: Pedulas ($120.000)");
      console.log("Equipo agregado: Pedulas ($120.000)");
      precio = 120000;
      break;
    case "3":
      alert("✅ Agregaste: Cuerda Dinámica 60m ($180.000)");
      console.log("Equipo agregado: Cuerda Dinámica 60m ($180.000)");
      precio = 180000;
      break;
    case "4":
      alert("✅ Agregaste: Magnesiera + Magnesio 250g ($18.000)");
      console.log("Equipo agregado: Magnesiera + Magnesio 250g ($18.000)");
      precio = 18000;
      break;
    default:
      alert("❌ Opción no válida. Elegí 1, 2, 3, 4 o escribí 'FIN'.");
      console.log("Opción inválida ingresada:", opcion);
      precio = 0;
      break;
  }

  return precio;
}

// Salida de datos en consola
function mostrarResumen(cliente, edadCliente, cantidadItems, subtotal, totalFinal) {
  alert(
    `🎉 ¡Gracias por tu compra en Línea Vertical, ${cliente}!\n\n` +
    `Llevás ${cantidadItems} ítem(s) de escalada.\n` +
    `Subtotal: $${subtotal}\n` +
    `Total final a pagar: $${totalFinal}`
  );

  console.log("--- RESUMEN DE COTIZACIÓN - LÍNEA VERTICAL ---");
  console.log("Escalador/a:", cliente);
  console.log("Edad:", edadCliente);
  console.log("Cantidad de ítems de escalada:", cantidadItems);
  console.log("Subtotal:", subtotal);
  console.log("Total final abonado:", totalFinal);
}


// 2. ALGORITMO PRINCIPAL

function iniciarSimulador() {
  // Entrada de datos del usuario
  const nombre = prompt("Ingresá tu nombre:");
  const apellido = prompt("Ingresá tu apellido:");
  const anioNacimientoTexto = prompt("Ingresá tu año de nacimiento (ej: 1998):");

  // Función de cálculo con parámetro y return
  const edad = calcularEdad(anioNacimientoTexto);
  const nombreCompleto = `${nombre} ${apellido}`;

  alert(`¡Hola ${nombreCompleto}! Tenés ${edad} años. Bienvenido/a a Línea Vertical - Equipamiento de Escalada 🧗‍♂️`);

  let totalCompra = 0;
  let cantidadProductos = 0;
  let continuar = true;

  // Bucle de iteración
  while (continuar) {
    let producto = prompt(
      "Seleccioná un equipo ingresando el número:\n" +
      "1. Arnés Deportivo Regulable - $75.000\n" +
      "2. Pedulas - $120.000\n" +
      "3. Cuerda Dinámica 60m 9.8mm - $180.000\n" +
      "4. Magnesiera + Magnesio 250g - $18.000\n" +
      "Escribí 'FIN' para terminar la cotización."
    );

    if (producto === null || producto.toUpperCase() === "FIN") {
      continuar = false;
      break;
    }

    // Invocación a procesarProducto con parámetro y asignación de resultado
    let precioObtenido = procesarProducto(producto);

    if (precioObtenido > 0) {
      totalCompra += precioObtenido;
      cantidadProductos++;
    }
  }

  // Evaluación de resultados y formas de pago
  if (cantidadProductos > 0) {
    const metodoPago = prompt(
      `Subtotal del equipo: $${totalCompra} (${cantidadProductos} ítems)\n\n` +
      "¿Cómo vas a abonar?\n" +
      "1. Efectivo / Transferencia (10% OFF)\n" +
      "2. Tarjeta de Crédito"
    );

    let totalFinal = totalCompra;

    if (metodoPago === "1") {
      // Invocación a función flecha parametrizada
      const descuento = calcularDescuento(totalCompra, 10);
      totalFinal = totalCompra - descuento;
      alert(`🎉 ¡Tenés un 10% OFF por pago al contado!\nAhorraste: $${descuento}`);
    }

    // Invocación a función de salida con múltiples parámetros
    mostrarResumen(nombreCompleto, edad, cantidadProductos, totalCompra, totalFinal);

  } else {
    alert("No seleccionaste ningún equipo. ¡Nos vemos en la roca! 🧗‍♀️");
    console.log("El usuario finalizó sin cotizar productos.");
  }
}

// Invocación para ejecutar el simulador
iniciarSimulador();