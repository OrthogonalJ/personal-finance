import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Quiz} from '../../model/quiz';
import {QuizService} from '../../service/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  // Component State
  selectedAnswer: string = null;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.quizService.getNewQuiz().subscribe(quiz => this.quiz = quiz);
  }

  onAnswerOptionClick(selectedAnswer: string) {
    this.quiz.submitAnswer(selectedAnswer);
  }

  onNextBtnClick() {
    if (this.quiz.hasNextQuestion()) {
      this.quiz.nextQuestion();
      this.resetComponentState();
    } else {
      // Show results screen
      this.quizService.updateQuiz(this.quiz)
        .subscribe(quiz => this.router.navigate(['/results']));
    }
  }

  private resetComponentState() {
    this.selectedAnswer = null;
  }
}
