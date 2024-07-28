import { Component } from '@angular/core';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';
import { PROJECTS, Projects } from '../../../assets/projects/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private projects: Projects = PROJECTS;
  private projectOrder: string[] = [
    PROJECTS["articlesum"].id,
    //PROJECTS["johnengine"].id,
    //PROJECTS["editor2d2"].id,
    PROJECTS["dumpemsuite"].id,
    PROJECTS["merchbetter"].id
  ];

  public getProjects(): Projects {
    return this.projects;
  }

  public getOrder(): string[] {
    return this.projectOrder;
  }
}
