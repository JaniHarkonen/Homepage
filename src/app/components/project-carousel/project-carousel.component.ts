import { Component, Input } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { nmod } from '../../../utils';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css'
})
export class ProjectCarouselComponent {
  public selectedProjectIndex: number = 0;
  public selectedProject: any = null;

  @Input() projects: any;
  @Input() projectOrder: number[] = [];

  ngOnInit() {
    this.selectProject(0);
  }

  public advanceCarousel(advance: number): void {
    this.selectProject(this.selectedProjectIndex + advance);
  }

  public selectProject(index: number): void {
    this.selectedProjectIndex = nmod(index, this.projectOrder.length);
    this.selectedProject = this.projects[this.projectOrder[this.selectedProjectIndex]];
  }
}
