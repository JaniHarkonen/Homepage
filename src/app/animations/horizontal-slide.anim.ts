import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";

export const HorizontalSlideAnimation: AnimationTriggerMetadata = trigger("horizontalSlide", [
  state("still", style({ transform: "translateX(0)" })),
  state("slide", style({ transform: "translateX(-100%)" })),
  transition("still => slide", [animate("1s ease-out")]),
  transition("slide => still", [animate("1s ease-in")])
]);
