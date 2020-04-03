import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employer } from '../models/employer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(public data:DataService) { }

  ngOnInit() {

  }
  //makes aria-selected of specific controler at true and turns the last one at false
  updateText(x:Employer){

  }
  // return html for all employer links -> to help bind to aria-selected and aria-control since bootstrap doesnt allow string interpolation
  getEmployerLinks(){
    let html = '';
    //for the first employer -> we set him active
    html = `<a class="nav-item nav-link active" id="nav-${this.data.getEmployers()[0].id}-tab" data-toggle="tab" href="#nav-${this.data.getEmployers()[0].id}" role="tab" aria-controls="nav-${this.data.getEmployers()[0].id}" aria-selected="true">${this.data.getEmployers()[0].name}</a>`
    for(let employer of this.data.getEmployers().slice(1)){
      html += `<a class="nav-item nav-link" id="nav-${employer.id}-tab" data-toggle="tab" href="#nav-${employer.id}" role="tab" aria-controls="nav-${employer.id}" aria-selected="false">${employer.name}</a>`;     
    }
    return html;
  }
  // create dynamic html for all the employers data to use bootstrap css and fade animations 
  getEmployerData(){
    let html = '';
    html = `<div class="tab-pane fade show active" id="nav-${this.data.getEmployers()[0].id}" role="tabpanel" >
                  <div class='dateLabel'>
                      ${this.data.getEmployers()[0].dateStart.format('MMMM YYYY')} - now 
                     <br>
                     (${this.data.getEmployers()[0].dateStart.toNow(true)}) 
                  </div>
                  <div class='title'>
                     <h5> ${this.data.getEmployers()[0].title} <h5>
                  </div>
                  <div class='tasks'>                  
                  <ul>`;
                  for(let task of this.data.getEmployers()[0].tasks){
                    html+= `<li> ${task} </li>`
                  }
        html += `</ul>
          </div>
        </div>`;
    for(let employer of this.data.getEmployers().slice(1)){
      html +=`<div class="tab-pane fade" id="nav-${employer.id}" role="tabpanel" aria-labelledby="nav-${employer.id}-tab">
                <div class='dateLabel'>
                    ${employer.dateStart.format('MMMM YYYY')} - ${employer.dateEnd.format('MMMM YYYY')} (${employer.dateStart.from(employer.dateEnd)})
                </div>
                <div class='title'>
                <h5>  ${employer.title} <h5>
                </div>
                <div class='tasks'>
                  <ul>`;
                  for(let task of employer.tasks){
                    html+= `<li> ${task} </li>`
                  }
      html +=`    </ul> 
                </div>
              </div>
           `;      
    }
    return html;
  }
}
