import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PracticeComponent} from './practice/practice.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'practice', component:PracticeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
