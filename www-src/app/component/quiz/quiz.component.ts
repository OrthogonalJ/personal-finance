import { Component, OnInit } from '@angular/core';
import {Question} from '../../model/question';
import {Quiz} from 'www-src/app/model/quiz';
import { QuestionAttempt } from 'www-src/app/model/question-attempt';

let questions = [
  new Question('1+1=?', '2', ['1', '2', '3', '4']),
  new Question('1+2=?', '3', ['1', '2', '3', '4'])
];

let quiz = new Quiz(questions);

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  // Model
  quiz: Quiz;
  // Component State
  // selectedAnswer: string;
  // nextBtnText: string;

  constructor() {
    this.quiz = quiz;
  }

  ngOnInit() {
    //this.updateNextBtnText();
    // this.resetSelectedAnswer();
  }

  onAnswerOptionClick(selectedAnswer: string) {
    // this.selectedAnswer = selectedAnswer;
    this.quiz.submitAnswer(selectedAnswer);
  }

  onNextBtnClick() {
    if (this.quiz.hasNextQuestion()) {
      this.quiz.nextQuestion();
    }

    console.log(this.quiz);

    //this.updateNextBtnText();
  }

  // hasSelectedAnswer(): boolean {
  //   return this.selectedAnswer !== QuestionAttempt.UNANSWERED;
  // }

  // private resetComponentState() {
  //   // Clear selected answer
  //   this.selectedAnswer = QuestionAttempt.UNANSWERED;
  //   // Update next button text
  //   this.nextBtnText = this.quiz.hasNextQuestion() ? "Next" : "Finish";
  // }

  // private updateNextBtnText() {
  //   this.nextBtnText = this.quiz.hasNextQuestion() ? "Next" : "Finish";
  // }

  // private resetSelectedAnswer() {
  //   this.selectedAnswer = QuestionAttempt.UNANSWERED;
  // }

}
