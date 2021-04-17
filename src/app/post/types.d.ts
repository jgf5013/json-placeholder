import { HoverEventDirection } from '../constants';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostHoverEvent {
  eventType: HoverEventDirection;
  post: Post;
}