import { Component, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Post } from './post/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  breadCrumbs: string[] = [];
  posts: Post[] = [];

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router, public mediaObserver: MediaObserver) {
    
    this.listenToMediaUpdates();
  }


  listenToMediaUpdates(): void {
    this.mediaObserver.asObservable()
    .subscribe((change: MediaChange[]) => {
      if (!this.mediaObserver.isActive('gt-xs')) {
        this.sidenav.close();
      }
    });
  }


}
