import { Component } from '@angular/core';
import { TechnologyStackComponent } from '../../components/technology-stack/technology-stack.component';
import { SKILLS } from '../../../assets/skills';
import { NgFor } from '@angular/common';
import SkillBracket from '../../../model/SkillBracket';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, TechnologyStackComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public getSkillsByBracket(): SkillBracket[] {
    return SKILLS;
  }
}
