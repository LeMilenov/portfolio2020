import { Component,     OnInit,     Output,     EventEmitter, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: "app-home", 
  templateUrl: "./home.component.html", 
  styleUrls: ["./home.component.scss"], 
})
export class HomeComponent implements OnInit {
  private svg = [
    'M0.093,0.878 C0,0.736,0.194,0.698,0.118,0.555 S0.439,0.362,0.406,0.241 S0.951,0,0.808,0.177 S1,0.369,1,0.517 S0.862,0.641,0.846,0.866 S0.361,1,0.467,1 S0.186,1,0.093,0.878',
    'M0.101,0.876 C0.009,0.735,0.076,0.751,0,0.607 S0.193,0.486,0.16,0.364 S0.629,0,0.488,0.178 S0.959,0.163,0.985,0.311 S0.557,0.767,0.871,1 S0.329,1,0.434,0.886 S0.193,1,0.101,0.876',
    'M0.087,1 C0,0.889,0.254,0.813,0.182,0.653 S0.182,0.373,0.151,0.238 S0.682,0,0.548,0.197 S1,0.095,1,0.26 S0.994,0.586,0.874,0.844 S0.662,1,0.537,0.945 S0.174,1,0.087,1',
    'M0.087,0.56 C0,0.422,0.012,0.235,0.138,0.231 S0.479,0,0.484,0.231 S0.97,-0.058,0.893,0.169 S0.712,0.509,0.828,0.56 S1,1,0.911,1 S0.228,0.916,0.068,1 S0.174,0.698,0.087,0.56',
    'M0.078,0.896 C0,0.764,0.291,0.367,0.227,0.233 S-0.046,-0.239,0.292,0.055 S0.538,0.12,0.652,0 S0.944,0.235,0.966,0.374 S1,0.277,1,0.487 S0.816,1,0.462,0.826 S0.157,1,0.078,0.896'
  ]
  private backgrounds = [
    'pawel-czerwinski-cx90ak4WBFQ-unsplash.jpg',
    'pawel-czerwinski-p_puv4_2RIQ-unsplash.jpg',
    'pawel-czerwinski-rsB6JZg6rVs-unsplash.jpg',
    'pawel-czerwinski-wtljKRoxsZE-unsplash.jpg',
    'pawel-czerwinski-wZWnTktk0ow-unsplash.jpg'
  ]
  private TIME_TO_WAIT_BETWEEN_ANIMATIONS = 8000;
  private selectedSvg:number = -1;
  public backgroundName = this.backgrounds[0];
  public positionX =0;
  public positionY =0;
  private mainAnimation = null;
  private timeout = null;
  constructor() {}
  ngOnInit() { }

  ngAfterViewInit() {
    this.startLoop();
  }
  ngOnDestroy(){
    // this.mainAnimation.pause();
    if(this.mainAnimation){
      this.mainAnimation = null;
      clearTimeout(this.timeout);
    }
  }
  
  /**
   * start the infinite loop
   */
  private startLoop(){

    this.changePath();
    this.changeBackground();    
    this.mainAnimation = this.createAnimation();
    
    if(this.timeout){
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(()=>{
      this.startLoop();
    },this.TIME_TO_WAIT_BETWEEN_ANIMATIONS);
  }
  /**
   * create the moving animation
   */
  private createAnimation():any{
    return  anime.timeline({
      easing:'linear',
      autoplay:true
    })
    //fade in background
    .add({
      targets: "#background",
      opacity: 1,
      duration: 500,
          
    })
    //change path
    .add({
      duration: 5000,
      targets: "#path-to-animate", 
      d: this.svg[this.selectedSvg],
    })
    //fade background
    .add({
      duration: 500,
      targets: "#background",
      opacity: 0, 
    });
    

  }
  
  /**
   * choose a new random path
   */
  private changePath(){
    var random = Math.floor(Math.random() * (this.svg.length));
    // if its the same as the selected, we keep searching
    while(random == this.selectedSvg){
      random = Math.floor(Math.random() * (this.svg.length));
    }
    //we set it as the new value
    this.selectedSvg = random;
  }
   /**
    * chooose a new random background
    */
  private changeBackground(){
     //load new background 
    var random = Math.floor(Math.random() * (this.backgrounds.length));
    while(this.backgrounds[random]== this.backgroundName){
      random = Math.floor(Math.random() * (this.backgrounds.length));
    }
    this.backgroundName = this.backgrounds[random];   
    //change background 
    document.getElementById("background").style.background = 'url(../../assets/pictures/backgrounds/'+this.backgroundName + ')';
  }
  /**
   * add event handling to the mouse
   */
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e){
    const offSetX = 100;
    const offSetY = -100; 
    this.positionX = (window.innerWidth / 3 - e.x) / 20 + offSetX;
    this.positionY = e.y / 20 + offSetY;
  }
}
