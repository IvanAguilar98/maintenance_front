import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-date-member',
  templateUrl: './form-date-member.component.html',
  styleUrls: ['./form-date-member.component.css']
})
export class FormDateMemberComponent implements OnInit {

  formMember!: UntypedFormGroup;
  formNotMember!: UntypedFormGroup;
  destroySub: Subject<boolean> = new Subject<boolean>();
  typeMemberReq = [{name:'Miembro',value:1},{name:'Externo',value:2}]
  typeSelect:any;
  showExternForm = false;
  showMemberForm = false;
  haveInfoCustomer = false;
  showbuttonMember = false;
  codeCustomer:any;

  constructor(
    public config: DynamicDialogConfig,
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
  ) { }

  ngOnInit(){

      this.formNotMember = new UntypedFormGroup({
        nameMember: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
        lastName: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
        age: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
        direction: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
        cellphone: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
        mascotName: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
        race: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
        dateRegister: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
        typeMember: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
        Comments: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
    });

    this.formMember = new UntypedFormGroup({
      nameMemberM: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
      lastNameM: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
      ageM: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
      directionM: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
      cellphoneM: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
      mascotNameM: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
      raceM: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
      dateRegisterM: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
      typeMemberM: new UntypedFormControl({ value:  '', disabled: false }, { validators: Validators.required }),
      CommentsM: new UntypedFormControl({ value: '', disabled: false }, { validators: Validators.required }),
  });
  }

  saveReasignation(){

  }

  getDataByMonth(){
    this.codeCustomer = undefined;
    if(this.typeSelect == 1){
      this.showExternForm = false;
      this.showMemberForm = true;
    } else {
      this.showExternForm = true;
      this.showMemberForm = false;
    }
  }

  searchInfoCustomer(){
    this.showbuttonMember = false;
    this.haveInfoCustomer = false;
    const params = {
      numberCard: this.codeCustomer
    }
    this.haveInfoCustomer = true;
    this.showbuttonMember = true;
  }

}
