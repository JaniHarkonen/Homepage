import { CONFIG } from "../pathConfig";

type SocialMediaPlatform = {
  id: string,
  shoutOut: string, 
  name: string,
  url: string,
  iconURL: string
}

export const createSocialMediaPlatform = (
  id: string, 
  shoutOut: string, 
  name: string, 
  url: string,
  iconURL: string
): SocialMediaPlatform => {
  return {
    id,
    shoutOut,
    name,
    url,
    iconURL: CONFIG.paths["platform-icons"] + iconURL
  };
};

export default SocialMediaPlatform;
