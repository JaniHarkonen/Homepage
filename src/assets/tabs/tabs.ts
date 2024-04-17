export type Tab = {
  readonly index: Number,
  readonly key: string,
  readonly caption: string
}

const createTab = (index: Number, key: string, caption: string): Tab => {
  return {
    index,
    key,
    caption
  };
};

export const TABS = {
  0: createTab(0, "about", "About me"),
  1: createTab(1, "projects", "Projects"),
  2: createTab(2, "contact", "Contact me")
};
