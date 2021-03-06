import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Quiz} from '../../model/quiz';
import {QuizService} from '../../service/quiz.service';
import {Settings} from '../../model/settings';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  // Component State
  selectedAnswer: string = null;
  questionNumber: number = 1;

  constructor(
      private router: Router, 
      private quizService: QuizService, 
      public settings: Settings) {}

  ngOnInit() {
    this.quizService.getNewQuiz(this.settings.numQuestions).subscribe(quiz => {
      this.quiz = quiz;
      this.quiz.timer.start();
    });
    console.log(this.settings);
  }

  onAnswerOptionClick(selectedAnswer: string) {
    this.quiz.submitAnswer(selectedAnswer);
  }

  onNextBtnClick() {
    if (this.quiz.hasNextQuestion()) {
      this.quiz.nextQuestion();
      this.resetComponentState();
      ++this.questionNumber;
    } else {
      this.quiz.timer.stop();
      // Show results screen
      this.quizService.updateQuiz(this.quiz)
        .subscribe(quiz => this.router.navigate(['/results']));
    }
  }

  private resetComponentState() {
    this.selectedAnswer = null;
  }
}
