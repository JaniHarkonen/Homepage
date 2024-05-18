import Tab, { createTab } from "../../model/Tab";

export type Tabs = {
  [key: string]: Tab
}

export const TABS: Tabs = {
  "about": createTab("about", "About me", "about"),
  "projects": createTab("projects", "Projects", "projects"),
  "contact": createTab("contact", "Contact me", "contact")
};
