import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-new-member',
  templateUrl: './form-new-member.component.html',
  styleUrls: ['./form-new-member.component.css']
})
export class FormNewMemberComponent implements OnInit {
  reasignedForm!: UntypedFormGroup;
  destroySub: Subject<boolean> = new Subject<boolean>();

  constructor(
    public config: DynamicDialogConfig,
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
  ) { }

  ngOnInit(){

      this.reasignedForm = new UntypedFormGroup({
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
  }

  saveReasignation(){

  }

}
