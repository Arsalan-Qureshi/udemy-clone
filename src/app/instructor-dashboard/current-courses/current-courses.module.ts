import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageComponent } from '../../edit&manage-course/manage/manage.component';
import { CurrentCoursesRoutingModule } from './current-courses-routing.module';
import { CurrentCoursesComponent } from './current-courses.component';


@NgModule({
  declarations: [
    CurrentCoursesComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CurrentCoursesRoutingModule,
  ],
  providers: [],
  bootstrap: [CurrentCoursesComponent]
})
export class CurrentRoutingModule { }
