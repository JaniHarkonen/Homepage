export type Tab = {
  readonly id: string,
  readonly caption: string,
  readonly routerLink: string
}

export type Tabs = {
  [key: string]: Tab
}

export const createTab = (id: string, caption: string, routerLink: string): Tab => {
  return {
    id,
    caption,
    routerLink
  };
};

export const TABS: Tabs = {
  "about": createTab("about", "About me", "about"),
  "projects": createTab("projects", "Projects", "projects"),
  "contact": createTab("contact", "Contact me", "contact")
};
