import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  protected form: FormGroup;


  constructor(){
    this.form=this.buildForm;

    console.log(this.namefield);
    console.log(this.form);
  }


  get buildForm(){
    return this.formBuilder.group({
      name: ['Juan',[Validators.required,Validators.minLength(2)]],
      birthdate: [new Date(),[Validators.required]],
      weight: [0,[Validators.required,Validators.min(1)]],
      state: [false,[Validators.required]],




    });

  }

  get namefield():AbstractControl{
    return this.form.controls['name'];
  }
  get birtdatefield():AbstractControl{
    return this.form.controls['birthdate'];
  }
  get weightfield():AbstractControl{
    return this.form.controls['weight'];
  }

  get statefield():AbstractControl{
    return this.form.controls['state'];
  }



}
