import * as path from 'path';
import express from 'express';
import {apiRouter} from './route/api-router';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const PORT = 8080;
const DB_URI = 'mongodb://localhost:27017/quiz_game';

//// MAIN ////

// DB Connection
mongoose.connect(DB_URI);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/// App ///

let app = express();

// Middleware
app.use(bodyParser.json());

// Routing
app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(PORT, () => console.log(`quiz-game server is runing on port ${PORT}`));
