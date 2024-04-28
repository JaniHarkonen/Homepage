import { Component } from '@angular/core';
import { TechnologyStackComponent } from '../../components/technology-stack/technology-stack.component';
import { TECHNOLOGIES } from '../../../assets/technologies/technologies';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TechnologyStackComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  private usedTechnologies: string [] = [
    TECHNOLOGIES["angular"].id
  ];

  public getTechnologies(): string[] {
    return this.usedTechnologies;
  }
}
