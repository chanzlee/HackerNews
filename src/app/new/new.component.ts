import { Component, OnInit } from '@angular/core';
import { Post } from 'app/models/post';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {


  posts: Post[] = [
    new Post("On Message Ordering", "https://cloud.google.com/pubsub/docs/ordering"),
    new Post("Why I No Longer Use Redux with React", "https://www.youtube.com/watch?v=pUlwhe-kmog"),
    new Post("Share your automation stories", "https://www.indiehackers.com/forum/share-your-automation-stories-8e1ecff5d9")
  ];

}
