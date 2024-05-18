import SkillBracket from "../model/SkillBracket";
import { TECHNOLOGIES } from "./technologies/technologies";

export const SKILLS: SkillBracket[] = [
  {
    description: "4+ years",
    technologyIDs: [
      TECHNOLOGIES["javascript"].id,
      TECHNOLOGIES["java"].id,
      TECHNOLOGIES["html5"].id,
      TECHNOLOGIES["css3"].id,
      TECHNOLOGIES["nodejs"].id,
    ]
  },
  {
    description: "3+ years",
    technologyIDs: [
      TECHNOLOGIES["react"].id,
      TECHNOLOGIES["electron"].id
    ]
  },
  {
    description: "<1 years",
    technologyIDs: [
      TECHNOLOGIES["opengl"].id,
      TECHNOLOGIES["aframe"].id,
      TECHNOLOGIES["bootstrap"].id,
      TECHNOLOGIES["sql"].id,
      TECHNOLOGIES["sqlite"].id,
      TECHNOLOGIES["angular"].id,
      TECHNOLOGIES["typescript"].id,
      TECHNOLOGIES["express"].id,
    ]
  }
];
