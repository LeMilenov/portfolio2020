import { Injectable } from '@angular/core';
import { project } from './models/project';
import { Employer } from './models/employer';

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
        new Date('2020-01-01'),  
        new Date(),
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
         "Association Québécoise du Transport et des routes (Aqtr)",
         "Angular Front-End Developer",  
         new Date('2019-01-01'),  
         new Date('2019-09-01'),
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
        new Date('2018-04-01'),  
        new Date('2018-09-01'),
        [
          "Internationalize the website",
          "Fix bugs",
          "Implement client s API"
        ]),
      new Employer(
        4,
        "Canada Revenue Agency (CRA)",
        "IT Support Analyst",  
        new Date('2017-04-01'),  
        new Date('2017-09-01'),
        [
          "Provide support and apply solutions to problems encountered by clients of the agency",
          "Assemble and disassemble computer equipment",
          "Gather information for documentation purposes"
        ]),
     ]);
   }
   createProjects(){
    this.projects.push(...[
      new project(1,"title","git-link",["pics"],["tasks"]),
      new project(2,"title","git-link",["pics"],["tasks"]),
      new project(3,"title","git-link",["pics"],["tasks"]),
      new project(4,"title","git-link",["pics"],["tasks"]),
    ]);
  }

    getProjects(){
      return this.projects;
    }
    getEmployers(){
      return this.employers;
    }
   }



