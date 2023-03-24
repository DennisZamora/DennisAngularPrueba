import { Component, ViewChild, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.scss']
})

export class DetalleFacturaComponent implements OnInit{
  public cantidad:number = 0;
  public opcionSeleccionado:number = 0;
  listaProducto: any[] = [];
  codigoSeleccionado: number = 0;
  productoSeleccionado: string = "";
  numero_factura: string = "";
  constructor(private api : ApiService, private dialogRef: MatDialogRef<DetalleFacturaComponent>,private cookieService: CookieService){}
  ngOnInit(): void {
    this.api.getObtenerProducto().subscribe(data =>{
      this.listaProducto = Object.values(data);
   })
   }

   postDetalleFactura(codigo_articulo:number,cantidad:number){
     this.numero_factura = this.cookieService.get('numero_factura').toString();
    //console.log(codigo_articulo,cantidad,this.productoSeleccionado,Number(this.numero_factura))
      this.api.postdetalleFactura(Number(this.numero_factura),cantidad,codigo_articulo).subscribe({
        next:(res)=>{
         alert('El producto fue agregado');
        },
       error:()=>{
          alert("La factura no fue creada")
       } 
    }) 

   }

   
 

}
