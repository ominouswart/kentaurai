const express = require('express');
const app = express();
const port = 80;
app.use(express.static('public'));

// Router

app.get('/bebras', (req, res) => {
    const content = '<h1>Labas bebrai</h1>';
  res.send(content);
});

app.get('/bebras/jonas', (req, res) => {
    const content = '<h1>Labas bebrai vardu Jonas</h1>';
  res.send(content);
});

app.get('/zuikis', (req, res) => {
    const content = '<h1>Labas zuiki</h1>';
  res.send(content);
});

app.get('/zveris/:animal', (req, res) => {
    const animal = req.params.animal;
    const content = '<h1>Labas, ' + animal + '</h1>';
  res.send(content);
});

app.get('/sum/:firstNumber/:secondNumber', (req, res) => {
  const first = parseInt(req.params.firstNumber);
  const second = parseInt(req.params.secondNumber);
  const sum = first + second;
  const content = '<h1>Suma: ' + sum + '</h1>';
res.send(content);
});

app.get('/sum/:firstNumber/plus/:secondNumber', (req, res) => {
  const first = parseInt(req.params.firstNumber);
  const second = parseInt(req.params.secondNumber);
  const sum = first + second;
  const content = '<h1>Suma: ' + sum + '</h1>';
res.send(content);
});

app.get('/sum/calc/:firstNumber/:what/:secondNumber', (req, res) => {
  const what = req.params.what;

  const first = parseInt(req.params.firstNumber);
  const second = parseInt(req.params.secondNumber);
  let sum = 0;
  if (what === 'plus') {
    sum = first + second;
  } else if (what === 'minus') {
    sum = first - second;
  }
  const content = '<h1>Suma: ' + sum + '</h1>';
res.send(content);
});

// QUERY QUERY QUERY QUERY QUERY QUERY

// http://localhost/narve?sedi=karve&guli=zuikis

app.get('/narve', (req, res) => {
  const kas = req.query.sedi;
  const kas2 = req.query.guli;

  const content = '<h1>Sedi: ' + kas + '</h1><h1>Guli: ' + kas2 + '</h1>';
  res.send(content);
});

app.get('/sumatorius', (req, res) => {
  const kas = parseInt(req.query.num);
  const kas2 = parseInt(req.query.num2);
  const sum = kas + kas2;

  const content = '<h1>Sedi: ' + sum + '</h1>';
  res.send(content);
});

app.listen(port, () => {
  console.log(`Zoologijos sodas veikia ant ${port} porto`);
});