import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public title = 'projectTest';
  public websiteLink = null;
  public safeURL = null;

  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/watch?time_continue=4&v=qUG0yaJ42yI&feature=emb_logo");
 }
  imageUrls: (string | IImage)[] = [
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => this.stuff() },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
    'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
    { url: '../../../assets/pictures/backgrounds/pawel-czerwinski-b7ibFp72VAg-unsplash.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];

  ngOnInit() {
  }
  stuff(){
  }

}
