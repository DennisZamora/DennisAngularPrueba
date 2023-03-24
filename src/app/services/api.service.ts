import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient:HttpClient) { }
  url:string = "https://api.cafebritt.com/develop/test/functions/api.cfc";
  
  //Agrega la factura
  postFactura(numero_factura:number,fecha:string) {
   return this.httpClient.get<any>(this.url+'?method=CreaFactura&token=0121215489&numero_factura='+numero_factura+'&fecha='+fecha);
  }
  
  //Agrega el detalle de factura
  postdetalleFactura(numero_factura:number,cantidad:number,codigo_articulo:number) {
    return this.httpClient.get<any>(this.url+'?method=AgregaDetalle&token=0121215489&codigo_articulo='+codigo_articulo +'&cantidad='+cantidad+'&numero_factura='+numero_factura);
  }
 
  //Obtiene el detalle de la factura
  getDetalleFactura(numeroFactura:number){
    return this.httpClient.get<any>(this.url+'?method=ObtieneFactura&token=0121215489&numero_factura='+numeroFactura);
  }
  //Obtiene el producto
  getObtenerProducto(){
    return this.httpClient.get<any>(this.url+'?method=BuscarProducto&token=0121215489');
  }
  
  //Elimina el detalle de la factura
  deleteDetalleFactura(linea:number,numero_factura:number){
    return this.httpClient.get(this.url+'?method=BorrarDetalle&token=0121215489&linea='+linea+'&numero_factura='+numero_factura);
  }
}
