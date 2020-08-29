import { Component,    OnInit,    Output,    EventEmitter } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',   
  templateUrl: './home.component.html',   
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  sphereEl: any;
  spherePathEls: any[];
  //convert V to L ( only line commands)
  svgPaths : string[] = [
  'M0.026,    0.791 c-0.093,    -0.141,     0.101,    -0.179,    0.025,    -0.322 s0.321,     -0.193,     0.288,    -0.314 s0.545,    -0.241,            0.402,           -0.064 s0.231,      0.192,       0.257,      0.34 s-0.203,      0.123,            -0.219,      0.348 s-0.485,      0.295,            -0.379,     0.135 S0.119,       0.932,      0.026,     0.791',   
  'M0.115,    0.762 C0.023,      0.621,     0.09,      0.637,    0.014,     0.493 S0.206,      0.372,     0.174,     0.25 S0.643,     -0.114,            0.502,            0.064 s0.471,     -0.015,       0.497,      0.134 s-0.429,     0.455,            -0.114,      0.693 s-0.542,      0.042,            -0.437,    -0.118 s-0.241,      0.132,     -0.333,    -0.01',                          
  'M0.016,    0.969 c-0.08,     -0.165,     0.172,    -0.397,    0.106,    -0.564 S-0.038,    -0.129,     0.093,     0.13 s0.674,     -0.29,             0.657,           -0.051 s0.226,     -0.211,       0.249,     -0.038 s-0.174,     0.458,            -0.189,      0.72 s-0.278,       0.207,            -0.187,     0.022 S0.096,       1,          0.016,     0.969',   
  'M0.072,    0.45 C-0.015,      0.312,    -0.003,     0.125,    0.123,     0.121 s0.342,     -0.231,     0.346,     0 s0.486,        -0.289,            0.409,           -0.062 s-0.182,     0.34,       -0.065,      0.391 s0.308,      0.823,             0.083,      0.448 s-0.683,     -0.092,            -0.843,     0.043 s0.106,      -0.352,      0.019,    -0.49',   
  'M0.014,    0.958 c-0.078,    -0.132,     0.213,    -0.529,    0.148,    -0.663 s-0.273,    -0.472,     0.066,    -0.177 s0.245,     0.064,            0.36,             -0.055 s0.292,     0.235,       0.314,      0.374 s0.111,     -0.097,             0.097,      0.113 s-0.247,      0.661,            -0.601,     0.339 s-0.306,      0.202,     -0.384,     0.07'];

  constructor() { }
  ngOnInit() {  }

  ngAfterViewInit(){
    this.animatePaths();
  }
  /**
   * changes the current path every 15 secs + changes background
   */
  private animatePaths(){
    var clipPath = document.querySelector('#path-to-animate');
    console.log(clipPath)
    
    anime({
      targets: "#path-to-animate",   
      d: [
        {value: this.svgPaths[0]},    
        {value: this.svgPaths[1]},   
        {value: this.svgPaths[2]},   
        {value: this.svgPaths[3]},   
        {value: this.svgPaths[4]}, 
      ],   
       
      easing: 'linear',   
      duration: 5000,   
      loop: true,   
      autoplay:true,   
    });
  }
  //   //we open the first disk
  //   // this.openDisk(this.NUMBER_OF_DISKS_OFFSET);
  // }
  // /**
  //  * creates the basic animations for the svg sphere
  //  * use var objects for the begin / update :function()
  //  */
  // private initSphereAnimation(){     
  //   var sphereEl = this.sphereEl;
  //   var spherePathEls = this.spherePathEls;    
  //   this.fitElementToParent(sphereEl);

    
  //   this.initBreathAnimation(spherePathEls);
  //   this.initIntroAnimation(spherePathEls);
  //   this.initShadowAnimation();
  
  
  //   this.playSphereAnimation();   
  // }
  // /**
  //  * create breathing animation
  //  * @param spherePathEls 
  //  */
  // private initBreathAnimation( spherePathEls: any[]){
  //   var pathLength = this.pathLength;
  //   var hasStarted = false;
  //   var animations = [];
  //   var accentMain = "rgb(29,    179,    109)";
  //   var accentSecondary = "rgb(206,    206,    206)";
  // //begin and update function need a local variable somehow ??
  // this.breathAnimation = anime({
  //   begin: function() {
  //     for (var i = 0; i < pathLength; i++) {
  //       //animate every path except the opendisk        
  //       animations.push(anime({
  //         targets: spherePathEls[i],   
  //         stroke: {value: [accentSecondary,    accentMain],    duration: 500},   
  //         translateX: [2,    -4],   
  //         translateY: [2,    -4],   
  //         easing: 'easeOutQuad',   
  //         autoplay: false
  //       }));
  //     }
  //   },   
  //   update: function(ins) {
  //     animations.forEach(function(animation,    i) {
  //       var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
  //       animation.seek(animation.duration * percent);
  //     });
  //   },   
  //   duration: Infinity,   
  //   autoplay: false
  // });
  // }
  // /**
  //  * create introAnimation
  //  * @param spherePathEls 
  //  */
  // private initIntroAnimation( spherePathEls: any[]){
  //   this.introAnimation = anime.timeline({
  //     autoplay: false
  //   }).add({
  //     targets: spherePathEls,   
  //     strokeDashoffset: {
  //       value: [anime.setDashoffset,    0],   
  //       duration: 3900,   
  //       easing: 'easeInOutCirc',   
  //       delay: anime.stagger(190,    {direction: 'reverse'})
  //     },   
  //     duration: 2000,   
  //     delay: anime.stagger(60,    {direction: 'reverse'}),   
  //     easing: 'linear'
  //   },    0);
  // }
  // /**
  //  * create shadow animation
  //  */
  // private initShadowAnimation(){    
  //   this.shadowAnimation = anime({
  //     targets: '#sphereGradient',   
  //     x1: '25%',   
  //     x2: '25%',   
  //     y1: '0%',   
  //     y2: '75%',   
  //     duration: 30000,   
  //     easing: 'easeOutQuint',   
  //     autoplay: false
  //   },   0);
  // }
  // /**
  //  * play all animations
  //  */
  // private playSphereAnimation(){
  //   if(this.breathAnimation && this.introAnimation && this.shadowAnimation){
  //     this.breathAnimation.play();
  //     this.introAnimation.play();
  //     this.shadowAnimation.play();
  //   }
  // }
  // private pauseSphereAnimation(){
  //   if(this.breathAnimation && this.introAnimation && this.shadowAnimation){
  //     this.breathAnimation.pause();
  //     this.introAnimation.pause();
  //     this.shadowAnimation.pause();
  //   }
  // }
  // /**
  //  * restart with new spherePathEls
  //  */
  // private restartAnimationWithNewValues(){
  //   this.breathAnimation.pause();
  //   this.initBreathAnimation(this.spherePathEls);
  //   this.breathAnimation.play();
  // }
  // /**
  //  * fit the sphere to the screen
  //  * @param el 
  //  * @param padding 
  //  */
  // private fitElementToParent(el,    padding = 0) {
  //   var timeout = null;
  //   function resize() {
  //     if (timeout) clearTimeout(timeout);
      
  //     anime.set(el,    {scale:1});
  //     var pad = padding || 0;
  //     var parentEl = el.parentNode;
  //     var elOffsetWidth = el.offsetWidth - pad;
  //     var parentOffsetWidth = parentEl.offsetWidth;
  //     var ratio = parentOffsetWidth / elOffsetWidth;
     
  //     timeout = setTimeout(()=>{
  //       anime.set(el,    {scale: ratio})
  //     },    10);
  //   }
  //   resize();
  //   window.addEventListener('resize',    resize);
  // }
  
}
