import { Component,     OnInit,     Output,     EventEmitter, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: "app-home", 
  templateUrl: "./home.component.html", 
  styleUrls: ["./home.component.scss"], 
})
export class HomeComponent implements OnInit {  
  public positionX =0;
  public positionY =0;
  
  
  constructor() {}
  ngOnInit() {  }
 /**
   * add event handling to the mouse
   */
  // @HostListener('document:mousemove', ['$event']) 
  // onMouseMove(e){
  //   const offSetX = 0;
  //   const offSetY = 0; 
  //   this.positionX = (window.innerWidth / 10 - e.x) /100 + offSetX;
  //   this.positionY = e.y / 100 + offSetY;
  // }

}
