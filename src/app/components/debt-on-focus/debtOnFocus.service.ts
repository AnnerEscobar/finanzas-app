import { Injectable } from '@angular/core';
import { DebtDetailed } from './deb-on-focus.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtOnFocusService {

private readonly baseUrl = `${environment.apiUrl}/debts`

constructor(
  private http: HttpClient
) { }


getDebtsWithStatsDetailed(): Observable<DebtDetailed[]> {
  return this.http.get<DebtDetailed[]>(
    `${this.baseUrl}/with-stats-detailed`
  );
}

}
