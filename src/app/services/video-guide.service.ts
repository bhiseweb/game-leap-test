import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VideoGuideService {

  API_URL = '/api/courses/';

  constructor(private http: HttpClient) { }

  getVideoGuides(courseId) {
    return this.http.get(`${this.API_URL}${courseId}/video-guides`);
  }

  createVideoGuide(courseId, data) {
    return this.http.post(`${this.API_URL}${courseId}/video-guides`, data);
  }

  getVideoGuide(courseId, videoGuideId) {
    return this.http.get(`${this.API_URL}${courseId}/video-guides/${videoGuideId}`);
  }

  destroyVideoGuide(courseId, videoGuideId) {
    return this.http.delete(`${this.API_URL}${courseId}/video-guides/${videoGuideId}`);
  }

  updateVideoGuide(courseId, videoGuideId, data) {
    return this.http.put(`${this.API_URL}${courseId}/video-guides/${videoGuideId}`, data);
  }
}
