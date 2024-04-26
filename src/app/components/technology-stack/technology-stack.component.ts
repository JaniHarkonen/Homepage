import { Component, Input } from '@angular/core';
import { TECHNOLOGIES, Technology } from '../../../assets/technologies/technologies';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-technology-stack',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './technology-stack.component.html',
  styleUrl: './technology-stack.component.css'
})
export class TechnologyStackComponent {
  @Input() order: string[] = [];
  @Input() experienceLevels: string[] | undefined;

  public getTechnologies(): Technology[] {
    return this.order.map((techID) => TECHNOLOGIES[techID]);
  }
}
