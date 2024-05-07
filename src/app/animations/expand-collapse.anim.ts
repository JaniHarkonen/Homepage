import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export const ExpandCollapseAnimation = (durationMS: number = 500): AnimationTriggerMetadata => {
  return trigger("expandCollapse", [
    state("expanded", style({ maxHeight: "100%" })),
    transition("* => expanded", [
      animate("0s", style({ overflowY: "hidden" })),
      animate(durationMS + "ms ease-out")
    ])
  ]);
};