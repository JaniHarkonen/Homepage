import { Component, Input } from '@angular/core';
import { TECHNOLOGIES, Technology } from '../../../assets/technologies/technologies';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-technology-stack',
  standalone: true,
  imports: [NgFor],
  templateUrl: './technology-stack.component.html',
  styleUrl: './technology-stack.component.css'
})
export class TechnologyStackComponent {
  @Input() order: string[] = [];

  public getTechnologies(): Technology[] {
    return this.order.map((techID) => TECHNOLOGIES[techID]);
  }
}
