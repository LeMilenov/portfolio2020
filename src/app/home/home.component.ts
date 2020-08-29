import { Component,     OnInit,     Output,     EventEmitter } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: "app-home", 
  templateUrl: "./home.component.html", 
  styleUrls: ["./home.component.scss"], 
})
export class HomeComponent implements OnInit {
  sphereEl: any;
  spherePathEls: any[];
  svg = [
    'M0.093,0.878 C0,0.736,0.194,0.698,0.118,0.555 S0.439,0.362,0.406,0.241 S0.951,0,0.808,0.177 S1,0.369,1,0.517 S0.862,0.641,0.846,0.866 S0.361,1,0.467,1 S0.186,1,0.093,0.878',
    'M0.101,0.876 C0.009,0.735,0.076,0.751,0,0.607 S0.193,0.486,0.16,0.364 S0.629,0,0.488,0.178 S0.959,0.163,0.985,0.311 S0.557,0.767,0.871,1 S0.329,1,0.434,0.886 S0.193,1,0.101,0.876',
    'M0.087,1 C0,0.889,0.254,0.813,0.182,0.653 S0.182,0.373,0.151,0.238 S0.682,0,0.548,0.197 S1,0.095,1,0.26 S0.994,0.586,0.874,0.844 S0.662,1,0.537,0.945 S0.174,1,0.087,1',
    'M0.087,0.56 C0,0.422,0.012,0.235,0.138,0.231 S0.479,0,0.484,0.231 S0.97,-0.058,0.893,0.169 S0.712,0.509,0.828,0.56 S1,1,0.911,1 S0.228,0.916,0.068,1 S0.174,0.698,0.087,0.56',
    'M0.078,0.896 C0,0.764,0.291,0.367,0.227,0.233 S-0.046,-0.239,0.292,0.055 S0.538,0.12,0.652,0 S0.944,0.235,0.966,0.374 S1,0.277,1,0.487 S0.816,1,0.462,0.826 S0.157,1,0.078,0.896'
  ]
  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.animatePaths();
  }
  /**
   * changes the current path every 15 secs + changes background
   */
  private animatePaths() {
    var clipPath = document.querySelector("#path-to-animate");
    console.log(clipPath);

    anime({
      targets: "#path-to-animate", 
      d: [
        { value: this.svg[0] }, 
        { value: this.svg[1] }, 
        {value: this.svg[2]}, 
        {value: this.svg[3]}, 
        {value: this.svg[4]}, 

      ], 

      easing: "linear", 
      duration: 5000, 
      loop: true, 
      autoplay: true, 
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
  //   var accentMain = "rgb(29,     179,     109)";
  //   var accentSecondary = "rgb(206,     206,     206)";
  // //begin and update function need a local variable somehow ??
  // this.breathAnimation = anime({
  //   begin: function() {
  //     for (var i = 0; i < pathLength; i++) {
  //       //animate every path except the opendisk
  //       animations.push(anime({
  //         targets: spherePathEls[i], 
  //         stroke: {value: [accentSecondary,     accentMain],     duration: 500}, 
  //         translateX: [2,     -4], 
  //         translateY: [2,     -4], 
  //         easing: 'easeOutQuad', 
  //         autoplay: false
  //       }));
  //     }
  //   }, 
  //   update: function(ins) {
  //     animations.forEach(function(animation,     i) {
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
  //       value: [anime.setDashoffset,     0], 
  //       duration: 3900, 
  //       easing: 'easeInOutCirc', 
  //       delay: anime.stagger(190,     {direction: 'reverse'})
  //     }, 
  //     duration: 2000, 
  //     delay: anime.stagger(60,     {direction: 'reverse'}), 
  //     easing: 'linear'
  //   },     0);
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
  //   },    0);
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
  // private fitElementToParent(el,     padding = 0) {
  //   var timeout = null;
  //   function resize() {
  //     if (timeout) clearTimeout(timeout);

  //     anime.set(el,     {scale:1});
  //     var pad = padding || 0;
  //     var parentEl = el.parentNode;
  //     var elOffsetWidth = el.offsetWidth - pad;
  //     var parentOffsetWidth = parentEl.offsetWidth;
  //     var ratio = parentOffsetWidth / elOffsetWidth;

  //     timeout = setTimeout(()=>{
  //       anime.set(el,     {scale: ratio})
  //     },     10);
  //   }
  //   resize();
  //   window.addEventListener('resize',     resize);
  // }
}
