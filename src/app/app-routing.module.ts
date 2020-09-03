import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
/**
 * 
 * scrollPositionRestoration: on change of router url the position of the screen will set to the top.
   anchorScrolling : When set to ‘enabled’, scrolls to the anchor element when the URL has a fragment. Anchor scrolling is disabled by default.
   scrollOffset: Configures the scroll offset the router will use when scrolling to an element.
   source : https://www.geekstrick.com/fragment-url-in-angular-8/#Router_Options
 */
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  {path: 'About', component: AboutComponent, data: {animation: 'isLeft'}},
  {path: 'Projects', component: ProjectsComponent, data : {animation: 'isRight'}},
  {path: 'Projects/:id', component: ProjectComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
