const express = require('express');
const { message } = require('laravel-mix/src/Log');
const app = express();
const port = 80;

app.use(express.static('public'));

app.get('/:n/:s', (req, res) => {
    const name = req.params.n;
    const surname = req.params.s;
    res.json({
        message: 'OK',
        got: {
            name, surname
        }
    })
});

app.listen(port, () => {
  console.log(`js_026 app listening on port ${port}`);
});