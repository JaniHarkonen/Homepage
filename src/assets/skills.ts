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
      TECHNOLOGIES["sqlite"].id,
      TECHNOLOGIES["angular"].id,
      TECHNOLOGIES["typescript"].id,
      TECHNOLOGIES["express"].id,
    ]
  }
];

/*export const SKILLS: Skill[][] = [
  {
    technologyID: TECHNOLOGIES["javascript"].id,
    experience: "4+ years"
  },
  {
    technologyID: TECHNOLOGIES["java"].id,
    experience: "4+ years"
  },
  {
    technologyID: TECHNOLOGIES["html5"].id,
    experience: "4+ years"
  },
  {
    technologyID: TECHNOLOGIES["css3"].id,
    experience: "4+ years"
  },
  {
    technologyID: TECHNOLOGIES["nodejs"].id,
    experience: "4+ years"
  },
  {
    technologyID: TECHNOLOGIES["react"].id,
    experience: "3+ years"
  },
  {
    technologyID: TECHNOLOGIES["electron"].id,
    experience: "3+ years"
  },
  {
    technologyID: TECHNOLOGIES["opengl"].id,
    experience: "< 1 year"
  },
  {
    technologyID: TECHNOLOGIES["aframe"].id,
    experience: "< 1 year"
  },
  {
    technologyID: TECHNOLOGIES["bootstrap"].id,
    experience: "< 1 year"
  },
  {
    technologyID: TECHNOLOGIES["sqlite"].id,
    experience: "< 1 year"
  },
  {
    technologyID: TECHNOLOGIES["angular"].id,
    experience: "< 1 year"
  },
  {
    technologyID: TECHNOLOGIES["typescript"].id,
    experience: "< 1 year"
  },
  {
    technologyID: TECHNOLOGIES["express"].id,
    experience: "< 1 year"
  }
];
*/