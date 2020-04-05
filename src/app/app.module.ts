import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './projects/project/project.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents : [ProjectComponent]
})
export class AppModule { }
