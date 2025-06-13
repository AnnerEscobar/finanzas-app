import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { Observable } from 'rxjs';
import { DebtDetailed, PaymentWithName, ProgressGeneral } from './general-progress.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralProgressService {

private readonly baseUrl = `${environment.apiUrl}/debts`;

constructor(
  private http: HttpClient
) { }


 // Endpoint que devuelve debts con initialAmount y totalPaid
  getDebtsWithStatsDetailed(): Observable<DebtDetailed[]> {
    return this.http.get<DebtDetailed[]>(
      `${this.baseUrl}/with-stats-detailed`
    );
  }

  // Endpoint que devuelve todos los pagos, con interestPay
  getAllPayments(): Observable<PaymentWithName[]> {
    return this.http.get<PaymentWithName[]>(
      `${this.baseUrl}/payments`
    );
  }

  getProgressGeneral(): Observable<ProgressGeneral> {
    return this.http.get<ProgressGeneral>(
      `${this.baseUrl}/progress-general`
    );
  }
}
