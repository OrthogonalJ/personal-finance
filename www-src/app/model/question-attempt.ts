import {Question} from './question';

export class QuestionAttempt {
    static readonly UNANSWERED: string = "__UNANSWERED__";
    question: Question;
    selectedAnswer: string;
    // correct: boolean;

    constructor(question: Question, selectedAnswer?: string) {
        this.question = question;
        this.selectedAnswer = (selectedAnswer == undefined) ? 
                QuestionAttempt.UNANSWERED : selectedAnswer;
        // this.correct = this.question.isCorrectAnswer(this.selectedAnswer);
    }

    submitAnswer(selectedAnswer: string) {
        this.selectedAnswer = selectedAnswer;
        // this.correct = this.question.isCorrectAnswer(selectedAnswer);
    }

    isAnswered(): boolean {
        return this.selectedAnswer !== QuestionAttempt.UNANSWERED;
    }

    isCorrect(): boolean {
        return this.question.isCorrectAnswer(this.selectedAnswer);
    }
}