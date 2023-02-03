const formatearDinero = (cantidad) => {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'ARS',
    }).format(cantidad);
};

export { formatearDinero };