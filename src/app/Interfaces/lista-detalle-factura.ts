export interface ListaDetalleFactura {
    DETALLES: Detalle[];
    FACTURA:  Factura;
    ALERTA:   string;
}

export interface Detalle {
    PRECIO:          number;
    CODIGO_ARTICULO: string;
    LINEA:           number;
    ARTICULO:        string;
    CANTIDAD:        number;
    TOTAL_LINEA:     number;
}

export interface Factura {
    TOTAL:          number;
    FECHA:          string;
    NUMERO_FACTURA: number;
    USUARIO:        string;
}
