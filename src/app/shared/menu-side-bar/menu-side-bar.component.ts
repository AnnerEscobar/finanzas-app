import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-side-bar',
  imports: [MatIconModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-side-bar.component.html',
  styleUrl: './menu-side-bar.component.css'
})
export class MenuSideBarComponent {

}
