import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuSideBarComponent } from "../shared/menu-side-bar/menu-side-bar.component";
import { RouterOutlet } from '@angular/router';
import { DebtHistoryComponent } from '../components/debt-history/debt-history.component';
import { DebtListComponent } from '../components/debt-list/debt-list.component';
import { DebtOnFocusComponent } from '../components/debt-on-focus/debt-on-focus.component';
import { GeneralProgressComponent } from '../components/general-progress/general-progress.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatGridListModule,
    DebtListComponent,
    DebtHistoryComponent,
    DebtOnFocusComponent,
    GeneralProgressComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
