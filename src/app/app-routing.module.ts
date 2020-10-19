import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataLabsComponent } from './data-labs/data-labs.component';

const routes: Routes = [
  {
    path:'datalabs',
    component:DataLabsComponent
  },
  {
    path:'',redirectTo:'datalabs',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
