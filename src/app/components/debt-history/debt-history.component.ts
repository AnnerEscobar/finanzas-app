import { HistoryService } from './history.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AddDebtComponent } from "../../pages/add-debt/add-debt.component";
import { CreateDebtDto } from '../../pages/add-debt/add-debt.interface';
import { hystoryDto } from './add-debt.interface';



@Component({
  selector: 'app-debt-history',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './debt-history.component.html',
  styleUrl: './debt-history.component.css'
})
export class DebtHistoryComponent {
  paymentHistory: hystoryDto[] = [];

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllPayments();
  }


  private getAllPayments(): void {
    this.historyService.getAllPayments()
      .subscribe(payments => {
        this.paymentHistory = payments
          .sort((a: { payDate: string | number | Date; }, b: { payDate: string | number | Date; }) =>
            new Date(b.payDate).getTime() - new Date(a.payDate).getTime()
          )
          .slice(0, 5)
          .map((p: { payDate: string | number | Date; payAmount: any; debtName: any; }) => ({
            date:   new Date(p.payDate),
            amount: p.payAmount,
            to:     p.debtName
          }));
      }, err => {
        console.error(err);
        alert('No se pudo cargar historial de pagos');
      });
  }

}
