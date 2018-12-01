import * as path from 'path';
import express from 'express';

const PORT = 8080;

//// MAIN ////

let app = express();

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(PORT, () => console.log(`quiz-game server is runing on port ${PORT}`));
