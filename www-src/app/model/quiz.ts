import {QuestionAttempt} from './question-attempt';
import {Question} from './question';

export class Quiz {
    questionAttempts: QuestionAttempt[];
    currentQuestion: Question;
    private currentQuestionIndex: number = 0;

    constructor(questions: Question[]) {
        this.questionAttempts = questions.map((question) => new QuestionAttempt(question));
        this.currentQuestion = this.questionAttempts[0].question;
    }

    nextQuestion() {
        return this.currentQuestion = this.questionAttempts[++this.currentQuestionIndex].question;
    }

    submitAnswer(selectedAnswer: string) {
        this.questionAttempts[this.currentQuestionIndex].submitAnswer(selectedAnswer);
    }

    hasNextQuestion(): boolean {
        return this.currentQuestionIndex < (this.questionAttempts.length - 1);
    }

    currentQuestionIsAnswered(): boolean {
        return this.questionAttempts[0].isAnswered();
    }
}