import {Question} from './question';

export class QuestionAttempt {
    static readonly UNANSWERED: string = "__UNANSWERED__";
    question: Question;
    selectedAnswer: string;

    constructor(question: Question, selectedAnswer?: string) {
        this.question = question;
        this.selectedAnswer = (selectedAnswer == undefined) ? 
                QuestionAttempt.UNANSWERED : selectedAnswer;
    }

    submitAnswer(selectedAnswer: string) {
        this.selectedAnswer = selectedAnswer;
    }

    isAnswered(): boolean {
        return this.selectedAnswer !== QuestionAttempt.UNANSWERED;
    }

    isCorrect(): boolean {
        return this.question.isCorrectAnswer(this.selectedAnswer);
    }

    getScore(): number {
        return this.question.getScoreFor(this.selectedAnswer);
    }
}