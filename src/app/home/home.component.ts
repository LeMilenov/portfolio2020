import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private sphereEl;
  private spherePathEls;
  private pathLength;
  
  public possibleDisks = [0,1,2,3,4,5];
  public selectedDisk  = 0;

  constructor() { }
  ngOnInit() {  }

  ngAfterViewInit() :void{
    this.sphereEl = document.querySelector('.sphere-animation');
    this.spherePathEls = this.sphereEl.querySelectorAll('.sphere path');
    this.pathLength = this.spherePathEls.length;
    if(this.sphereEl){
      this.sphereAnimation();
    }    
  }

  private openDisk(event : MatRadioChange){
    var wantedDisk = event.value;
    //disable the other radiobuttons
    //animation - close opened disk
    //animation - open wanted disk
    // re-enable the radiobuttons
    var openAnimation = anime({
      targets: this.spherePathEls[wantedDisk],
      translateX: 270,
      direction: 'alternate',
      loop: false,
      autoplay: false,
      easing: 'easeInOutSine'
    });
    openAnimation.play();
  }
  private sphereAnimation(){     
    var sphereEl = this.sphereEl;
    var spherePathEls = this.spherePathEls;
    var pathLength = this.pathLength;
    var hasStarted = false;
    var aimations = [];
    var accentMain = "rgb(29, 179, 109)";
    var accentSecondary = "rgb(206, 206, 206)";
    this.fitElementToParent(sphereEl);

    //begin and update function need a local variable somehow ??
    var breathAnimation = anime({
      begin: function() {
        for (var i = 0; i < pathLength; i++) {
          aimations.push(anime({
            targets: spherePathEls[i],
            stroke: {value: [accentSecondary, accentMain], duration: 500},
            translateX: [2, -4],
            translateY: [2, -4],
            easing: 'easeOutQuad',
            autoplay: false
          }));
        }
      },
      update: function(ins) {
        aimations.forEach(function(animation, i) {
          var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
          animation.seek(animation.duration * percent);
        });
      },
      duration: Infinity,
      autoplay: false
    });
  
    var introAnimation = anime.timeline({
      autoplay: false
    }).add({
      targets: spherePathEls,
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 3900,
        easing: 'easeInOutCirc',
        delay: anime.stagger(190, {direction: 'reverse'})
      },
      duration: 2000,
      delay: anime.stagger(60, {direction: 'reverse'}),
      easing: 'linear'
    }, 0);
  
    var shadowAnimation = anime({
      targets: '#sphereGradient',
      x1: '25%',
      x2: '25%',
      y1: '0%',
      y2: '75%',
      duration: 30000,
      easing: 'easeOutQuint',
      autoplay: false
    },0);
  
    breathAnimation.play();
    introAnimation.play();
    shadowAnimation.play();
  }

  private fitElementToParent(el, padding = 0) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
     
      timeout = setTimeout(()=>{
        anime.set(el, {scale: ratio})
      }, 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }
  
}
