import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent  {
    constructor(private router: Router){}
  
    jobs: Post[] = [
      new Post("Kenneth Cleaner", "https://www.indeed.com/q-Janitorial-l-Seattle,-WA-jobs.html"),
      new Post("Aj's Bollsheets", "https://www.bollandbranch.com/"),
      new Post("D.I.Y", "https://www.glassdoor.com/index.html")
    ];
  
    goToJobsPage(clickedPost: Post) {
      this.router.navigate(['post', clickedPost.id]);
    };
  
  }