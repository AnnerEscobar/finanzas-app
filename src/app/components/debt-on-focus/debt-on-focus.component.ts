import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-debt-on-focus',
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './debt-on-focus.component.html',
  styleUrl: './debt-on-focus.component.css'
})
export class DebtOnFocusComponent {

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

}
