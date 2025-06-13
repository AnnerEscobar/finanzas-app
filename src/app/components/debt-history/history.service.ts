import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateDebtDto } from '../../pages/add-debt/add-debt.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

private readonly baseUrl = `${environment.apiUrl}/debts`;

constructor(
  private http: HttpClient
) { }


getAllPayments(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/all-payments`);
}

}
