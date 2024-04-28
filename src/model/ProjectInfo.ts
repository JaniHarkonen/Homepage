import ProjectStatus from "./ProjectStatus";

type ProjectInfo = {
  readonly id: string,
  readonly name: string,
  readonly briefURL: string,
  readonly descriptionURL: string,
  readonly videoURL: string,
  readonly repoURL: string,
  readonly status: ProjectStatus
}

export const createProject = (
  id: string, 
  name: string, 
  briefURL: string, 
  descriptionURL: string,
  videoURL: string,
  repoURL: string,
  status: ProjectStatus = ProjectStatus.COMPLETE
): ProjectInfo => {
  return {
    id,
    name,
    briefURL,
    descriptionURL,
    videoURL,
    repoURL,
    status
  };
}

export default ProjectInfo;
