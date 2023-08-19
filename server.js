const express = require('express');
const app = express();
const veggies = require("./Models/Vegetables");

app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());

// index; all veggies
app.get('/vegetables', (req, res) => {
    res.render('Index', {veggies: veggies});
});

// new; has a form to submit a new veggie
app.get('/vegetables/new', (req, res) => {
    res.render();
});

// show; shows each individual veggie that's clicked
app.get('/vegetables/:index', (req, res) => {
    res.render('Show', {veggie: veggies[req.params.index]});
});

// handles forms request info
app.post('/vegetables', (req, res) => {
    console.log("posted")
})

app.listen('3000', () => {
    console.log("Listening");
});