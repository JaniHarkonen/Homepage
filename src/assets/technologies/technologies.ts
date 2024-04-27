import Technology, { createTechnology } from "../../model/Technology";

const iconRoot = "assets/technologies/icons/";

export interface Technologies {
  [key: string]: Technology
}

export const TECHNOLOGIES: Technologies = {
  "angular": createTechnology("angular", "Angular", iconRoot + "angular-original.svg"),
  "typescript": createTechnology("typescript", "TypeScript", iconRoot + "typescript-original.svg"),
  "javascript": createTechnology("javascript", "JavaScript", iconRoot + "javascript-original.svg"),
  "react": createTechnology("react", "React", iconRoot + "react-original.svg"),
  "bootstrap": createTechnology("bootstrap", "Bootstrap", iconRoot + "bootstrap-original.svg"),
  "html5": createTechnology("html5", "HTML5", iconRoot + "html5-original-wordmark.svg"),
  "css3": createTechnology("css3", "CSS3", iconRoot + "css3-original-wordmark.svg"),
  "express": createTechnology("express", "Express", iconRoot + "express-original-wordmark.svg"),
  "java": createTechnology("java", "Java", iconRoot + "java-original.svg"),
  //SQL here
  "sqlite": createTechnology("sqlite", "SQLite", iconRoot + "sqlite-original.svg"),
  "aframe": createTechnology("aframe", "A-Frame", iconRoot + "A-Frame_logo.png"),
  "electron": createTechnology("electron", "Electron", iconRoot + "electron-original.svg"),
  "opengl": createTechnology("opengl", "OpenGL", iconRoot + "opengl-original.svg"),
  "nodejs": createTechnology("nodejs", "Node.js", iconRoot + "nodejs-original.svg")
};
