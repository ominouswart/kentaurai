const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs = require('node:fs');
const { error } = require('node:console');

const animalZoo = [
    {name: 'Lion', species: 'Panthera leo', age: 10},
    {name: 'Tiger', species: 'Panthera tigris', age: 12},
    {name: 'Elephant', species: 'Loxodonta africana', age: 15},
    {name: 'Giraffe', species: 'Giraffa camelopardalis', age: 20},
    {name: 'Zebra', species: 'Equus zebra', age: 8},
    {name: 'Hippopotamus', species: 'Hippopotamus amphibius', age: 25},
    {name: 'Crocodile', species: 'Crocodylus niloticus', age: 30},
    {name: 'Flamingo', species: 'Phoenicopterus', age: 5},
    {name: 'Penguin', species: 'Aptenodytes forsteri', age: 3},
    {name: 'Kangaroo', species: 'Macropus', age: 7},
    {name: 'Koala', species: 'Phascolarctos cinereus', age: 4},
    {name: 'Kookaburra', species: 'Dacelo novaeguineae', age: 2},
    {name: 'Platypus', species: 'Ornithorhynchus anatinus', age: 6},
    {name: 'Wallaby', species: 'Macropus', age: 5},
    {name: 'Dingo', species: 'Canis lupus dingo', age: 8}
];


app.get('/', (req, res) => {
    try {

        

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');
    let data = fs.readFileSync('./data/animals.json', 'utf8');
    data = JSON.parse(data);
    let listItems = '';
    data.forEach(li => {
        let liHtml = listItem;
        liHtml = liHtml.replace('{{NAME}}', li.name)
        .replace('{{SPECIES}}', li.species)
        .replace('{{AGE}}', li.age)
        .replace('{{NAMETWO}}', li.name);
        listItems += liHtml;
    });
    html = html.replace('{{LI}}', listItems);
    res.send(html);
} catch(error) {
    console.error(error);
}
});

app.get('/addAnimal', (req, res) => {
    try {
    let html = fs.readFileSync('./data/create.html', 'utf8');
    res.send(html);
    } catch(error) {
        console.error(error);
    }
});

app.post('/saveAnimal', (req, res) => {

    try {
        console.log('Received data:', req.body);

    const name = req.body.name;
    const species = req.body.species;
    const age = parseInt(req.body.age);
    let data = fs.readFileSync('./data/animals.json', 'utf8');
    data = JSON.parse(data);
    data.push({ name, species, age });
    data = JSON.stringify(data);
    fs.writeFileSync('./data/animals.json', data);

    if (!name || !species || isNaN(age)) {
        console.error('Invalid input:', { name, species, age });
        return res.status(400).send('Invalid input.');
    }

    console.log('animal saved: ', { name, species, age });

    res.redirect(302, '/');

    } catch (error) {
        console.error(error);
    }
});

app.get('/edit/:name', (req, res) => {

    
    let data = fs.readFileSync('./data/animals.json', 'utf8');
    data = JSON.parse(data);
    const animalName = req.params.name;
    console.log(`searching for: ${animalName}`);
    const animal = data.find(a => a.name === animalName);

    let html = fs.readFileSync('./data/edit.html', 'utf8');
        html = html.replace('{{NAMETWO}}', animal.name)
        .replace('{{SPECIES}}', animal.species)
        .replace('{{AGE}}', animal.age)
        .replace('{{NAME}}', animal.name);
    console.log(animal.name);

    res.send(html);
    
});

app.post('/updateanimal/:name', (req, res) => {

    const name = req.body.name;
    const species = req.body.species;
    const age = parseInt(req.body.age);
    let data = fs.readFileSync('./data/animals.json', 'utf8');
    data = JSON.parse(data);
    data = data.map(a => a.name === req.params.name ? { ...a, name, species, age } : a);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/animals.json', data);


    res.redirect(302, 'http://localhost/');
});


app.listen(port, _ => {
    console.log(`animals app listening on port ${port}`);
});