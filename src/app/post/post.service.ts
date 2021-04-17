import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SHUFFLE } from './constants';
import { Post } from './types';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  api: string = `${environment.BASE_URL_JSON_PLACEHOLDER_API}/posts`;
  constructor(private http: HttpClient) {
  }

  getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(this.api).toPromise()
      .catch((reason: any) => {
        console.error(`PostService::getPosts reason=`, reason);
        // Note: Letting the calling component decide how to handle error
        throw reason;
      })
      .then(this.shuffle);
  }

  private shuffle(posts: Post[]): Post[] {
    
    if(SHUFFLE) {
      /* Note: This is not super efficient. If dealing with larger arrays, this will need replaced
       * by a more performant solution */
      return posts.sort(() => Math.random() - 0.5);
    } else {
      return posts;
    }
  }
}
