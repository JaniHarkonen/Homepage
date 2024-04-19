export type ProjectStatus = {
  readonly title: string
}

export type ProjectInfo = {
  readonly index: number,
  readonly name: string,
  readonly briefURL: string,
  readonly descriptionURL: string,
  readonly videoURL: string
  //readonly status: ProjectStatus
}

const createProject = (
  index: number, 
  name: string, 
  briefURL: string, 
  descriptionURL: string,
  videoURL: string
): ProjectInfo => {
  return {
    index,
    name,
    briefURL,
    descriptionURL,
    videoURL
  };
}

export const PROJECTS = {
  0: createProject(
    0, 
    "JOHNEngine", 
    "johnengine/brief.html", 
    "johnengine/desc.html",
    "testing/test.mp4"
  ),
  1: createProject(
    1, 
    "Editor2D2", 
    "editor2d2/brief.html", 
    "editor2d2/desc.html",
    "testing/test2.mp4"
  ),
  2: createProject(
    2, 
    "DumpEmSuite", 
    "dumpem-suite/brief.html", 
    "dumpem-suite/desc.html",
    "testing/test.mp4"
  ),
  3: createProject(
    3, 
    "MerchBetter", 
    "merch-better/brief.html", 
    "merch-better/desc.html",
    "testing/test2.mp4"
  )
}
