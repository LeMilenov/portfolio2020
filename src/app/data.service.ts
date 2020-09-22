import { Injectable } from '@angular/core';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: Project[] = [
    {
      id:5,
      title: "Hot Coco - Coco Jam 2020",
      tags:["game","unreal"],      
      imageUrls:[       
          { url: '../../../assets/pictures/hotcoco/hotcoco_0.png', },
          { url: '../../../assets/pictures/hotcoco/hotcoco_1.png', },
          { url: '../../../assets/pictures/hotcoco/hotcoco_2.png', }
      ],
      icons:[
        "../../../assets/icons/unreal.png"
      ],
      fastDesc:"winning game of the 2020`s cocoJam",
      desc:"This game was made during the 2020 Cocojam event organised by  Concordia Game Development Club and Conjure, it was sponsered by Ubisoft, Ludia, Gameloft, Gearbox, Cyberconnect2, Hekaton. \n Follow the eye icon to learn more about the game ! " ,
      githubLink:null,
      websiteLink:"https://itch.io/jam/coco-jam/entries",
      preview:"https://www.youtube.com/watch?v=xuGH7WzucS0"
    },
    {
      id:4,
      title: "Anarchie - Creative Jam 2020",
      tags:["game","unreal"],      
      imageUrls:[       
          { url: '../../../assets/pictures/anarchie/anarchie_0.png'},
          { url: '../../../assets/pictures/anarchie/anarchie_1.png'},
      ],
      icons:[
        "../../../assets/icons/unreal.png"
      ],
      desc:"Help Archie get his toilet paper roll before there are none left ! Anarchie was a game made during the Poly games and Nadjam`s Virtual Creative Jam 16th edition. ",
      githubLink:null,
      websiteLink:"https://lemilenov.itch.io/anar-chie"
    },
    {
      id:2,
      title: "One Pixel Remaining",
      tags:["game","unity"],      
      imageUrls:[       
        { url: '../../../assets/pictures/onePixelRemaining/onePixelRemaining_0.png'},
        { url: '../../../assets/pictures/onePixelRemaining/onePixelRemaining_1.png'},
        { url: '../../../assets/pictures/onePixelRemaining/onePixelRemaining_2.png'},
      ],
      icons:[
        "../../../assets/icons/unity.png"
      ],
      fastDesc:"Game made during Conjure`s monthly jam",
      desc:"One pixel remaining was made during the monthly game jam of june 2020. The goal was to make a simple polished game in unity. It is a physics-based game where you have to move the platform in order to keep the pixel from the beam of lights. You can change the color of the pixel by clicking a combination of red(w key), green(d key) and blue(a key). how long can you last ?",
      preview:"https://www.youtube.com/watch?v=qUG0yaJ42yI&feature=emb_logo",
      githubLink:null,
      websiteLink:"https://williamlebel.itch.io/one-pixel-remaining"
    },
    {
      id:1,
      title: "AQTR - event`s website",
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
      fastDesc:"Website designed for AQTr`s events",
      desc:"Website developped in Angular during my past internship at AQTr. It contains user`s authentification, cache logic, various GUI to show complex data, multi-threading data-fetching logic, and many more features! ",
      githubLink:null,
      websiteLink:"https://endirect.aqtr.com/"
    },
    {
      id:3,
      title: "Mad Scare - horror game",
      tags:["game","unity"],      
      imageUrls:[       
          { url: '../../../assets/pictures/madScare/madScare_0.png'},
          { url: '../../../assets/pictures/madScare/madScare_1.png'},
          { url: '../../../assets/pictures/madScare/madScare_2.png'},
          { url: '../../../assets/pictures/madScare/madScare_3.png'},
          { url: '../../../assets/pictures/madScare/madScare_4.png'},
          { url: '../../../assets/pictures/madScare/madScare_5.png'},
          { url: '../../../assets/pictures/madScare/madScare_6.png'},
          { url: '../../../assets/pictures/madScare/madScare_7.png'},
          { url: '../../../assets/pictures/madScare/madScare_8.png'},
          { url: '../../../assets/pictures/madScare/madScare_9.png'},
      ],
      icons:[
        "../../../assets/icons/unity.png"
      ],
      fastDesc:"a Horror game made in Unity ",
      desc:" This simple game was made to learn about the unity engine. The player is followed by a relentless Ai monster and has to interact with the world to learn how to escape it. You will have to travel through different levels, manage your batteries, discover clues and hide order to survive.",
      githubLink:null
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



