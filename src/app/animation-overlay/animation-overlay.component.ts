import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-animation-overlay',
  templateUrl: './animation-overlay.component.html',
  styleUrls: ['./animation-overlay.component.scss']
})
export class AnimationOverlayComponent implements OnInit {

  constructor(private router:Router) {
    router.events.subscribe((val) =>{
      if(val instanceof NavigationEnd){
        this.createAnimation();
      }
    })
   }

  ngOnInit() {
    //everytime we change route, starts animation
  
  }
  /*
   * create the moving animation
   */
  private createAnimation():any{
    return  anime.timeline({
      targets:'#animation-overlay',
      easing:'linear',
      autoplay:true,
      direction: 'alternate',
      opacity:1,
      zIndex:10,
      backgroundColor:'black',
      duration: 10000
    });
    
    

  }

}
