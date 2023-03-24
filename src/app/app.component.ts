import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from './services/api.service';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { FacturaComponent } from './factura/factura.component';
import { ListaDetalleFactura } from './Interfaces/lista-detalle-factura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public p_num_factura : number= 0;
  title = 'PruebaDennis';
  listaDetalleFactura: any[] = [];
  constructor(private dialog: MatDialog, private api : ApiService){}

  ngOnInit(): void {
    this.api.getDetalleFactura(3234).subscribe(data =>{
       this.listaDetalleFactura = Object.values(data);
       console.log(this.listaDetalleFactura)
    })
  }
  
  /// Abre el dialogo de la factura
  openFacturaDialog() {
     this.dialog.open(FacturaComponent,{
      width: '30%'
     });
  }

  /// Abre el dialogo de la detalle factura
  openDetalleFacturaDialog() {
    this.dialog.open(DetalleFacturaComponent,{
     width: '30%'
    });
  }

  

  /// Elimina el detalle de la factura
  /// Linea->Numero de linea de la factura
  /// NumeroFactura -> El numero de la factura
  /// nombreProducto -> El nombre del prodcuto
  deleteDetalleFactura(linea: number,numeroFactura : number,nombreProducto:string){
    this.api.deleteDetalleFactura(linea,numeroFactura)
    .subscribe({
      next:(res)=>{
        alert('La linea *'+linea+'* del producto *'+nombreProducto+'*fue eliminada')
      },
      error:()=>{
        alert("La linea no fue eliminada");
      }
    })
   }
}