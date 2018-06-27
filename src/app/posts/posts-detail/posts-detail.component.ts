import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {

  constructor(private act: ActivatedRoute) { }

  ngOnInit() {
  }

}
