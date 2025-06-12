import { environment } from './../../../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateDebtDto } from './add-debt.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDebtService {

  private readonly baseUrl = `${environment.apiUrl}/debts`;

  constructor(
    private http: HttpClient
  ) { }

  sendDebt(dto: CreateDebtDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, dto)
  }


}
