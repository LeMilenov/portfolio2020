import { Component, OnInit, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // back to top button
  // isShow: boolean;
  // topPosToStartShowing = 100;
  
  

  constructor() { }

  ngOnInit() {}

  openNav() {
    document.getElementById("myNav").style.width = "50%";
    anime({
      targets:'#dark-screen',
      opacity:0.8,
      zIndex: 1,
      duration:100,
      easing:'linear',
      autoplay:true
    });
  }
  
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
    anime({
      targets:'#dark-screen',
      opacity:0,
      zIndex: -1,
      duration:100,
      easing:'linear',
      autoplay:true
    });
  }
  openContact(){
    
  }
  // @HostListener('window:scroll')
  // checkScroll() {
      
  //   // window의 scroll top
  //   // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //   console.log('[scroll]', scrollPosition);
    
  //   if (scrollPosition >= this.topPosToStartShowing) {
  //     this.isShow = true;
  //   } else {
  //     this.isShow = false;
  //   }
  // }

  // // TODO: Cross browsing
  // gotoTop() {
  //   window.scroll({ 
  //     top: 0, 
  //     left: 0, 
  //     behavior: 'smooth' 
  //   });
  // }
}
