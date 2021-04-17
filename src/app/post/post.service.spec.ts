import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { Post } from './types';
import { HttpErrorResponse } from '@angular/common/http';

const mockPosts = [
  {id: 1, userId: 1, title: 'lorem', body: 'ipsum'},
  {id: 2, userId: 2, title: 'lorem', body: 'ipsum'},
  {id: 3, userId: 3, title: 'lorem', body: 'ipsum'}
];

describe('PostService', () => {
  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    injector = getTestBed();
    service = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  });
  
  it('should make a call to return posts', () => {
    service.getPosts().then((value: Post[]) => {
      expect(value.length).toEqual(mockPosts.length);
    });
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    httpMock.verify();
    expect(req.request.method).toEqual('GET');
    
    req.flush(mockPosts);
 
  });
  
  it('should make a call to return posts', () => {
    service.getPosts().then((value: Post[]) => {
      fail('should have failed!')
    })
    .catch((reason: HttpErrorResponse) => {
      expect(reason.status).toEqual(500);
    })
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    httpMock.verify();
    expect(req.request.method).toEqual('GET');
    req.flush('mocked exception', {status: 500, statusText: 'service exception'});
 
  });
  
});
