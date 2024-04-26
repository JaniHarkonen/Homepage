import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TABS } from '../assets/tabs/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public tabOrder: string[] = [
    TABS["about"].id,
    TABS["projects"].id,
    TABS["contact"].id
  ];

  title = 'homepage';
}
