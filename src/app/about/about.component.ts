import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(public data:DataService) { }

  ngOnInit() {
    this.openBoxAnimation();
  }
  public openBoxAnimation(){
    anime({
      targets:'#innerShadow',
      top:["0","3rem"],
      left:["0","3rem"],
      duration:2000,
      easing:'easeInOutCubic',
      autoplay:true
    });
  }
}
