const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const words = require('./words.json')

//Setting PORT Assigned by the Client System or 3000 in case there isn't any
const port = process.env.PORT || 3000;

//Sending Array of 5 Letter words
app.get('/api/v1/words', (req, res) => {
    res.send(words)
});

app.listen(port, console.log(`Server running on ${port}`))