export type ProjectStatus = {
  readonly title: string
};

export type ProjectInfo = {
  readonly index: number,
  readonly name: string,
  readonly description: string
  //readonly status: ProjectStatus
}

const createProject = (index: number, name: string, description: string): ProjectInfo => {
  return {
    index,
    name,
    description
  };
}

export const PROJECTS = {
  0: createProject(0, "JOHNEngine", "A multi-threaded 3D Java game engine built using LWJGL and OpenGL."),
  1: createProject(1, "Editor2D2", "Generic 2D-level editor that can be used to create levels for tile-based 2D games. Due to its modular nature it can easily be extended and adapted to the needs of any particular 2D-game project."),
  2: createProject(2, "DumpEmSuite", "Electron-based investment tool I built to aid myself with filtering and analysing potential investment candidates. An SQL-based database is used to store the company specific stock data."),
  3: createProject(3, "MerchBetter", "One of my earlier Electron applications. A utilitiy tool that helps you keep notes of which items you're flipping in RuneScape.")
}
