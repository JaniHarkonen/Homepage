const iconRoot = "assets/technologies/icons/";

export type Technology = {
  id: string,
  name: string,
  iconURL: string
}

export const createTechnology = (id: string, name: string, iconURL: string): Technology => {
  return {
    id,
    name,
    iconURL: iconRoot + iconURL
  };
};

export interface Technologies {
  [key: string]: Technology
}

export const TECHNOLOGIES: Technologies = {
  "angular": createTechnology("angular", "Angular", "angular-original.svg"),
  "typescript": createTechnology("typescript", "TypeScript", "typescript-original.svg"),
  "javascript": createTechnology("javascript", "JavaScript", "javascript-original.svg"),
  "react": createTechnology("react", "React", "react-original.svg"),
  "bootstrap": createTechnology("bootstrap", "Bootstrap", "bootstrap-original.svg"),
  "html5": createTechnology("html5", "HTML5", "html5-original-wordmark.svg"),
  "css3": createTechnology("css3", "CSS3", "css3-original-wordmark.svg"),
  "express": createTechnology("express", "Express", "express-original-wordmark.svg"),
  "java": createTechnology("java", "Java", "java-original.svg"),
  //SQL here
  "sqlite": createTechnology("sqlite", "SQLite", "sqlite-original.svg"),
  "aframe": createTechnology("aframe", "A-Frame", "A-Frame_logo.png"),
  "electron": createTechnology("electron", "Electron", "electron-original.svg"),
  "opengl": createTechnology("opengl", "OpenGL", "opengl-original.svg"),
  "nodejs": createTechnology("nodejs", "Node.js", "nodejs-original.svg")
};
