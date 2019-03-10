const { io } = require('../server')
    // Escucho cuando se me conecta alguien
io.on('connection', (client) => {
    console.log('Usuario conectado.');

    // Emito desde el server para que se le envie al que se conectó
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la aplicación.'
    });

    // Presto atención cuando ese alguien se va
    client.on('disconnect', () => {
        console.log('Usuario desconectado.');
    });

    // Escucho si ese alguien emite un mensaje
    client.on('enviarMensaje', (msg, callback) => {
        console.log('Mensaje recibido: ', msg);

        client.broadcast.emit('enviarMensaje', msg);
        // if (msg.usuario) {
        //     callback(true); // si viene el usuario, todo ok
        // } else {
        //     callback(false); // si no viene el usuario, todo mal
        // }
    });
});