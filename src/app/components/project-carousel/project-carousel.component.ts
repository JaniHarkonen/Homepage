import { Component, Input, SecurityContext } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { nmod } from '../../../utils';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Projects } from '../../../assets/projects/projects';
import { CONFIG } from '../../../pathConfig';
import { ExpandCollapseAnimation } from '../../animations/expand-collapse.anim';

import ProjectInfo from '../../../model/ProjectInfo';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * Holds the state of the currently selected project including its index
 * number (in the order list) and project information object as well as 
 * the strings holding the inner HTMLs of the brief and the full
 * descriptions.
 */
type ProjectSelection = {
  index: number,
  projectInfo: ProjectInfo | null,
  briefHTML: string,
  descriptionHTML: string
}

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [
    TimelineComponent,
    HttpClientModule
  ],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css',
  animations: [ExpandCollapseAnimation()]
})
export class ProjectCarouselComponent {
  /**
   * Whether the full description or the brief description of the 
   * project is to be shown.
   */
  private showFullDescription: boolean;

  /**
   * State that contains the information as well as the metadata of 
   * the currently displayed project.
   */
  private projectSelection: ProjectSelection;

  /**
   * HTTP client for fetching project information from external 
   * HTML-files.
   */
  private httpClient: HttpClient;

  /**
   * DOM sanitizer is used to bypass security restrictions in order
   * to access the YouTube-links of the project demonstration videos.
   * The demonstration URLs are expected to be "safe".
   */
  private domSanitizer: DomSanitizer;

  @Input() projects!: Projects;
  @Input() order: string[] = [];

  constructor(httpClient: HttpClient, domSanitizer: DomSanitizer) {
    this.showFullDescription = false;
    this.projectSelection = {
      index: 0,
      projectInfo: null,
      briefHTML: "",
      descriptionHTML: ""
    };
    this.httpClient = httpClient;
    this.domSanitizer = domSanitizer;
  }

  ngOnInit(): void {
    this.selectProject(0);
  }


  /**
   * Fetches the inner HTMLs of the brief and full descriptions for a 
   * given project 'projectInfo'. If the project is null, a warning 
   * will be logged in the console without attempting to fetch.
   * 
   * @param projectInfo Project information object that contains the URL for 
   * the brief and full descriptions that are to be fetched.
   */
  private fetchDescriptions(projectInfo: ProjectInfo | null): void {
    if( projectInfo == null )
    {
      console.error("WARNING: Trying to fetch the description of a project with null ProjectInfo!");
      return;
    }

      // Fetch brief description
    this.httpClient.get(
      CONFIG.paths.projects + projectInfo.briefURL, 
      { responseType: "text" }
    ).subscribe((data) => this.projectSelection.briefHTML = data);

      // Fetch full description
    this.httpClient.get(
      CONFIG.paths.projects + projectInfo.descriptionURL,
      { responseType: "text" }
    ).subscribe((data) => this.projectSelection.descriptionHTML = data)
  }

  /**
   * Advances the project carousel by a given number of projects either to
   * the right (positive advance) or the left (negative advance).
   * 
   * @param advance Number of projects to advance. Positive advance moves
   * the carousel to the right, whereas a negative one moves it to the 
   * left.
   */
  public advanceCarousel(advance: number): void {
    this.selectProject(this.projectSelection.index + advance);
  }

  /**
   * Selects a project to be displayed in the project carousel given its
   * index (position) in the project order list. If the project index 
   * exceeds the bounds of the order list, it will be wrapped.
   * 
   * @param index Position of the project in the order list.
   */
  public selectProject(index: number): void {
    this.projectSelection.index = nmod(index, this.order.length);
    this.projectSelection = {
      ...this.projectSelection,
      projectInfo: this.projects[this.order[this.projectSelection.index]] 
    }

    this.fetchDescriptions(this.projectSelection.projectInfo);
    this.showFullDescription = false;
  }

  /**
   * @returns The URL to the demonstration video of the currently selected
   * project as a SafeUrl-instance. DOM sanitizer will be used to bypass 
   * security restrictions as the URLs are assumed to be safe.
   */
  public getVideoURL(): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.projectSelection.projectInfo?.videoURL || ""
    );
  }
  
  /**
   * Toggles the length of the description between the full and the brief one.
   */
  public toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }

  /**
   * @returns The innerHTML of the currently selected project description as a 
   * string.
   */
  public getDescriptionHTML(): string {
    return (
      (this.showFullDescription) ? 
      this.projectSelection.descriptionHTML : this.projectSelection.briefHTML
    );
  }

  /**
   * @returns The caption of the expanding button on the project desription as 
   * a string.
   */
  public getDescriptionButtonCaption(): string {
    return (this.showFullDescription) ? "Less" : "Read more";
  }

  /**
   * @returns The name of the currently selected project.
   */
  public getProjectName(): string {
    return this.projectSelection.projectInfo?.name || "";
  }

  /**
   * @returns The index (position) of the currently selected project in the 
   * order list.
   */
  public getSelectionIndex(): number {
    return this.projectSelection.index;
  }

  /**
   * @returns The order list where the IDs of the projects available for browsing
   * are stored in the order that they are to appear in the project carousel.
   */
  public getOrder(): string[] {
    return this.order;
  }

  /**
   * @returns The link to the online repository of the currently selected project.
   */
  public getProjectLink(): string {
    return this.projectSelection.projectInfo?.repoURL || "";
  }

  /**
   * @returns Whether the full description of the project is to be shown.
   */
  public isFullDescriptionShown(): boolean {
    return this.showFullDescription;
  }
}
