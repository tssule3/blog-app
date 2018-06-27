import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: 'blog', component: PostsListComponent },
  {path: 'blog:/id', component: PostsDetailComponent},
  {path: 'dashboard', component: PostsDashboardComponent}
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostsDashboardComponent, PostsDetailComponent, PostsListComponent]
})
export class PostsModule { }
