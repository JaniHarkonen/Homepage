import { Component, Input } from '@angular/core';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';
import { PROJECTS } from '../../../assets/projects/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects: any = PROJECTS;
  @Input() projectOrder: number[] = [0, 1, 2, 3];
}
