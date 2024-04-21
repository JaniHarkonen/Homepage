import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TABS, Tabs } from '../../assets/tabs/tabs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public tabs: Tabs = TABS;
  
  @Input() order: string[] = [];
}
