import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DecipherComponent } from './decipher/decipher.component';
import { QuizzComponent } from './quizz/quizz.component';

const routes: Routes = [
  //{ path: 'decipher', component: DecipherComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MaterializeNg2RoutingModule { }
