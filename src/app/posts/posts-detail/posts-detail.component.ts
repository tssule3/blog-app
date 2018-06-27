import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
post: Post = {
  author: '', authorId: '', content: '', image: '', published: null, title: ''
};
tempDate;
  constructor(private act: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.getPostData();
    // this.tempDate = new Date(this.post.published);
    // console.log(this.tempDate.toUTCString());
  }
  getPostData() {
    const id = this.act.snapshot.paramMap.get('id');
    this.service.getPostsDoc(id).subscribe(
      (data) => {
        this.post = data;
        this.tempDate = new Date(1530037800 * 1000);
        console.log(this.tempDate);
      }
    );
  }
}
