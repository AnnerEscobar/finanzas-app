import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";
//dashboard
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    DashboardComponent,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    CommonModule,
    MatProgressSpinner,
    MatIconModule



  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finanzas-app';
  totalDebt = 5000;
  paidAmount = 1500;
  pendingAmount = this.totalDebt - this.paidAmount;

  get paidPercentage(): number {
    return Math.round((this.paidAmount / this.totalDebt) * 100);
  }


  paymentHistory = [
    { date: new Date(2025, 4, 12), amount: 300, to: 'Tarjeta Banco Uno' },
    { date: new Date(2025, 4, 1), amount: 250, to: 'Tarjeta Banco Uno' },
    { date: new Date(2025, 3, 20), amount: 400, to: 'Préstamo estudiantil' },
  ];


  //deuda en foco

  focusedDebtTotal = 8958;
  focusedDebtPaid = 2125;
  focusedDebtPending = this.focusedDebtTotal - this.focusedDebtPaid;

  get focusedDebtPercentage(): number {
    return Math.round((this.focusedDebtPaid / this.focusedDebtTotal) * 100);
  }

  onRegisterPayment() {
    // Lógica para abrir diálogo o navegar a la página de registrar pago
  }

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
