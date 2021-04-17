import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostBrowserComponent } from './post-browser.component';

const routes: Routes = [
  { path: '', component: PostBrowserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }