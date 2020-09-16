import { Injectable } from '@angular/core';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: Project[] = [
    {
      id:1,
      title: "AQTR - website",
      tags:["web"],      
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
        "../../../assets/icons/sql.png",
      ],
      fastDesc:"fast asidasdasd",
      desc:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      githubLink:null,
      websiteLink:"https://endirect.aqtr.com/"
    },
    {
      id:2,
      title: "One Pixel Remaining",
      tags:["game","unity"],      
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
        "../../../assets/icons/unity.png"
      ],
      fastDesc:"fast asidasdasd",
      desc:"asdhoiasjdoijasiojdoijaosijdoiajoid",
      preview:"https://www.youtube.com/watch?v=qUG0yaJ42yI&feature=emb_logo",
      githubLink:null,
      websiteLink:"https://williamlebel.itch.io/one-pixel-remaining"
    },
    {
      id:3,
      title: "Mad Scare - unity horror game",
      tags:["game","unity"],      
      imageUrls:[       
          { url: '../../../assets/pictures/madScare/madScare_0.png', caption: 'dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_1.png', caption: 'event dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_2.png', caption: 'menu'},
          { url: '../../../assets/pictures/madScare/madScare_3.png', caption: 'programmation dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_4.png', caption: 'conference information'},
          { url: '../../../assets/pictures/madScare/madScare_5.png', caption: 'sponsors dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_6.png', caption: 'sponsor information'},
          { url: '../../../assets/pictures/madScare/madScare_7.png', caption: 'menu - when logged in'},
          { url: '../../../assets/pictures/madScare/madScare_8.png', caption: 'favorite contacts'},
          { url: '../../../assets/pictures/madScare/madScare_9.png', caption: 'contact information'},
      ],
      icons:[
        "../../../assets/icons/unity.png"
      ],
      fastDesc:"fast asidasdasd",
      desc:" ajsoidjoiasdjoajsdoijoiasjodijoiajs ",
      githubLink:null,
      websiteLink:"https://williamlebel.itch.io/one-pixel-remaining"
    },
    {
      id:4,
      title: "Anarchie - Creative Jam 2020",
      tags:["game","unreal"],      
      imageUrls:[       
          { url: '../../../assets/pictures/madScare/madScare_0.png', caption: 'dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_1.png', caption: 'event dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_2.png', caption: 'menu'},
          { url: '../../../assets/pictures/madScare/madScare_3.png', caption: 'programmation dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_4.png', caption: 'conference information'},
          { url: '../../../assets/pictures/madScare/madScare_5.png', caption: 'sponsors dashboard'},
          { url: '../../../assets/pictures/madScare/madScare_6.png', caption: 'sponsor information'},
          { url: '../../../assets/pictures/madScare/madScare_7.png', caption: 'menu - when logged in'},
          { url: '../../../assets/pictures/madScare/madScare_8.png', caption: 'favorite contacts'},
          { url: '../../../assets/pictures/madScare/madScare_9.png', caption: 'contact information'},
      ],
      icons:[
        "../../../assets/icons/unreal.png"
      ],
      desc:" asdoiasjoidjioajsoidjoiasjodi ",
      githubLink:null,
      websiteLink:"https://lemilenov.itch.io/anar-chie"
    },
    
       
  ];
  


  public getProjects(){
    return this.projects;
  }
  public getProjectById(id:number){
    const project = this.projects.find((element:Project)=>{
      return element.id == id;
    });
    return project ? project : null;
  }
}



