import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormDateMemberComponent } from './components/form-date-member/form-date-member.component';
import { FormNewMemberComponent } from './components/form-new-member/form-new-member.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { Subject, takeUntil } from 'rxjs';
import { ApiServiceService } from './components/services/api-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DialogService,HttpClient]
})
export class AppComponent {
  title = 'maintance_project';
  OptionsCarrousel:any;
  products = [{name:"Crear Cita",image:"dog.jpg",icon:"pi-pencil",type:1},{name:"Registrar Miembro",image:"agend.png",icon:"pi-pencil",type:2},{name:"Catalogo de Miembros",image:"client.png", icon:"pi-user",type:3},{name:"Historial Cliente",image:"historic.png",icon:"pi-search",type:4}];
  ref: DynamicDialogRef | undefined;
  destroySub: Subject<boolean> = new Subject<boolean>();


  constructor(
    public dialogService: DialogService,
    public ApiService: ApiServiceService

    ) {
}

  ngOninit(){
    this.renderCarousel()
    }

    renderCarousel(){
      this.OptionsCarrousel = [
          {
              breakpoint: '1024px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '768px',
              numVisible: 2,
              numScroll: 2
          },
          {
              breakpoint: '560px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  actionMethod(type:any){
    if(type == 1){

      this.ref = this.dialogService.open(FormDateMemberComponent, {
        header: '',
        width: '70%',
        contentStyle: { "overflow": "auto" },
        baseZIndex: 10000,
        maximizable: true,
        data:''
      });
    } else if(type == 2){
      this.ref = this.dialogService.open(FormNewMemberComponent, {
        header: '',
        width: '70%',
        contentStyle: { "overflow": "auto" },
        baseZIndex: 10000,
        maximizable: true,
        data:''
      });
    } else if(type == 3){
      this.ref = this.dialogService.open(FormDataComponent, {
        header: '',
        width: '90%',
        contentStyle: { "overflow": "auto" },
        baseZIndex: 10000,
        maximizable: true,
        data:1
      });
    } else if(type == 4){
      this.ref = this.dialogService.open(FormDataComponent, {
        header: '',
        width: '90%',
        contentStyle: { "overflow": "auto" },
        baseZIndex: 10000,
        maximizable: true,
        data:2
      });
    }

  }

  connectedBack(){
    this.ApiService.GetMethod("Persons/GetCatalogMembers").pipe(takeUntil(this.destroySub)).subscribe((res:any) => {
      if (res['data']) {
        console.log(res['data'])
      } else {

      }
      }, error => {

  });
  }
}
