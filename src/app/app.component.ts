import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuSideBarComponent } from './shared/menu-side-bar/menu-side-bar.component';
import { GeneralProgressComponent } from "./components/general-progress/general-progress.component";
import { DebtOnFocusComponent } from "./components/debt-on-focus/debt-on-focus.component";
import { DebtListComponent } from "./components/debt-list/debt-list.component";
import { DebtHistoryComponent } from "./components/debt-history/debt-history.component";

@Component({
  selector: 'app-root',
  imports: [
  /*   CommonModule,
    MatIconModule,
     */
    RouterOutlet,
    MenuSideBarComponent,


],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finanzas-app';
}
