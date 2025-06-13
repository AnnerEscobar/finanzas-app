import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralProgressService } from './general-progress.service';
import { forkJoin } from 'rxjs';
import { ProgressGeneral } from './general-progress.interface';

@Component({
  selector: 'app-general-progress',
  imports: [MatProgressSpinnerModule, MatCardModule, CommonModule],
  templateUrl: './general-progress.component.html',
  styleUrl: './general-progress.component.css'
})
export class GeneralProgressComponent {
 paidPercentage = 0;
  paidAmount     = 0;
  interestAmount = 0;
  pendingAmount  = 0;

  constructor(private generalProgressService: GeneralProgressService) {}

  ngOnInit() {
    this.generalProgressService.getProgressGeneral()
      .subscribe({
        next: (stats: ProgressGeneral) => {
          this.paidPercentage = stats.paidPercentage;
          this.paidAmount     = stats.totalPaid;
          this.interestAmount = stats.totalInterest;
          this.pendingAmount  = stats.totalPending;
        },
        error: err => {
          console.error('Error cargando progreso general', err);
          alert('No se pudo cargar el progreso general');
        }
      });
  }
}
