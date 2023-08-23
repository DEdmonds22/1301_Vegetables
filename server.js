const express = require('express');
const app = express();
const veggies = require("./Models/Vegetables");
// ---------------
const Vegetable = require('./Models/VegetableSchema');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ---------------


app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

// INDEX; index; all veggies
app.get('/vegetables', (req, res) => {
    Vegetable.find({})
        .then((arrayOfVeggies) => {
            res.render('Index', {veggies: arrayOfVeggies});
        })
        .catch(error => {
            console.error(error);
        })
});

// NEW; new; has a form to submit a new veggie
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});

// DELETE

//UPDATE

// CREATE; handles POST request made to vegetables
app.post('/vegetables', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Vegetable.create(req.body)
        .then(createdVeggie => {
            res.redirect('/vegetables')
        })
        .catch(error => {
            console.error(error)
        })
});

// EDIT

// SHOW; show; shows each individual veggie that's clicked
app.get('/vegetables/:index', (req, res) => {
    Vegetable.findOne({_id: req.params.index})
        .then(foundVeggie => {
            res.render('Show', {veggie: foundVeggie});
        })
        .catch(error => {
            console.error(error);
        })
});

app.listen('3000', () => {
    console.log("Listening");
});