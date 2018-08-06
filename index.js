require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({extended: true}));
app.use(ejsLayouts);

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

app.get('/project1', (req, res) => {
	res.render('portfolio/p1');
});

app.get('/project2', (req, res) => {
	res.render('portfolio/p2');
});

app.get('/project3', (req, res) => {
	res.render('portfolio/p2');
});

app.get('/project4', (req, res) => {
	res.render('portfolio/p4');
});

app.get('/sp1', (req, res) => {
	res.render('portfolio/sp1');
});

app.get('/sp2', (req, res) => {
	res.render('portfolio/sp2');
});


app.get('/resume', (req, res) => {
	res.sendFile(__dirname+ '/static/resume/Scott_Ammon_Resume.pdf');
})

app.listen(port, function() {console.log('Hooked on ' + port)});