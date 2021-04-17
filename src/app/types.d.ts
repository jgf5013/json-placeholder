import { Post } from './post/types';

export { Post };
export interface JsonPlaceholderError {
    message: string,
    post?: Partial<Post>,
    error: any // Error object returned from API calls, etc.
}