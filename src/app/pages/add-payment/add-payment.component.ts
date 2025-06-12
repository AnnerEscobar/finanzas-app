import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { AddPaymentService } from './add-payment.service';
import { CreateDebtDto } from '../add-debt/add-debt.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { updateDebtDto } from './add-payment.interface';

@Component({
  selector: 'app-add-payment',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent {

  debts: CreateDebtDto[] = [];
  paymentForm: FormGroup;
  todayStr = new Date().toISOString().substring(0, 10);

  constructor(
    private addPaymentService: AddPaymentService,
    private fb: FormBuilder
  ) {
    this.paymentForm = this.fb.group({
      payAmount: [, [Validators.required]],
      interestPay: [, [Validators.required]],
      payDate:[this.todayStr, [Validators.required]],
      _id: [null, [Validators.required]]

    })
  }

  ngOnInit(): void {
    this.getDebtList();
  }

  getDebtList(): void {
    this.addPaymentService.getDebtList().subscribe({
      next: (resp) => {
        this.debts = resp;
        console.log(this.debts)
      },
      error: (err) => {
        alert('No se obtuvieron las deudas')
      }
    })
  }


  sendPayment(): void {
    if(this.paymentForm.invalid){
      alert('No se estan llenando correctamente los campos')
    }

    const dto: updateDebtDto = {
      payAmount: this.paymentForm.value.payAmount,
      interestPay: this.paymentForm.value.interestPay,
      payDate: this.paymentForm.value.payDate,
      _id: this.paymentForm.value._id
    }

    this.addPaymentService.sendPayment(dto, dto._id).subscribe({
      next: update => {
        alert("El pago fue registrado")
      },
      error: (err) => {
        alert("error al registrar el pago" + err )
      }
    })

  }


}
