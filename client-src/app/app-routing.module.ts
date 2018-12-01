import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './component/quiz/quiz.component';
import {ResultsComponent} from './component/results/results.component';

const routes: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: '', redirectTo: '/quiz', pathMatch: 'full'},
  {path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
