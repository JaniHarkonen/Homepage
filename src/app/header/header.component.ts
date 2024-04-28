import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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

  private router: Router;

  @Input() order: string[] = [];

  constructor(router: Router) {
    this.router = router;
  }

  public isTabSelected(tabKey: string): boolean {
    return "/" + this.tabs[tabKey].routerLink === this.router.url;
  }
}
