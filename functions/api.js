const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors')
const words = require('./words.json')
const app = express();
app.use(cors())
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'Greetings':`Welcome to Dashrath's First Hosted API on Netlify!!`,
        'getWordsList':'use /words'
    })
})

router.get('/words', (req, res) => {
    res.json(words)
});

app.use('/', router);
module.exports.handler = serverless(app)
