import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  sphereEl: any;
  spherePathEls: any[];
  pathLength: any;
  breathAnimation: any;
  introAnimation: any;
  shadowAnimation: any;

  constructor() { }
  ngOnInit() {  }

  ngAfterViewInit(){
    //connect the DOM to the script
    this.sphereEl = document.querySelector('.sphere-animation');
    //use reverse so I have access from top -> bottom of paths 
    this.spherePathEls = Array.from(this.sphereEl.querySelectorAll('.sphere path')).reverse();
    this.pathLength = this.spherePathEls.length;
    //if we get it, we start the animations
    if(this.sphereEl){
      this.initSphereAnimation();
    }
    //we open the first disk
    // this.openDisk(this.NUMBER_OF_DISKS_OFFSET);
  }
  /**
   * creates the basic animations for the svg sphere
   * use var objects for the begin / update :function()
   */
  private initSphereAnimation(){     
    var sphereEl = this.sphereEl;
    var spherePathEls = this.spherePathEls;    
    this.fitElementToParent(sphereEl);

    
    this.initBreathAnimation(spherePathEls);
    this.initIntroAnimation(spherePathEls);
    this.initShadowAnimation();
  
  
    this.playSphereAnimation();   
  }
  /**
   * create breathing animation
   * @param spherePathEls 
   */
  private initBreathAnimation( spherePathEls: any[]){
    var pathLength = this.pathLength;
    var hasStarted = false;
    var animations = [];
    var accentMain = "rgb(29, 179, 109)";
    var accentSecondary = "rgb(206, 206, 206)";
  //begin and update function need a local variable somehow ??
  this.breathAnimation = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        //animate every path except the opendisk        
        animations.push(anime({
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
      animations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });
  }
  /**
   * create introAnimation
   * @param spherePathEls 
   */
  private initIntroAnimation( spherePathEls: any[]){
    this.introAnimation = anime.timeline({
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
  }
  /**
   * create shadow animation
   */
  private initShadowAnimation(){    
    this.shadowAnimation = anime({
      targets: '#sphereGradient',
      x1: '25%',
      x2: '25%',
      y1: '0%',
      y2: '75%',
      duration: 30000,
      easing: 'easeOutQuint',
      autoplay: false
    },0);
  }
  /**
   * play all animations
   */
  private playSphereAnimation(){
    if(this.breathAnimation && this.introAnimation && this.shadowAnimation){
      this.breathAnimation.play();
      this.introAnimation.play();
      this.shadowAnimation.play();
    }
  }
  private pauseSphereAnimation(){
    if(this.breathAnimation && this.introAnimation && this.shadowAnimation){
      this.breathAnimation.pause();
      this.introAnimation.pause();
      this.shadowAnimation.pause();
    }
  }
  /**
   * restart with new spherePathEls
   */
  private restartAnimationWithNewValues(){
    this.breathAnimation.pause();
    this.initBreathAnimation(this.spherePathEls);
    this.breathAnimation.play();
  }
  /**
   * fit the sphere to the screen
   * @param el 
   * @param padding 
   */
  private fitElementToParent(el, padding = 0) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      
      anime.set(el, {scale: 0.75});
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
