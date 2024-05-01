import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export const ExpandCollapseAnimation: AnimationTriggerMetadata = trigger("expandCollapse", [
  state("expanded", style({ maxHeight: "100%" })),
  transition("* => expanded", [
    animate("0s", style({ overflowY: "hidden" })),
    animate("500ms ease-out")
  ])
]);
