import { Component, OnInit } from '@angular/core';
import { VideoGuideService } from '../services/video-guide.service';
import { VideoGuide } from '../models/video-guide';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video-guide',
  templateUrl: './add-video-guide.component.html',
  styleUrls: ['./add-video-guide.component.css']
})
export class AddVideoGuideComponent implements OnInit {

  videoGuide: any;
  submitted = false;
  id: string;
  videoGuideId: string;

  constructor(private videoGuideService: VideoGuideService, private route: ActivatedRoute, private router: Router) { 
    this.videoGuide = new VideoGuide(null, null, null, null);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.videoGuideId = params.video_guide_id;
    });
    

    if(this.videoGuideId) {
      this.getVideoGuide();
    }
  }

  onSubmit(vguideForm: NgForm) {
    if(this.videoGuideId) {
      this.videoGuideService.updateVideoGuide(this.id, this.videoGuideId, vguideForm.value).subscribe(res => {
        this.router.navigate(['/courses/' + this.id]);
      },
      err => {

      });
    } else {
      this.videoGuideService.createVideoGuide(this.id, vguideForm.value).subscribe(res => {
        this.router.navigate(['/courses/' + this.id]);
      },
      err => {

      });
    }
  }

  getVideoGuide() {
    this.videoGuideService.getVideoGuide(this.id, this.videoGuideId).subscribe(res => {
    console.log(res);
      this.videoGuide = res;
    },
    err => {

    });
  }
 
}
