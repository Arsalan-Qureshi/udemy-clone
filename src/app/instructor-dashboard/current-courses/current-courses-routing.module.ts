import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from '../../edit&manage-course/manage/manage.component';

const routes: Routes = [
    {
    path:'editCourse',
    component:ManageComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CurrentCoursesRoutingModule { }
