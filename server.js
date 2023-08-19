const express = require('express');
const app = express();
const veggies = require("./Models/Vegetables");

app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

// index; all veggies
app.get('/vegetables', (req, res) => {
    res.render('Index', {veggies: veggies});
});

// new; has a form to submit a new veggie
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});

// show; shows each individual veggie that's clicked
app.get('/vegetables/:index', (req, res) => {
    res.render('Show', {veggie: veggies[req.params.index]});
});

// handles POST request made to vegetables
app.post('/vegetables', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    veggies.push(req.body);
    res.redirect("/vegetables")
})

app.listen('3000', () => {
    console.log("Listening");
});