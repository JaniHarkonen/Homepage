type Tab = {
  readonly id: string,
  readonly caption: string,
  readonly routerLink: string
}

export const createTab = (id: string, caption: string, routerLink: string): Tab => {
  return {
    id,
    caption,
    routerLink
  };
};

export default Tab;
