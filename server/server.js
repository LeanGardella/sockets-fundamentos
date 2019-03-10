const express = require('express');

const socketIO = require('socket.io'); // importo la libreria de socket.io
const http = require('http'); //importo la libreria default de node para manjear http

const path = require('path');

const app = express();
let server = http.createServer(app); //creo un server http de node, con la config del server express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); // ese es el socket del lado del backend, lo exporto para poderlo usar en el otro archivo
require('./sockets/socket'); // require del otro archivo para importar toda la logica del socket


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});