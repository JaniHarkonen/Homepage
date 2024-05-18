import ContactInfo from "../model/ContactInfo";
import { createSocialMediaPlatform } from "../model/SocialMediaPlatform";


export const CONTACT_INFO: ContactInfo = {
  socialMediaPlatforms: [
    createSocialMediaPlatform(
      "github", 
      "I'm constantly working on programming projects, some of which you can find on my GitHub: ",
      "GitHub", 
      "https://github.com/JaniHarkonen", 
      "github-mark.svg"
    ),
    createSocialMediaPlatform(
      "linkedin", 
      "Shoot me a message on LinkedIn: ",
      "LinkedIn", 
      "https://fi.linkedin.com/in/jani-härkönen-1975281aa", 
      "LI-In-Bug.png"
    )
  ],
  email: "jani.harkonen.work@gmail.com"
}
