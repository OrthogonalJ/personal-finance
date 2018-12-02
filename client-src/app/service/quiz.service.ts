import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Quiz} from '../model/quiz';
import {Question} from '../model/question';

// let questions = [
//   new Question('1+1=?', '2', ['1', '2', '3', '4']),
//   new Question('1+2=?', '3', ['1', '2', '3', '4'])
// ];

// let defaultQuiz = new Quiz(questions);

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  readonly questionsUrl: string = 'api/questions';
  private quiz: Quiz = null;

  constructor(private http: HttpClient) {}

  getNewQuiz(): Observable<Quiz> {
    return this.getQuestions()
      .pipe(
        map((questions: Question[]): Quiz => {
          this.quiz = new Quiz(questions);
          return this.quiz;
        }),
        tap((quiz: Quiz) => console.log(quiz))
      );
    // return of(new Quiz(questions));
  }

  getQuiz(): Observable<Quiz> {
    console.log('Getting existing quiz');
    console.log(this.quiz);
    return of(this.quiz);
  }

  // getQuiz(): Quiz {
  //   return this.quiz;
  // }

  updateQuiz(quiz: Quiz): Observable<Quiz> {
    this.quiz = quiz;
    return of(this.quiz);
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<any[]>(this.questionsUrl)
      .pipe(
        map((rawQuestions: any[]) => rawQuestions.map(q => Question.fromObject(q))),
        tap(_ => console.log('fetched questions')),
        catchError((err) => {
          console.error(err);
          return of([] as Question[]);
        })
      );
  }

}
