import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz';
import {QuizService} from '../../service/quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  quiz: Quiz;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuiz().subscribe(quiz => this.quiz = quiz);
  }

}
