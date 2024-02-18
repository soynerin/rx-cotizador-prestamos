const formatearDinero = (cantidad) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'ARS',
    }).format(cantidad);
};

const calcularTotalAPagar = (cantidad, plazo) => {
    let interes = 0;
    if (cantidad < 1000) {
      interes = 25;
    } else if (cantidad >= 1000 && cantidad < 5000) {
      interes = 20;
    } else if (cantidad >= 5000 && cantidad < 10000) {
      interes = 15;
    } else {
      interes = 10;
    }

    return cantidad + (cantidad * interes / 100) * plazo;
}

const calcularPagoMensual = (total, plazo) => {
    return total / plazo;
}

export { formatearDinero, calcularTotalAPagar, calcularPagoMensual };