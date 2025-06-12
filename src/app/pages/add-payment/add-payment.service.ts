import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environment.prod';
import { Injectable } from '@angular/core';
import { updateDebtDto } from './add-payment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPaymentService {

  private readonly baseUrl = `${environment.apiUrl}/debts`

  constructor(
    private http: HttpClient
  ) { }


  sendPayment(dto: updateDebtDto, id: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add-payment?id=${id}`, dto)
  }

  getDebtList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all-debts`)
  }



}
