import mongoose from 'mongoose';
import {Question} from '../model/question';
import {asyncMiddleware} from '../util/async-middleware';

export class QuestionController {

    constructor() {
        // mongoose.connect('mongodb://localhost:27017/quiz_game');
    }

    getQuestions = asyncMiddleware(async (req, res, next) => {
        let questions = await Question.find();
        res.json(questions);
    });

}