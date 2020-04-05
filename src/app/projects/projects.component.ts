import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { project } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects : project[];

  constructor(
    private data: DataService,
    private route :ActivatedRoute,
    public dialog: MatDialog ) { }

  ngOnInit() {
    //get all projects
    this.projects = this.data.getProjects();  
  }  
  //return html for all carroussels
  getAllCaroussels(){
    let html ='';    
    html +=` <div class="carousel_container">`;
              for(let project of this.projects){
                html += `
                <h3> ${project.title} </h3>
                <div id="carousel-${project.id}" class="carousel slide" data-ride="carousel" >
                  <div class="carousel-inner">`;
                  for(let i = 0; i< project.nbPictures ; i++){
                    //make the first one active
                    html += `<div class="carousel-item ${i == 0? 'active': ''}">
                                <img class="img-fluid" src="../../assets/pictures/${project.picturesFolder}/${project.picturesFolder}_${i}.png">
                             </div>`;
                  }
                  //close + create indicators < > 
                  html +=` </div>
                  <a class="carousel-control-prev" href="#carousel-${project.id}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carousel-${project.id}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <p> ${project.description} </p>
                <div class="tags_container" >
                <ul class="accent">`;
                for(let tags of project.tags){
                  html += ` <li> ${tags} </li> `;
                }
                html +=`
                </ul>
                ${project.github? `<a href="${project.github}" class="fa fa-github icon-link" target="_blank"></a>`: '' }
                ${project.directLink ?`<a href="${project.directLink}" class="fa fa-window-restore" target="_blank"></a>` : ''}     
                </div>
                `;
              }
              //close all containers
  html += ` </div> 
          </div>`;
  return html;
  }
}
