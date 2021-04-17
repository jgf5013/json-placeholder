import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = {
      id: 1,
      userId: 1,
      title: 'lorem',
      body: 'ipsum'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loop through the available sides', () => {
    let i = 0;
    component.postSides.forEach(side => {
      expect(component.sideIndex).toEqual(i);
      i++;
      component.toggle();
    });
    expect(component.sideIndex).toEqual(0);
  });
});
