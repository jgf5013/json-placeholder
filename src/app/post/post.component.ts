import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HoverEventDirection } from '../constants';
import { POST_SIDES } from './constants';
import { Post, PostHoverEvent } from './types';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  postSides = POST_SIDES;
  sideIndex: number = 0;

  @Input() post!: Post;
  @Input() focused: boolean = false;
  @Output() postHoverEvent = new EventEmitter<PostHoverEvent> ();
  constructor() {
    
  }
  onMouseOver() {
    this.postHoverEvent.emit({
      eventType: HoverEventDirection.Over,
      post: this.post
    });
  }

  onMouseOut() {
    this.postHoverEvent.emit({
      eventType: HoverEventDirection.Out,
      post: this.post
    });
  }

  toggle() {
    this.sideIndex = (++this.sideIndex) % POST_SIDES.length;
  }

}
