import { Component, ViewChild, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
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
  numero_factura:number = 0;
 
  constructor(private api : ApiService, private dialogRef: MatDialogRef<DetalleFacturaComponent>){}
  ngOnInit(): void {
    this.api.getObtenerProducto().subscribe(data =>{
      this.listaProducto = Object.values(data);
      console.log(this.listaProducto)
   })

   }

   postDetalleFactura(codigo_articulo:number,cantidad:number){
    console.log(codigo_articulo,cantidad,this.productoSeleccionado)
     this.api.postdetalleFactura(this.numero_factura,cantidad,codigo_articulo).subscribe({
       next:(res)=>{
         alert('El producto fue agregado');
      },
       error:()=>{
        alert("La factura no fue creada")
      } 
     }) 

   }

   
 

}
