import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DebListService } from './debList.service';
import { CreateDebtDto } from '../../pages/add-debt/add-debt.interface';

@Component({
  selector: 'app-debt-list',
  imports: [MatProgressSpinnerModule, MatCardModule, CommonModule],
  templateUrl: './debt-list.component.html',
  styleUrl: './debt-list.component.css'
})
export class DebtListComponent {

  debts: CreateDebtDto[] = [];

  constructor(
    private debtListService: DebListService
  ){}

   ngOnInit(): void {
    this.getDebtList();
  }

  getDebtList(): void {
    this.debtListService.getDebtList().subscribe({
      next: (resp) => {
        this.debts = resp;
        console.log(this.debts)
      },
      error: (err) => {
        alert('No se obtuvieron las deudas')
      }
    })
  }



/*
    // Serializa con porcentaje y pendiente calculado
  get otherDebtsList() {
    return this.otherDebts.map(debt => {
      const pending = debt.total - debt.paid;
      return {
        ...debt,
        pending,
        percentage: Math.round((debt.paid / debt.total) * 100),
      };
    });
  } */

}
