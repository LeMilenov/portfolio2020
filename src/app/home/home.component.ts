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
  private spherePathEls : any[];
  private pathLength;
  private breathAnimation;
  private introAnimation;
  private shadowAnimation;
  public possibleDisks = [0,1,2,3,4,5];
  public selectedDisk  = 0;
  //used to know if the sphere is in mid animation or not
  public isOpeningDisk = false;
  public openedDisk : any = null;
  private NUMBER_OF_DISKS_OFFSET:number = 8;
  private ANIMATION_DURATION:number = 1000;
  // private CIRCLE_PATH = "m464.094274,412.261094c-103.061585,109.316576 -217.384075,24.163125 -236.021457,0.076324c-18.637382,-24.086801 -39.179641,-92.061521 63.883302,-201.376657c103.061585,-109.313696 199.732396,-52.960432 223.800646,-28.873631c24.06825,24.086801 62.26083,112.22266 -40.800755,221.536356l-10.861736,8.637608z";
  // private CIRCLE_PATH2 = "m146.886536,253.500011c0,-89.289204 73.666802,-161.613459 164.613471,-161.613459c90.946669,0 164.613471,72.324255 164.613471,161.613459c0,89.289204 -73.666802,161.613459 -164.613471,161.613459c-90.946669,0 -164.613471,-72.324255 -164.613471,-161.613459z";
  // private CIRCLE_PATH3 = "m186.886536,264.499996c0,-89.289204 73.666802,-161.613459 164.613471,-161.613459c90.946669,0 164.613471,72.324255 164.613471,161.613459c0,89.289204 -73.666802,161.613459 -164.613471,161.613459c-90.946669,0 -164.613471,-72.324255 -164.613471,-161.613459z";
  // private CIRCLE_PATH4= "m228.886536,276.499996c0,-89.289204 73.666802,-161.613459 164.613471,-161.613459c90.946669,0 164.613471,72.324255 164.613471,161.613459c0,89.289204 -73.666802,161.613459 -164.613471,161.613459c-90.946669,0 -164.613471,-72.324255 -164.613471,-161.613459z";
  // private CIRCLE_PATH5= "m270.886536,283.499996c0,-89.289204 73.666802,-161.613459 164.613471,-161.613459c90.946669,0 164.613471,72.324255 164.613471,161.613459c0,89.289204 -73.666802,161.613459 -164.613471,161.613459c-90.946669,0 -164.613471,-72.324255 -164.613471,-161.613459z";
  
  private currentOpenAnimation;

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
  private radioButtonOnChange(event : MatRadioChange){
    this.openDisk(event.value + this.NUMBER_OF_DISKS_OFFSET);
  }
  private openDisk(wantedDisk){
     
    //disable the other radiobuttons
    this.isOpeningDisk = true;
    //animation - close opened disk
    if(this.currentOpenAnimation){
      this.currentOpenAnimation.reverse();
      this.currentOpenAnimation.restart();
    }    
    //wait 1 sec -> start new one
    setTimeout(()=>{
      //add previously openedDisk at the right position
      if(this.openedDisk)    {  
        console.log(+this.openedDisk["id"], "id ??");
       this.spherePathEls.splice(+this.openedDisk["id"],0,this.openedDisk);
      }
      //remove openedDisk from spherePaths    
      this.openedDisk = this.spherePathEls.splice(wantedDisk,1)[0];
      //animation - open wanted disk
      // re-enable the radiobuttons once the animation is done
      console.log(this.openedDisk);
      // this.currentOpenAnimation = anime({
      //   targets: this.openedDisk,
      //   d:[
      //     {value:this.openedDisk["d"]},
      //     {value:this.CIRCLE_PATH}
      //   ],
      //   duration:this.ANIMATION_DURATION,
      //   easing: 'linear',
      // });
      // this.currentOpenAnimation.play();   
   
      //restart breathing animation & intro animation 
      this.restartAnimationWithNewValues();
    }, this.ANIMATION_DURATION);
    
    
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
