import {
    trigger,
    style,
    animate,
    transition,
    query,
    group,
  } from '@angular/animations';

    export const slider =
      trigger('routeAnimations', [
        transition('isRight => isFarRight', slideTo('right') ),
        transition('isFarRight => isRight', slideTo('left') ),
        transition('isRight => *', slideTo('left') ),
        transition('isLeft => *', slideTo('right') ),
        transition('* => isLeft', slideTo('left') ),
        transition('* => isRight', slideTo('right') )
      ]);
    
    function slideTo(direction:any) {
      const optional = { optional: true };
      return [
        query(':enter, :leave', [
          style({
            position: 'relative',
            top: 0,
            opacity:0,
            background:'red',
            [direction]: 0,
            width: '50%',           
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
        ])       
      ];
    }