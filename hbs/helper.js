const hsb = require('hbs');

hsb.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hsb.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});