import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '../../models/project.model';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public project:Project = null;
  public imageUrls: (string | IImage)[] = null;
  public safeURL = null;

  constructor(
    private data:DataService,
    private route:ActivatedRoute,
    private _sanitizer: DomSanitizer
    ){
 }
  // imageUrls: (string | IImage)[] = [
  //   { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
  //   { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => this.stuff() },
  //   { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
  //   'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
  //   { url: '../../../assets/pictures/backgrounds/pawel-czerwinski-b7ibFp72VAg-unsplash.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  // ];

  ngOnInit() {
    this.route.params.subscribe(params=>{
      const id = +params['id'];
      if(id > 0){
        this.project = this.data.getProjectById(id);  
        this.imageUrls = this.project.imageUrls; 
        if(this.project.preview){
          this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.project.preview);
        }
      }
    });
  }
  stuff(){
  }

}
