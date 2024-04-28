type Technology = {
  id: string,
  name: string,
  iconURL: string
}

export const createTechnology = (id: string, name: string, iconURL: string): Technology => {
  return {
    id,
    name,
    iconURL: iconURL
  };
};

export default Technology;
