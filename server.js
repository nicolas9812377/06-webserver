const express = require('express');
const app = express();
const hsb = require('hbs');
require('./hbs/helper');
const puerto = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hsb.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'nIcOlAs cArRasCo',
        anio: new Date().getFullYear(),
        pagina: 'Home'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear(),
        pagina: 'About'
    });
});

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});