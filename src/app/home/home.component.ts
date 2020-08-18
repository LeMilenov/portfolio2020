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
  public openedDisk = null;
  private NUMBER_OF_DISKS_OFFSET:number = 10;

  constructor() { }
  ngOnInit() {  }

  ngAfterViewInit(){
    //connect the DOM to the script
    this.sphereEl = document.querySelector('.sphere-animation');
    this.spherePathEls = Array.from(this.sphereEl.querySelectorAll('.sphere path'));
    this.pathLength = this.spherePathEls.length;
    //if we get it, we start the animations
    if(this.sphereEl){
      this.initSphereAnimation();
    }
    //we open the first disk
    this.openDisk(this.NUMBER_OF_DISKS_OFFSET);
  }
  private radioButtonOnChange(event : MatRadioChange){
    this.openDisk(event.value + this.NUMBER_OF_DISKS_OFFSET);
  }
  private openDisk(wantedDisk){
    //disable the other radiobuttons
    this.isOpeningDisk = true;
    //animation - close opened disk
    var closeAnimation = anime({});
    
    //add previously openedDisk and remove the new one
    if(this.openedDisk)
      this.spherePathEls.splice(this.selectedDisk,0,this.openedDisk);
    //remove openedDisk from spherePaths    
    this.openedDisk = this.spherePathEls.splice(wantedDisk,1);
    
    //re init the animation
    this.stopSphereAnimation();
    this.initSphereAnimation();
   
    //animation - open wanted disk
    // re-enable the radiobuttons once the animation is done
    var openAnimation = anime({
      targets: this.openedDisk,
      translateY: 50,
      translateX: 50,
      // direction: 'alternate',
      loop: false,
      autoplay: true,
      duration:3000,
      easing: 'easeInOutQuad'
    });
    //TEST -> not 3 secs, should be when the animation is done
    var timeout = null;
    timeout = setTimeout(()=>{
      this.isOpeningDisk = false;      
    }, 3000);

  }
  /**
   * creates the basic animations for the svg sphere
   * use var objects for the begin / update :function()
   */
  private initSphereAnimation(){     
    var sphereEl = this.sphereEl;
    var spherePathEls = this.spherePathEls;
    var pathLength = this.pathLength;
    var hasStarted = false;
    var animations = [];
    var accentMain = "rgb(29, 179, 109)";
    var accentSecondary = "rgb(206, 206, 206)";
    this.fitElementToParent(sphereEl);

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
  
    this.startSphereAnimation();   
  }
  private startSphereAnimation(){
    this.breathAnimation.play();
    this.introAnimation.play();
    this.shadowAnimation.play();
  }
  private stopSphereAnimation(){
    this.breathAnimation.pause();
    this.introAnimation.pause();
    this.shadowAnimation.pause();
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
