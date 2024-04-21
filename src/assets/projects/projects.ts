export class ProjectStatus {
  public static CANCELLED = new ProjectStatus("cancelled");
  public static ON_HOLD = new ProjectStatus("on-hold");
  public static IN_PROGRESS = new ProjectStatus("in-progress");
  public static COMPLETE = new ProjectStatus("complete");

  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public getKey(): string {
    return this.key;
  }
}

export type ProjectInfo = {
  readonly id: string,
  readonly name: string,
  readonly briefURL: string,
  readonly descriptionURL: string,
  readonly videoURL: string
  readonly status: ProjectStatus
}

export type Projects = {
  [key: string]: ProjectInfo
}

export const createProject = (
  id: string, 
  name: string, 
  briefURL: string, 
  descriptionURL: string,
  videoURL: string,
  status: ProjectStatus = ProjectStatus.COMPLETE
): ProjectInfo => {
  return {
    id,
    name,
    briefURL,
    descriptionURL,
    videoURL,
    status
  };
}

export const PROJECTS: Projects = {
  "johnengine": createProject(
    "johnengine", 
    "JOHNEngine", 
    "johnengine/brief.html", 
    "johnengine/desc.html",
    "testing/test.mp4",
    // status here
  ),
  "editor2d2": createProject(
    "editor2d2", 
    "Editor2D2", 
    "editor2d2/brief.html", 
    "editor2d2/desc.html",
    "testing/test2.mp4",
    // status here
  ),
  "dumpemsuite": createProject(
    "dumpemsuite", 
    "DumpEmSuite", 
    "dumpem-suite/brief.html", 
    "dumpem-suite/desc.html",
    "testing/test.mp4",
    // status here
  ),
  "merchbetter": createProject(
    "merchbetter", 
    "MerchBetter", 
    "merch-better/brief.html", 
    "merch-better/desc.html",
    "testing/test2.mp4",
    // status here
  )
}
