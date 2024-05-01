import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export const ExpandCollapseAnimation: AnimationTriggerMetadata = trigger("expandCollapse", [
  state("expanded", style({ maxHeight: "100%" })),
  /*state("collapsed", style({ maxHeight: "30%", overflowY: "auto" })),*/
  /*transition("expanded => collapsed", [animate("1s ease-in")]),*/
  transition("* => expanded", [
    animate("0s", style({ overflowY: "hidden" })),
    animate("1s ease-out")
  ])
]);
