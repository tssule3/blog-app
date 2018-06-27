import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../post';
import {PostService} from '../post.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts: Post;
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(
      (data) => {
        this.posts = data;
      }
    );
  }

}
