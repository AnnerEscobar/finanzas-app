import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AddDebtComponent } from "../../pages/add-debt/add-debt.component";

@Component({
  selector: 'app-debt-history',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './debt-history.component.html',
  styleUrl: './debt-history.component.css'
})
export class DebtHistoryComponent {


  paymentHistory = [
    { date: new Date(2025, 4, 12), amount: 300, to: 'Tarjeta Banco Uno' },
    { date: new Date(2025, 4, 1), amount: 250, to: 'Tarjeta Banco Uno' },
    { date: new Date(2025, 3, 20), amount: 400, to: 'Préstamo estudiantil' },
  ];


}
