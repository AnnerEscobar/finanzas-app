import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-general-progress',
  imports: [MatProgressSpinnerModule, MatCardModule, CommonModule],
  templateUrl: './general-progress.component.html',
  styleUrl: './general-progress.component.css'
})
export class GeneralProgressComponent {

  totalDebt = 5000;
  paidAmount = 1500;
  pendingAmount = this.totalDebt - this.paidAmount;

  get paidPercentage(): number {
    return Math.round((this.paidAmount / this.totalDebt) * 100);
  }


}
