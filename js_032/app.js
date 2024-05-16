const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const fs = require('node:fs');

const addMessage = (id, text, type) => {
    let data = fs.readFileSync('./data/sessions.json', 'utf8');
    data = JSON.parse(data);
    data = data.map(s => s.id === id ? {id, d: {...s.d, msg: {text, type} }} : s);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/sessions.json', data);
}

const showMessage = id => {
    let data = fs.readFileSync('./data/sessions.json', 'utf8');
    data = JSON.parse(data);
    const session = data.find(s => s.id === id);
    if (!session || !session.d?.msg) {
        return '';
    }
        const {text, type} = session.d?.msg;
        delete session.d.msg;
        data = JSON.stringify(data);
        fs.writeFileSync('./data/sessions.json', data);
        return `
        <div class="mt-3 ms-5 me-5 alert alert-${type}" role="alert">
            ${text}
        </div>
        `;
    }



app.use((req, res, next) => {
    const id = req.cookies.COLORS || '';
    let data = fs.readFileSync('./data/sessions.json', 'utf8');
    data = JSON.parse(data);
    if (!id) {
        const newId = uuidv4();
        data.push({id: newId, d: {}});
        data = JSON.stringify(data);
        fs.writeFileSync('./data/sessions.json', data);
        res.cookie('COLORS', newId, { maxAge: 24 * 60 * 60 * 1000 });
        req.sessionsId = newId;
    } else {
        let session = data.find(s => s.id === id);
        if (!session) {
            const newId = uuidv4();
            data.push({id: newId, d: {}});
            data = JSON.stringify(data);
            fs.writeFileSync('./data/sessions.json', data);
            res.cookie('COLORS', newId, { maxAge: 24 * 60 * 60 * 1000 });
            req.sessionsId = newId;
        } else {
            req.sessionsId = id;
            res.cookie('COLORS', id, { maxAge: 24 * 60 * 60 * 1000 });
        }
    }
    next()
});

app.get('/', (req, res) => {

    console.log('Cookies: ', req.cookies);

    res.cookie('labas', 'Saldainis shokoladinas', {maxAge: 0 });

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const nav = fs.readFileSync('./data/nav.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8');
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    let listItems = '';
    data.forEach(li => {
        let liHtml = listItem;
        liHtml = liHtml.replaceAll('{{ID}}', li.id).replace('{{SHAPE}}', li.shape).replace('COLOR', li.color);
        listItems += liHtml;
    });
    html = html.replace('{{NAV}}', nav).replace('{{LI}}', listItems).replace('{{MSG}}', showMessage(req.sessionsId));


    res.send(html);
});


app.get('/create', (req, res) => {
    let html = fs.readFileSync('./data/create.html', 'utf8');
    const nav = fs.readFileSync('./data/nav.html', 'utf8');
    html = html.replace('{{NAV}}', nav);
    res.send(html);
});


app.post('/store', (req, res) => {
    const color = req.body.color;
    const shape = parseInt(req.body.shape);
    const id = uuidv4();
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    data.push({ id, color, shape });
    data = JSON.stringify(data);
    fs.writeFileSync('./data/colors.json', data);


    addMessage(req.sessionsId, 'New color was added', 'success');

    res.redirect(302, 'http://colors.test');
});


app.get('/delete/:id', (req, res) => {
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    const color = data.find(c => c.id === req.params.id);
    if (!color) {
        let html = fs.readFileSync('./data/404.html', 'utf8');
        res.status(404).send(html);
    } else {
        let html = fs.readFileSync('./data/delete.html', 'utf8');
        const nav = fs.readFileSync('./data/nav.html', 'utf8');
        html = html.replace('{{NAV}}', nav).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replace('COLOR', color.color);
        res.send(html);
    }
});


app.post('/destroy/:id', (req, res) => {
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    data = data.filter(c => c.id !== req.params.id);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/colors.json', data);

    addMessage(req.sessionsId, 'Color was deleted', 'info');
    res.redirect(302, 'http://colors.test');
});


app.get('/edit/:id', (req, res) => {
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    const color = data.find(c => c.id === req.params.id);
    if (!color) {
        let html = fs.readFileSync('./data/404.html', 'utf8');
        res.status(404).send(html);
    } else {
        let html = fs.readFileSync('./data/edit.html', 'utf8');
        const nav = fs.readFileSync('./data/nav.html', 'utf8');
        html = html.replace('{{NAV}}', nav).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replaceAll('COLOR', color.color);
        [1, 2, 3].forEach(v => {
            if (v = color.shape) {
                html = html.replace(`{{VAL${v}}}`, 'checked');
            } else {
                html = html.replace(`{{VAL${v}}}`, '');
            }
        });
        res.send(html);
    }
});

app.get('/edit-csr/:id', (req, res) => {
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    const color = data.find(c => c.id === req.params.id);
    if (!color) {
        let html = fs.readFileSync('./data/404.html', 'utf8');
        res.status(404).send(html);
    } else {
        let html = fs.readFileSync('./data/edit-csr.html', 'utf8');
        const nav = fs.readFileSync('./data/nav.html', 'utf8');
        html = html.replace('{{NAV}}', nav).replace('{{ID}}', color.id).replace('{{SHAPE}}', color.shape).replaceAll('COLOR', color.color);
        html = html.replace('JSSHAPE', color.shape);
        res.send(html);
    }
});


app.post('/update/:id', (req, res) => {
    const color = req.body.color;
    const shape = parseInt(req.body.shape);
    let data = fs.readFileSync('./data/colors.json', 'utf8');
    data = JSON.parse(data);
    data = data.map(c => c.id === req.params.id ? { ...c, color, shape } : c);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/colors.json', data);

    addMessage(req.sessionsId, 'Color was edited', 'success');
    res.redirect(302, 'http://colors.test');
});




app.listen(port, _ => {
    console.log(`Colors app listening on port ${port}`);
});