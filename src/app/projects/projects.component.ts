import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private data: DataService,
    private route :ActivatedRoute,
    public dialog: MatDialog ) { }

  ngOnInit() {
  }  
  openProject(num:number){
    alert('num'+num);
  }
}
