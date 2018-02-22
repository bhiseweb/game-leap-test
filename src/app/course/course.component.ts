import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course'; 
import { CourseService } from '../services/course.service';
import { VideoGuideService } from '../services/video-guide.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: any = [];
  id: string;
  videoGuides: any = [];
  error: any;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private videoGuideService: VideoGuideService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    if(this.id) {
      this.getVidedGuides();      
    }

    else {
      this.getCourses();
    }
  }

  getCourses() {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }
 
  getVidedGuides() {
    this.videoGuideService.getVideoGuides(this.id).subscribe(res => {
      this.videoGuides = res;
    },
    err => {
      this.error = err.errors.message;
    });
  }

  duration(course) {
    let duration = 0;
    course.videoGuides.map(vg => duration = duration + vg.duration );
    return duration;
  }

  destroyCourse(id) {
    this.courseService.destroyCourse(id).subscribe(res => {
      this.getCourses();
    },
    err => {
      this.error = err.errors.message;
    });
  }

  destroyVideoGuide(courseId, vGuideId) {
    this.videoGuideService.destroyVideoGuide(courseId, vGuideId).subscribe(res => {
      this.getVidedGuides(); 
    }, 
    err => {
      this.error = err.errors.message;
    });
  }
}
