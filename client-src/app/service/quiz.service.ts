import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getNewQuiz(numQuestions: number): Observable<Quiz> {
    return this.getQuestions(numQuestions)
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

  getQuestions(numQuestions: number): Observable<Question[]> {
    let options = { params: new HttpParams().set('numQuestions', numQuestions.toString()) };

    return this.http.get<any[]>(this.questionsUrl, options)
      .pipe(
        map((rawQuestions: any[]): Question[] => rawQuestions.map(q => Question.fromObject(q))),
        tap(_ => console.log('fetched questions')),
        catchError(err => {
          console.error(err);
          return of([] as Question[]);
        })
      );
  }

}
