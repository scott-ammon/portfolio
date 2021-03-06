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
	res.locals.title = "Scott Ammon | Web Developer";
	res.render('index');
});

app.get('/about', (req, res) => {
	res.locals.title = "Scott Ammon | About";
	res.render('about');
});

app.get('/maker-collab', (req, res) => {
	res.locals.title = "Scott Ammon | Maker-Collab";
	res.render('projects/maker-collab');
});

app.get('/nim', (req, res) => {
	res.locals.title = "Scott Ammon | Nim";
	res.render('projects/nim');
});

app.get('/orca-reloaded', (req, res) => {
	res.locals.title = "Scott Ammon | ORCA";
	res.render('projects/orca-reloaded');
});

app.get('/arduino', (req, res) => {
	res.locals.title = "Scott Ammon | Arduino";
	res.render('projects/arduino');
});

app.get('/pso', (req, res) => {
	res.locals.title = "Scott Ammon | Particle Swarm";
	res.render('projects/pso');
});

app.get('/resume', (req, res) => {
	res.sendFile(__dirname+ '/static/resume/Scott_Ammon_Resume.pdf');
})

app.listen(port, function() {console.log('Hooked on ' + port)});