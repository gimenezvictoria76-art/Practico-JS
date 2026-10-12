function calcularEdad(anioNacimientoText) {
  const anioNacimiento = parseInt(anioNacimientoText);
  const anioActual = 2026;
  return anioActual - anioNacimiento;
}

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
      alert("✅ Agregaste: Pédulas ($120.000)");
      console.log("Equipo agregado: Pédulas ($120.000)");
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


// simulador de compra
function iniciarSimulador() {
  const nombre = prompt("Ingresá tu nombre");
  const apellido = prompt("Ingresá tu apellido");
  const anioNacimientoTexto = prompt("Ingresá tu año de nacimiento (ej: 1995)");

  // Validamos que no se haya cancelado ningún prompt al inicio
  if (nombre !== null && apellido !== null && anioNacimientoTexto !== null) {
    const edad = calcularEdad(anioNacimientoTexto);
    const nombreCompleto = `${nombre} ${apellido}`;

    alert(`¡Hola ${nombreCompleto}! Tenés ${edad} años. Bienvenido/a a Línea Vertical - Equipamiento de Escalada 🧗‍♂️`);

    let totalCompra = 0;
    let cantidadProductos = 0;
    let continuar = true;

    while (continuar) {
      let producto = prompt(
        "Seleccioná un equipo ingresando el número:\n" +
        "1. Arnés Deportivo Regulable - $75.000\n" +
        "2. Pédulas - $120.000\n" +
        "3. Cuerda Dinámica 60m 9.8mm - $180.000\n" +
        "4. Magnesiera + Magnesio 250g - $18.000\n" +
        "Escribí 'FIN' para terminar la cotización."
      );

      if (producto === null || producto.toUpperCase() === "FIN") {
        continuar = false;
        break;
      }

      let precioObtenido = procesarProducto(producto);

      if (precioObtenido > 0) {
        totalCompra += precioObtenido;
        cantidadProductos++;
      }
    }

    if (cantidadProductos > 0) {
      const metodoPago = prompt(
        `Subtotal del equipo: $${totalCompra} (${cantidadProductos} ítems)\n\n` +
        "¿Cómo vas a abonar?\n" +
        "1. Efectivo / Transferencia (10% OFF)\n" +
        "2. Tarjeta de Crédito"
      );

      let totalFinal = totalCompra;

      if (metodoPago === "1") {
        const descuento = calcularDescuento(totalCompra, 10);
        totalFinal = totalCompra - descuento;
        alert(`🎉 ¡Tenés un 10% OFF por abonar en efectivo/transferencia!\nAhorraste: $${descuento}`);
      }

      mostrarResumen(nombreCompleto, edad, cantidadProductos, totalCompra, totalFinal);

    } else {
      alert("No seleccionaste ningún equipo. ¡Nos vemos en la roca! 🧗‍♀️");
      console.log("El usuario finalizó sin cotizar productos.");
    }

  } else {
    alert("Operación cancelada. ¡Te esperamos la próxima!");
    console.log("El usuario canceló el inicio de sesión.");
  }
}

// Ejecutamos el simulador de compra
iniciarSimulador();


// Declaración del array con 5 elementos iniciales en minúsculas
const catalogoDisponible = ["cuerda", "casco", "cinta express", "magnesio", "arnés"];

// Unshift y push
catalogoDisponible.unshift("mosquetón");
catalogoDisponible.push("magnesiera");
const equipoAgotado = catalogoDisponible.pop();

console.log(`Se ha eliminado el elemento: ${equipoAgotado}`);

// Búsqueda y validación evita null
const productoIngresado = prompt("¿Qué estás buscando hoy?");

if (productoIngresado !== null) {
  const productoBuscado = productoIngresado.toLowerCase();

  if (catalogoDisponible.includes(productoBuscado)) {
    const posicion = catalogoDisponible.indexOf(productoBuscado);
    alert(`¡Sí! Encontramos tu producto en la posición N° ${posicion}`);
    console.log(`✅ "${productoBuscado}" está disponible en la posición ${posicion}`);
  } else {
    alert("Disculpa :( este producto no está disponible");
    console.log(`❌ "${productoBuscado}" no se encuentra en stock`);
  }
} else {
  console.log("El usuario canceló la búsqueda.");
}

// Splice para actualizar un índice específico
catalogoDisponible.splice(2, 1, "cuerda pro de 70mts");

// Función con for...of para listar inventario
function listarInventario(lista) {
  console.log("--- INVENTARIO ACTUALIZADO DE LÍNEA VERTICAL ---");
  for (const equipo of lista) {
    console.log(`Producto: ${equipo}`);
  }
  console.log(`Total de ítems: ${lista.length}`);
}

// reporte final de inventario
listarInventario(catalogoDisponible);