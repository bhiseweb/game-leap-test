import { Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { AddVideoGuideComponent } from './add-video-guide/add-video-guide.component';
import { VideoGuideComponent } from './video-guide/video-guide.component';

export const appRoutes: Routes = [
  {
    path: 'courses/new',
    component: AddCourseComponent,
  },
  {
    path: 'courses',
    component: CourseComponent,
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
  },
  {
    path: 'courses/:id/edit',
    component: AddCourseComponent,
  },
  {
    path: 'courses/:id/video-guides',
    component: VideoGuideComponent,
  },  
  {
    path: 'courses/:id/video-guides/new',
    component: AddVideoGuideComponent,
  },
  {
    path: 'courses/:id/video-guides/:video_guide_id/edit',
    component: AddVideoGuideComponent,
  },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
];