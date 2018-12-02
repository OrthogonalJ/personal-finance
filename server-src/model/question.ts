import mongoose from 'mongoose';

let questionSchema = new mongoose.Schema({
    content: String,
    correctAnswer: String,
    answerOptions: [String]
});

export let Question = mongoose.model('question', questionSchema);

