export const nmod = (x: number, max: number): number => {
  return (x % max + max) % max;
};