import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-debt-list',
  imports: [MatProgressSpinnerModule, MatCardModule, CommonModule],
  templateUrl: './debt-list.component.html',
  styleUrl: './debt-list.component.css'
})
export class DebtListComponent {

    //otras deudas
    // Datos originales
  otherDebts = [
    { name: 'Préstamo estudiantil', total: 1000, paid: 200 },
    { name: 'Moto Italika',        total: 3000, paid: 900 },
    { name: 'Línea de crédito',    total: 2500, paid: 1250 },
  ];

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
  }

}
