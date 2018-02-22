import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course'; 
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: any;
  submitted = false;
  id: string = null;
  error: any;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {
    this.course = new Course(0, '');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    if(this.id) {
      this.getCourse(this.id);
    }
  }

  onSubmit(courseForm: NgForm) {
    if(this.id) {
      this.courseService.updateCourse(this.id, courseForm.value).subscribe(res => {
        this.router.navigate(['/courses']);
      }, 
      err => {
        this.error = err.errors.message;
      });
    }
    else {
      this.courseService.createCourse(courseForm.value).subscribe(res => {
        this.router.navigate(['/courses']);
      }, 
      (err) => {
        this.error = err.errors.message;
      });
    }
  }

  getCourse(id) {
    this.courseService.getCourse(id).subscribe(res => {
      this.course = res;
    },
    err => {
      this.error = err.errors.message;
    });
  }

}
