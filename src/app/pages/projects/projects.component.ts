import { Component } from '@angular/core';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
