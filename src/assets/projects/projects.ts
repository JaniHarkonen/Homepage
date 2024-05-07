import ProjectStatus from "../../model/ProjectStatus";
import ProjectInfo, { createProject } from "../../model/ProjectInfo";

export type Projects = {
  [key: string]: ProjectInfo
}

export const PROJECTS: Projects = {
  "johnengine": createProject(
    "johnengine", 
    "JOHNEngine", 
    "johnengine/brief.html", 
    "johnengine/desc.html",
    "https://www.youtube.com/embed/01rXk7iRDwg",
    "https://github.com/JaniHarkonen/JOHNEngine"
    // status here
  ),
  "editor2d2": createProject(
    "editor2d2", 
    "Editor2D2", 
    "editor2d2/brief.html", 
    "editor2d2/desc.html",
    "https://www.youtube.com/embed/01rXk7iRDwg",
    "https://github.com/JaniHarkonen/Editor2D2"
    // status here
  ),
  "dumpemsuite": createProject(
    "dumpemsuite", 
    "DumpEmSuite", 
    "dumpem-suite/brief.html", 
    "dumpem-suite/desc.html",
    "https://www.youtube.com/embed/01rXk7iRDwg",
    "https://github.com/JaniHarkonen/DumpEmSuite"
    // status here
  ),
  "merchbetter": createProject(
    "merchbetter", 
    "MerchBetter", 
    "merch-better/brief.html", 
    "merch-better/desc.html",
    "https://www.youtube.com/embed/01rXk7iRDwg",
    "https://github.com/JaniHarkonen/MerchBetter"
    // status here
  )
}
