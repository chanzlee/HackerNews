import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    console.log(this.route);
    this.route.params.forEach((urlParameters) => {
    this.postId = parseInt(urlParameters['id']);
    
    });
  }
}
