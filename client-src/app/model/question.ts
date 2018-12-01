export class Question {
    content: string;
    correctAnswer: string;
    answerOptions: string[];
    maxScore: number;

    constructor(content: string, correctAnswer: string, answerOptions: string[], 
            maxScore: number = 1) {
        
        this.content = content;
        this.correctAnswer = correctAnswer;
        this.answerOptions = answerOptions;
        this.maxScore = maxScore;
    }

    isCorrectAnswer(answer: string): boolean {
        return answer === this.correctAnswer;
    }

    getScoreFor(selectedAnswer: string): number {
        return this.isCorrectAnswer(selectedAnswer) ? this.maxScore : 0;
    }
}