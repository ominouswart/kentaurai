const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('node:fs');
const md5 = require('md5');
const app = express();
const port = 3001;
 
app.use(cookieParser());
// app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
 
app.post('/register', (req, res) => {

    const { email } = req.body;

    if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({
            message: 'Siunciamoje formoje yra klaidu',
            errors: {
                email: 'El. pasto formatas yra neteisingas'
            }
        }).end();
    }


    res.status(422).json({
        message: 'Viskas blogai'
    })
});
 
 
 
 
 
app.listen(port, _ => {
    console.log(`Books app listening on port ${port}`);
});