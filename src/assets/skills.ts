import SkillBracket from "../model/SkillBracket";
import { TECHNOLOGIES } from "./technologies/technologies";

export const SKILLS: SkillBracket[] = [
  {
    description: "4+ years",
    technologyIDs: [
      TECHNOLOGIES["javascript"].id,
      TECHNOLOGIES["react"].id,
      TECHNOLOGIES["java"].id,
      TECHNOLOGIES["html5"].id,
      TECHNOLOGIES["css3"].id,
      TECHNOLOGIES["nodejs"].id,
      TECHNOLOGIES["electron"].id
    ]
  },
  {
    description: "1+ years",
    technologyIDs: [
      TECHNOLOGIES["typescript"].id,
      TECHNOLOGIES["sql"].id,
      TECHNOLOGIES["sqlite"].id
    ]
  },
  {
    description: "<1 years",
    technologyIDs: [
      TECHNOLOGIES["golang"].id,
      TECHNOLOGIES["opengl"].id,
      TECHNOLOGIES["aframe"].id,
      TECHNOLOGIES["bootstrap"].id,
      TECHNOLOGIES["angular"].id,
      TECHNOLOGIES["express"].id,
    ]
  }
];
