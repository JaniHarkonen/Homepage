import { Component, Input } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { nmod } from '../../../utils';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectInfo } from '../../../assets/projects/projects';
import { CONFIG } from '../../../pathConfig';

/**
 * Available description verbosities. Currently only brief and full
 * verbosities exist, though this is unlikely to change in the future.
 * 
 * `BRIEF` short, brief, description to get the gist of the project
 * 
 * `FULL` a full description of the project outlining some of the 
 * key techniques and technologies involved in developing it
 */
enum DescriptionVerbosity {
  BRIEF,
  FULL
}

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [TimelineComponent, HttpClientModule],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css'
})
export class ProjectCarouselComponent {
  public descriptionVerbosity: DescriptionVerbosity = DescriptionVerbosity.BRIEF;
  public selectedProjectIndex: number = 0;
  public selectedProject: any = {
    info: null,
    briefHTML: "",
    descriptionHTML: ""
  };

  private httpClient: HttpClient;

  @Input() projects: any;
  @Input() projectOrder: number[] = [];

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
    this.selectProject(0);
  }

  private fetchDescriptions(projectInfo: ProjectInfo): void {
    this.httpClient.get(
      CONFIG.paths.projects + projectInfo.briefURL, 
      { responseType: "text" }
    ).subscribe((data) => this.selectedProject.briefHTML = data);

    this.httpClient.get(
      CONFIG.paths.projects + projectInfo.descriptionURL,
      { responseType: "text" }
    ).subscribe((data) => this.selectedProject.descriptionHTML = data)
  }

  public advanceCarousel(advance: number): void {
    this.selectProject(this.selectedProjectIndex + advance);
  }

  public selectProject(index: number): void {
    this.selectedProjectIndex = nmod(index, this.projectOrder.length);
    this.selectedProject = {
      ...this.selectedProject,
      info: this.projects[this.projectOrder[this.selectedProjectIndex]] 
    }

    this.fetchDescriptions(this.selectedProject.info);
    this.descriptionVerbosity = DescriptionVerbosity.BRIEF;
  }

  public getVideoURL(): string {
    return CONFIG.paths.projects + this.selectedProject.info.videoURL;
  }


    // Lots of redundancy here for now, clean this up

  public toggleDescription(): void {
    if( this.descriptionVerbosity === DescriptionVerbosity.BRIEF )
    this.descriptionVerbosity = DescriptionVerbosity.FULL; 
    else
    this.descriptionVerbosity = DescriptionVerbosity.BRIEF;
  }

  public getDescriptionHTML(): string {
    if( this.descriptionVerbosity === DescriptionVerbosity.BRIEF )
    return this.selectedProject.briefHTML;
    else
    return this.selectedProject.descriptionHTML;
  }

  public getDescriptionButtonCaption(): string {
    if( this.descriptionVerbosity === DescriptionVerbosity.BRIEF )
    return "Read more";
    else
    return "Less";
  }
}
