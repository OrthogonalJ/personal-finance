import {QuestionAttempt} from './question-attempt';
import {Question} from './question';
import {Timer} from './timer';

export class Quiz {
    questionAttempts: QuestionAttempt[];
    currentQuestion: Question;
    timer: Timer;
    private currentQuestionIndex: number = 0;

    constructor(questions: Question[]) {
        this.timer = new Timer();
        this.questionAttempts = questions.map(question => new QuestionAttempt(question));
        this.currentQuestion = this.questionAttempts[0].question;
    }

    nextQuestion() {
        this.currentQuestion = this.questionAttempts[++this.currentQuestionIndex].question;
    }

    submitAnswer(selectedAnswer: string) {
        this.questionAttempts[this.currentQuestionIndex].submitAnswer(selectedAnswer);
    }

    hasNextQuestion(): boolean {
        return this.currentQuestionIndex < (this.questionAttempts.length - 1);
    }

    currentQuestionIsAnswered(): boolean {
        return this.questionAttempts[this.currentQuestionIndex].isAnswered();
    }

    getTotalScore(): number {
        return this.questionAttempts.reduce<number>(
            (total: number, questionAttempt) => total + questionAttempt.getScore(), 
            0
        );
    }

    length(): number {
        return this.questionAttempts.length;
    }
}
