import { Component } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css'
})
export class ProjectCarouselComponent {

}
