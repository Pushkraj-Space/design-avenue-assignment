const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const mongoose = require('mongoose');
let uri = `mongodb://127.0.0.1:27017/demo`
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});     
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log("Connected to database"));

app.get('/', (req, res) => {
    res.render('./');
})

const Form = require('./models/formModel');
app.post('/save', async (req, res) => {
    let data = new Form({
        ...req.body
    })
    await data.save();
    res.render("success.ejs");
})

app.get('*', (req, res) => {
    res.render("notfound.ejs");
})

app.listen(8081, () => {
    console.log("Applicaion is running");
})