export class Question {
    content: string;
    correctAnswer: string;
    answerOptions: string[];

    constructor(content: string, correctAnswer: string, answerOptions: string[]) {
        this.content = content;
        this.correctAnswer = correctAnswer;
        this.answerOptions = answerOptions;
    }

    isCorrectAnswer(answer: string): boolean {
        return answer === this.correctAnswer;
    }
}