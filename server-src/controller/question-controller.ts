import mongoose from 'mongoose';
import {Question} from '../model/question';
import {asyncMiddleware} from '../util/async-middleware';
import und from 'underscore';

export class QuestionController {

    constructor() {}

    getQuestions = asyncMiddleware(async (req, res, next) => {
        let questions = await this.getQuestionSample(10);
        // let questions = await Question.find().limit(10);
        res.json(questions);
    });

    private getQuestionSample = async (numQuestions) => {
        let questionIds = await Question.find().select({_id: 1});
        let sampleIds = und.take(und.shuffle(questionIds), numQuestions);
        return await Question.find({_id: { $in: sampleIds }});
    };

}