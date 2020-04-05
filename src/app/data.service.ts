import { Injectable } from '@angular/core';
import { project } from './models/project';
import { Employer } from './models/employer';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public employers: Employer[] = [];
  public projects : project[] = [];
  constructor() {
    this.createContent();
   }
   // create all the content I need in the form of objects
   createContent(){
      this.createEmployers();
      this.createProjects();
   }
   
   createEmployers(){
     this.employers.push(...[
       new Employer(
        1,
        "Transat A.T",
        "Angular Full Stack Developer",  
        moment('2020-01-01'),  
        moment(),
        [
          "Creating reusable and dynamic GUIs from models",
          "Creating controllers to access a complex database",
          "Optimization of query and algorithms used in projects",
          "Documentation of my tasks",
          "Deploying projects on a specific environment",
          "Using the MS Azure environment"
        ]),
       new Employer(
         2,
         "Association Québécoise des Transports (AQTr)",
         "Angular Front-End Developer",  
         moment('2019-01-01'),  
         moment('2019-09-01'),
         [
          "Implement user authentication",
          "Implement cache logic",
          "Implement various GUI to show complex data",
          "Implement multi-threading data-fetching logic",
          "Make code verification",
          "Participate in Agile and Scrum meetings",
          "Participate in project meetings"
         ]),
      new Employer(
        3,
        "One Provider (Brainstorm Network)",
        "Javascript Front-end Developer",  
        moment('2018-04-01'),  
        moment('2018-09-01'),
        [
          "Internationalize the website",
          "Fix bugs",
          "Implement client s API"
        ]),
      new Employer(
        4,
        "Canada Revenue Agency (CRA)",
        "IT Support Analyst",  
        moment('2017-04-01'),  
        moment('2017-09-01'),
        [
          "Provide support and apply solutions to problems encountered by clients of the agency",
          "Assemble and disassemble computer equipment",
          "Gather information for documentation purposes"
        ]),
     ]);
   }
   createProjects(){
    this.projects.push(...[
      new project(1,"AQTr events website",
      `AQTr is a company that organises many events for their clients. They needed a fast, mobile-friendly and easy to use website
       I have developped a website following a MVC hierarchy to make it easy to maintain. It is powered by an Angular Framework with Material & bootstrap. It uses Sass styling. 
       Since this was made during a contract there is no available code, click the following button to see a preview!`,
      "aqtr",10,
      ["Angular","Typescript","Docker","Hyper-v","Postman","Multi-threading", "Authentification logic", "Local data storage", " "]
      ,null,"https://endirect.aqtr.com/"),

      new project(2,"Mad Scare",
      `Mad Scare is the title of a story driven horror game made in Unity. The character appears in a forest and has to find it s way through multiple levels. 
       The character can only hide, open doors, read notes and use his flashlight. The goal is to find all the notes before the monster catches you`,
      "madScare",10,
      ["Unity","Navigation Mesh", "AI","Multiple menus","Custom animations","Action on specific Triggers","Multiple Cameras","Looting logic","Unlockable doors","Scene life cycles", "Raycast","Multiple Scenes"]
      ,"https://github.com/LeMilenov/MadScareUnity",),

      new project(3,"Lexicographic Dictionnary",
      `This apps stores words and definitions in a custom node Tree in Lexicographic order. Each node contains a letter and a reference towards the his childrens.
       The user can add words and modify their definition if needed. We can load and Save a file containing multiple words with the following format : 'word & definition .'`,
      "lexicoTree",10,
      ["Java","Node Tree", "Custom data structure","File Reading/Saving","GUI", "Unit Tests"]
      ,"https://github.com/LeMilenov/lexicographic-dictionary-tree-java"),

      new project(4,"Jeu du Taquin",
      `Jeu du Taquin is a simple 3x3 puzzle that is made possible through canvas manipulation and multi-dimensionnal arrays in Javascript`,
      "taquin",1,
      ["Javascript","Canvas manipulations","Multi-dimension arrays"],
      "https://github.com/LeMilenov/jeuTaquin"),
    ]);
  }  
  getProjects(){
    return this.projects;
  }
  getEmployers(){
    return this.employers;
  }
}



