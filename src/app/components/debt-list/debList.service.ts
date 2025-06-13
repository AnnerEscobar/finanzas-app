import { Injectable } from '@angular/core';
import { environment } from '../../../environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebListService {

  private readonly baseUrl = `${environment.apiUrl}/debts`

  constructor(
    private http: HttpClient
  ) { }


  getDebtList():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/with-stats`)
  }





}
