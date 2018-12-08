import express from 'express';
import {QuestionController} from '../controller/question-controller';

let apiController = new QuestionController();


let apiRouter = express.Router();

apiRouter.get('/test', (req, res) => {
    res.send('Hello, World!');
});

apiRouter.get('/querytest', (req, res) => {
    res.send('ID: ' + req.query.id);
});

apiRouter.get('/questions/', apiController.getQuestions);



export {apiRouter};
