import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-debt',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,],
  templateUrl: './add-debt.component.html',
  styleUrl: './add-debt.component.css'
})
export class AddDebtComponent {

}
