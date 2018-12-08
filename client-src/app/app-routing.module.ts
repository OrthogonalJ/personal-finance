import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './component/quiz/quiz.component';
import {ResultsComponent} from './component/results/results.component';
import {QuizLauncherComponent} from './component/quiz-launcher/quiz-launcher.component';

const routes: Routes = [
  {path: '', redirectTo: '/launchquiz', pathMatch: 'full'},
  {path: 'quiz', component: QuizComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'launchquiz', component: QuizLauncherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
