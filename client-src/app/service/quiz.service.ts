import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Quiz} from '../model/quiz';
import {Question} from '../model/question';

let questions = [
  new Question('1+1=?', '2', ['1', '2', '3', '4']),
  new Question('1+2=?', '3', ['1', '2', '3', '4'])
];

let defaultQuiz = new Quiz(questions);

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quiz: Quiz = null;

  constructor() {}

  getNewQuiz(): Observable<Quiz> {
    return of(new Quiz(questions));
  }

  getQuiz(): Observable<Quiz> {
    return of(this.quiz);
  }

  // getQuiz(): Quiz {
  //   return this.quiz;
  // }

  updateQuiz(quiz: Quiz): Observable<any> {
    this.quiz = quiz;
    return of(this.quiz);
  }

}
