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
        transition('isRight => isFarRight',  [
          query(':enter, :leave', [
            style({
              position: 'relative',
              top: 0,
              opacity:0,
              background:'red',
              right: 0,
              width: '50%',           
            })
          ]),
          query(':enter', [
            style({ right: '-100%'})
          ]),
          group([
            query(':leave', [
              animate('600ms ease-out', style({right: '100%' }))
            ]),
            query(':enter', [
              animate('600ms ease-out', style({ right: '0%'}))
            ])
          ])       
        ]),

        transition('isFarRight => isRight', [
          query(':enter, :leave', [
            style({
              position: 'relative',
              top: 0,
              opacity:0,
              background:'red',
              left: 0,
              width: '50%',           
            })
          ]),
          query(':enter', [
            style({ left: '-100%'})
          ]),
          group([
            query(':leave', [
              animate('600ms ease-out', style({left: '100%' }))
            ]),
            query(':enter', [
              animate('600ms ease-out', style({ left: '0%'}))
            ])
          ])       
        ] ),
        transition('isRight => *', [
          query(':enter, :leave', [
            style({
              position: 'relative',
              top: 0,
              opacity:0,
              background:'red',
              left: 0,
              width: '50%',           
            })
          ]),
          query(':enter', [
            style({ left: '-100%'})
          ]),
          group([
            query(':leave', [
              animate('600ms ease-out', style({left: '100%' }))
            ]),
            query(':enter', [
              animate('600ms ease-out', style({ left: '0%'}))
            ])
          ])       
        ]  ),
        transition('isLeft => *', [
          query(':enter, :leave', [
            style({
              position: 'relative',
              top: 0,
              opacity:0,
              background:'red',
              right: 0,
              width: '50%',           
            })
          ]),
          query(':enter', [
            style({ right: '-100%'})
          ]),
          group([
            query(':leave', [
              animate('600ms ease-out', style({right: '100%' }))
            ]),
            query(':enter', [
              animate('600ms ease-out', style({ right: '0%'}))
            ])
          ])       
        ] ),
        transition('* => isLeft', [
          query(':enter, :leave', [
            style({
              position: 'relative',
              top: 0,
              opacity:0,
              background:'red',
              left: 0,
              width: '50%',           
            })
          ]),
          query(':enter', [
            style({ left: '-100%'})
          ]),
          group([
            query(':leave', [
              animate('600ms ease-out', style({left: '100%' }))
            ]),
            query(':enter', [
              animate('600ms ease-out', style({ left: '0%'}))
            ])
          ])       
        ] ),
        transition('* => isRight', [
          query(':enter, :leave', [
            style({
              position: 'relative',
              top: 0,
              opacity:0,
              background:'red',
              right: 0,
              width: '50%',           
            })
          ]),
          query(':enter', [
            style({ right: '-100%'})
          ]),
          group([
            query(':leave', [
              animate('600ms ease-out', style({right: '100%' }))
            ]),
            query(':enter', [
              animate('600ms ease-out', style({ right: '0%'}))
            ])
          ])       
        ] )
      ]);
    
    // export function slideTo(direction:any) {
    //   const optional = { optional: true };
    //   return [
    //     query(':enter, :leave', [
    //       style({
    //         position: 'relative',
    //         top: 0,
    //         opacity:0,
    //         background:'red',
    //         [direction]: 0,
    //         width: '50%',           
    //       })
    //     ], optional),
    //     query(':enter', [
    //       style({ [direction]: '-100%'})
    //     ]),
    //     group([
    //       query(':leave', [
    //         animate('600ms ease-out', style({ [direction]: '100%' }))
    //       ], optional),
    //       query(':enter', [
    //         animate('600ms ease-out', style({ [direction]: '0%'}))
    //       ])
    //     ])       
    //   ];
    // }