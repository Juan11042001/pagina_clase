import { Component, inject } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);//patron de diseño singleton


  protected nameControl:FormControl=new FormControl<string>('Juan');
  protected ageControl:FormControl=new FormControl<number>(0);
  protected dateControl:FormControl=new FormControl<Date>(new Date());
  protected checkboxControl:FormControl=new FormControl<boolean>(false);



  protected form: FormGroup;

  constructor(){
this.form = this.getBuildForm();


}
getBuildForm():FormGroup{
  return this.formBuilder.group({
  name: ['Juan', [ Validators.required, Validators.minLength(2)]],
  age: [0, [Validators.min(0),Validators.maxLength(120)]],
  date: [new Date(), [Validators.required]],
  checkbox: [false, [Validators.requiredTrue]]
  })


}

validateForm1() : void{
if(this.nameControl.valid && this.ageControl.valid){
  alert('valido');
}else{
alert('no valido')
}

}
validateForm2() : void{
  if(this.form.valid){
    alert('valido');
  }else{
  alert('no valido')
  }

  }
  }
