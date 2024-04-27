import { Component } from '@angular/core';
import { TechnologyStackComponent } from '../../components/technology-stack/technology-stack.component';
import { SKILLS } from '../../../assets/skills';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TechnologyStackComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  public getTechnologyOrder(): string[] {
    return SKILLS.map((skill) => skill.technologyID);
  }

  public getExperienceLevels(): string[] {
    return SKILLS.map((skill) => skill.experience);
  }
}
