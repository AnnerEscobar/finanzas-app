import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DebtOnFocusService } from './debtOnFocus.service';
import { DebtDetailed } from './deb-on-focus.interface';

@Component({
  selector: 'app-debt-on-focus',
  imports: [CommonModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './debt-on-focus.component.html',
  styleUrl: './debt-on-focus.component.css'
})
export class DebtOnFocusComponent {

  focusedDebt?: DebtDetailed;

  // valores para la vista
  focusedDebtTotal = 0;
  focusedDebtPaid = 0;
  focusedDebtPending = 0;
  focusedDebtPercentage = 0;

  constructor(private debtOnFocus: DebtOnFocusService) { }

  ngOnInit() {
    this.debtOnFocus.getDebtsWithStatsDetailed()
      .subscribe(debts => {
        // 1) Filtrar sólo las deudas con saldo pendiente > 0
        const pending = debts.filter(d => d.amount > 0);

        // 2) Elegir la de menor saldo (bola de nieve)
        this.focusedDebt = pending.reduce((min, d) => {
          return !min || d.amount < min.amount ? d : min;
        }, pending[0]);

        if (this.focusedDebt) {
          this.focusedDebtTotal = this.focusedDebt.initialAmount;
          this.focusedDebtPaid = this.focusedDebt.totalPaid;
          this.focusedDebtPending = this.focusedDebt.amount;
          this.focusedDebtPercentage = this.focusedDebt.percentage;
        }
      }, () => alert('No se pudo cargar la deuda en foco'));
  }

  onRegisterPayment() {
    // Aquí podrías navegar al formulario de pago pasando focusedDebt._id
    console.log('Registrar pago para', this.focusedDebt?._id);
  }

}
