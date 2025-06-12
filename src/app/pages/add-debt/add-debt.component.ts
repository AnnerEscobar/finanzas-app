import { AddDebtService } from './add-debt.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateDebtDto } from './add-debt.interface';

@Component({
  selector: 'app-add-debt',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,],
  templateUrl: './add-debt.component.html',
  styleUrl: './add-debt.component.css'
})
export class AddDebtComponent {

  debtForm: FormGroup;
  todayStr = new Date().toISOString().substring(0, 10);

  constructor(
    private fb: FormBuilder,
    private addDebtService: AddDebtService
  ) {

    this.debtForm = this.fb.group({
      debtName: ['', [Validators.required, Validators.minLength(10)]],
      amount: [,[Validators.required]],
      interestRate: [, [Validators.required]],
      endDate: [this.todayStr, [Validators.required]],
      minimumPayment: [, [Validators.required]],

    });
  }


  public sendDebt(){

    if(this.debtForm.invalid){
      this.debtForm.markAllAsTouched();
      alert('Debes llenar el formulario correctamente')
    }

    const dto: CreateDebtDto = {
      debtName: this.debtForm.value.debtName,
      amount: this.debtForm.value.amount,
      interestRate: this.debtForm.value.interesRate,
      endDate: this.debtForm.value.endDate,
      minimumPayment: this.debtForm.value.minimumPayment

    }

    this.addDebtService.sendDebt(dto).subscribe({
      next: response => {
        alert('Deuda creada exitosamente')
        console.log('deuda creada', response),
        this.debtForm.reset({endDate: this.todayStr})
      },
      error: err => {
        alert('Ocurrio un Error al crear la deuda'),
        console.log('Error al crear la deuda:', err)
      }
    })





  }









}
