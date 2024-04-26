import { Component } from '@angular/core';
import { TechnologyStackComponent } from '../../components/technology-stack/technology-stack.component';
import { TECHNOLOGIES } from '../../../assets/technologies/technologies';
import { SKILLS } from '../../../assets/skills';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TechnologyStackComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private technologyOrder: string[] = [
    TECHNOLOGIES["angular"].id, 
    TECHNOLOGIES["typescript"].id,
    TECHNOLOGIES["javascript"].id,
    TECHNOLOGIES["react"].id,
    TECHNOLOGIES["bootstrap"].id,
    TECHNOLOGIES["html5"].id,
    TECHNOLOGIES["css3"].id,
    TECHNOLOGIES["express"].id,
    TECHNOLOGIES["java"].id,
    // SQL here
    TECHNOLOGIES["sqlite"].id,
    TECHNOLOGIES["aframe"].id,
    TECHNOLOGIES["electron"].id,
    TECHNOLOGIES["opengl"].id,
    TECHNOLOGIES["nodejs"].id
  ];

  public getTechnologyOrder(): string[] {
    return SKILLS.map((skill) => skill.technologyID);
  }

  public getExperienceLevels(): string[] {
    return SKILLS.map((skill) => skill.experience);
  }
}
