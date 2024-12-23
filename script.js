const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); // ek instance h

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/newsapp', { // mongoose connect
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Welcome to the News App!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { // server 
    console.log(`Server is running on port ${PORT}`);
});