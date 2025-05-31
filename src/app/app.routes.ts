import { Routes } from '@angular/router';
import { AddDebtComponent } from './pages/add-debt/add-debt.component';
import { AddPaymentComponent } from './pages/add-payment/add-payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralProgressComponent } from './components/general-progress/general-progress.component';
import { DebtOnFocusComponent } from './components/debt-on-focus/debt-on-focus.component';
import { DebtListComponent } from './components/debt-list/debt-list.component';
import { DebtHistoryComponent } from './components/debt-history/debt-history.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      /* { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, */
      { path: 'general', component: GeneralProgressComponent },
      { path: 'on-focus', component: DebtOnFocusComponent },
      { path: 'debt-list', component: DebtListComponent },
      { path: 'debt-history', component: DebtHistoryComponent }
    ]
  },
  { path: 'add-debt', component: AddDebtComponent },
  { path: 'add-payment', component: AddPaymentComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
