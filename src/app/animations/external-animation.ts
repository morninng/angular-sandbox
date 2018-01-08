import { animation, animate, style } from '@angular/animations';

export const externalAnimation = animation([
  animate(1000, style({
    opacity: 1
  }))
]);
