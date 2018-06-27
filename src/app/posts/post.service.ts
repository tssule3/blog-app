import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection,
  AngularFirestoreDocument} from 'angularfire2/firestore';
import {Post} from './post';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable()
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;
  postsDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    );
  }

  getPosts(): Observable<any> {
    return this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getPostsDoc(id) {
    this.postsDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postsDoc.valueChanges();
  }
}
