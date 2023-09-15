import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  headers: any[]=[];
  dataCatalog: any[]=[];
  type:number | undefined;
  codeCustomer:any;

  constructor(
    public config: DynamicDialogConfig,
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
  ) { }


  ngOnInit(){
    this.type = this.config.data;
    this.headers = [
      { header:'Clave Membresia',field:'Area_Name',type:'text'},
      { header:'Nombre',field:'Item_No',type:'text'},
      { header:'Apellidos',field:'Item_Desc',type:'text'},
      { header:'Tipo Membresia',field:'Real_Negative_Cost',type:'number'},
      { header:'Miembro desde:',field:'Shortages',type:'number'},
      { header:'Renovacion el dia:',field:'Cost_Shortages',type:'number'},
      { header:'Mascotas Registradas',field:'OH',type:'number'},
    ];
  }

  getColumns(headers: any[]) {
    return headers.map(x => x.field);
  }

  searchInfoCustomer(){

  }
}
