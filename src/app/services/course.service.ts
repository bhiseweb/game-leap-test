import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService {

  API_URL = 'api/courses';

  constructor(private http: HttpClient) { 
  }

  getCourses() {
    return this.http.get(this.API_URL);
  }

  createCourse(data) {
    return this.http.post(this.API_URL, data);
  }

  updateCourse(id, data) {
    return this.http.put(`${this.API_URL}/${id}`, data);
  }

  destroyCourse(id) {
    return this.http.delete(`${this.API_URL}/${id}`); 
  }

  getCourse(id) {
    return this.http.get(`${this.API_URL}/${id}`); 
  }
}
