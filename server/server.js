require('./config/config');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json('Hello World');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        });
    } else {
        res.json({
            body
        });
    }

});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});