import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';

const routes: Routes = [
  {path: 'About', component: AboutComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'Projects/:id', component: ProjectComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
