const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const mysql = require('mysql');
const fs = require('node:fs');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest'
});

connection.connect();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (_, res) => {

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');

    const sql = `
    SELECT id, name, height, type
    FROM trees
    -- WHERE height > 5
    ORDER BY type, height DESC
    `;


    connection.query(sql, (err, rows) => {
        if (err) throw err;
      
        console.log('Answer: ', rows);
        
        let listItems = '';
        rows.forEach(tree => {
            let liHtml = listItem;
            liHtml = liHtml.replace('{{ID}}', tree.id)
            .replace('{{NAME}}', tree.name)
            .replace('{{HEIGHT}}', tree.height)
            .replace('{{TYPE}}', tree.type);
            listItems += liHtml;
        });
        html = html.replace('{{LI}}', listItems);
        res.send(html);
      });
});

app.post('/plant', (req, res) => {

    const { name, height, type } = req.body;

    // const sql = `
    // INSERT INTO trees (name, height, type)
    // VALUES ( '${name}', ${parseFloat(height)}, '${type}' )
    // `;

    const sql = `
    INSERT INTO trees (name, height, type)
    VALUES ( ?, ?, ? )
    `;


    connection.query(sql, [name, parseFloat(height), type], (err) => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });


    
});

app.post('/cut', (req, res) => {

    const id = req.body.id;

    // const sql = `
    // DELETE FROM trees
    // WHERE id = ${id}
    // `;

    const sql = `
    DELETE FROM trees
    WHERE id = ?
    `;

    connection.query(sql, [id], (err) => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });

});

app.post('/water', (req, res) => {

    const { id, height } = req.body;

    const sql = `
    UPDATE trees
    SET height = ?
    WHERE id = ?
    `;


    connection.query(sql, [parseFloat(height), id], (err) => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });

});


app.listen(port, _ => {
    console.log(`trees manager listening on port ${port}`);
});