import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './services/course.service';
import { VideoGuideComponent } from './video-guide/video-guide.component';
import { AddVideoGuideComponent } from './add-video-guide/add-video-guide.component';
import { VideoGuideService } from './services/video-guide.service';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    HeaderComponent,
    CourseComponent,
    VideoGuideComponent,
    AddVideoGuideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CourseService, VideoGuideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
