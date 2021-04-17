import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material/app-material.module';
import { PostBrowserComponent } from './post-browser.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';


@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [PostBrowserComponent, PostComponent],
  exports: [

  ]
})
export class PostModule { }