import { Component } from '@angular/core';
import { LoadingStatuses, HoverEventDirection } from '../constants';
import { PostService } from './post.service';
import { Post, PostHoverEvent } from './types';


@Component({
  selector: 'post-browser',
  templateUrl: './post-browser.component.html',
  styleUrls: ['./post-browser.component.scss']
})
export class PostBrowserComponent {

  loadingStatuses = LoadingStatuses;
  postLoadStatus?: LoadingStatuses = LoadingStatuses.Loading;
  posts: Post[] = [];
  focusedPost?: Post | null;
  constructor(private postService: PostService) {
    this.getPosts();
  }
  
  private getPosts(): void {
    this.postService.getPosts().then((posts: Post[]) => {
      this.posts = posts;
      this.postLoadStatus = LoadingStatuses.Success;
    }).catch(() => {
      this.postLoadStatus = LoadingStatuses.Failure;
    });
  }

  onPostHoverEvent(event: PostHoverEvent): void {
    if(event.eventType === HoverEventDirection.Out) {
      this.focusedPost = null;
    } else if(event.eventType === HoverEventDirection.Over) {
      this.focusedPost = event.post;
    }
  }


}

