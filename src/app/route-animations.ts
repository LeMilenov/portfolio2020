import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group,
  } from '@angular/animations';

      export const slider =
      trigger('routeAnimations', [
        transition('isRight => isFarRight', slideTo('right') ),
        transition('isFarRight => isRight', slideTo('left','isFarRight') ),
        transition('isRight => *', slideTo('left') ),
        transition('isLeft => *', slideTo('right') ),
        transition('* => isLeft', slideTo('left') ),
        transition('* => isRight', slideTo('right') )
      ]);
    
    function slideTo(direction, name?) {
      const optional = { optional: true };
      return [
        query(':enter, :leave', [
          style({
            position: 'relative',
            top: 0,
            [direction]: 0,
            width: '100%',           
          })
        ], optional),
        query(':enter', [
          style({ [direction]: '-100%'})
        ]),
        group([
          query(':leave', [
            animate('600ms ease-out', style({ [direction]: '100%' }))
          ], optional),
          query(':enter', [
            animate('600ms ease-out', style({ [direction]: '0%'}))
          ])
        ]),
        // Normalize the page style... Might not be necessary
    
        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
      ];
    }