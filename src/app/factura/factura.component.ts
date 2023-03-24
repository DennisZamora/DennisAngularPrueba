import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  
  constructor(private formBuilder : FormBuilder,private api : ApiService, private dialogRef: MatDialogRef<FacturaComponent>,private cookieService: CookieService){}
  nuevaFacturaForm !:  FormGroup;
  public numero_factura: number = 0;
  public fecha: string = '';
   ngOnInit(): void {
      this.nuevaFacturaForm = this.formBuilder.group({
        numero_factura: [0,Validators.required],
        fecha: ['',Validators.required]
      }) 
   }
    postFactura(numero_factura:number,fecha:string){  
      this.cookieService.set('numero_factura',numero_factura.toString())
         this.api.postFactura(numero_factura,fecha)
        .subscribe({
        next:(res)=>{
          alert('La factura *'+numero_factura+'* fue creada');
        },
         error:()=>{
           alert("La factura no fue creada")
         } 
         }) 
   }

}
