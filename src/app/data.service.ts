import { Injectable } from '@angular/core';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  projects: Project[] = [
    {
      id:1,
      imageUrls:[       
          { url: '../../../assets/pictures/aqtr/aqtr_0.png', caption: 'dashboard'},
          { url: '../../../assets/pictures/aqtr/aqtr_1.png', caption: 'event dashboard'},
          { url: '../../../assets/pictures/aqtr/aqtr_2.png', caption: 'menu'},
          { url: '../../../assets/pictures/aqtr/aqtr_3.png', caption: 'programmation dashboard'},
          { url: '../../../assets/pictures/aqtr/aqtr_4.png', caption: 'conference information'},
          { url: '../../../assets/pictures/aqtr/aqtr_5.png', caption: 'sponsors dashboard'},
          { url: '../../../assets/pictures/aqtr/aqtr_6.png', caption: 'sponsor information'},
          { url: '../../../assets/pictures/aqtr/aqtr_7.png', caption: 'menu - when logged in'},
          { url: '../../../assets/pictures/aqtr/aqtr_8.png', caption: 'favorite contacts'},
          { url: '../../../assets/pictures/aqtr/aqtr_9.png', caption: 'contact information'},
      ],
      icons:[
        "../../../assets/icons/angularjs.png",
        "../../../assets/icons/typescript.png",
        "../../../assets/icons/javascript.png",
        "../../../assets/icons/sass.png",
        "../../../assets/icons/docker.png",
        "../../../assets/icons/github.png",
        "../../../assets/icons/sql.png",
      ],
      desc:"",
      githubLink:null,
      websiteLinnk:"https://endirect.aqtr.com/"
    },
    
       
  ];
  

  ngOnInit(): void {
    
  }
}



